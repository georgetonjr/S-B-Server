import { PrismaClient } from '@prisma/client'
import { User } from './../../entities/User'
import { IUsersRepository } from './../IUserRepository'

const prisma = new PrismaClient()
export class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient
  private users: User[] = []

  constructor () {
    this.prisma = new PrismaClient()
  }

  async findByEmail (email: string): Promise<User> {
    return prisma.user.findUnique({ where: { email } })
  }

  async save (user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
  }
}
