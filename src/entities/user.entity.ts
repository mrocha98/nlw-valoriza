import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id: string

  @Column({ nullable: false })
  name: string

  @Column({ unique: true, nullable: false })
  email: string

  @Column({ default: false })
  admin: boolean

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
