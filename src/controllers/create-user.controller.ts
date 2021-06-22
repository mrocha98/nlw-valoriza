import { Request, Response } from 'express'
import { CreateUserService } from '../services/create-user.service'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, admin })

    return res.json(user)
  }
}
