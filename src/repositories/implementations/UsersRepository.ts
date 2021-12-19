import { PrismaClient } from '@prisma/client'
import * as crypto from 'crypto-js'
import { User } from './../../entities/User'
import { IUsersRepository } from './../IUserRepository'

const prisma = new PrismaClient()
export class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async findByEmail (email: string): Promise<User> {
    return prisma.user.findUnique({ where: { email } })
  }

  async findByCpf (cpf: string): Promise<User> {
    return prisma.user.findUnique({ where: { cpf } })
  }

  async save (user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: crypto.AES.encrypt(
          user.password,
          process.env.CRYPTO_KEY
        ).toString(),
        cpf: user.cpf,
        phone: user.phone
      }
    })
  }
}
