import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/users.repository'

interface CreateUserDto {
  name: string
  email: string
  admin?: boolean
}

export class CreateUserService {
  async execute({ name, email, admin }: CreateUserDto) {
    const usersRepository = getCustomRepository(UsersRepository)

    if (!email) {
      throw new Error('Invalid email')
    }

    const userAlreadyExists = await usersRepository.findOne({
      where: { email }
    })

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = usersRepository.create({ name, email, admin })

    await usersRepository.save(user)

    return user
  }
}
