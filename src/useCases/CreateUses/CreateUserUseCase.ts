import * as crypto from 'crypto-js'
import { User } from './../../entities/User'
import { IMailProvider } from './../../providers/IMailProvider'
import { IUsersRepository } from './../../repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    try {
      const userAlredyExists = await this.usersRepository.findByEmail(
        data.email
      )

      if (userAlredyExists) {
        const senha = crypto.AES.decrypt(userAlredyExists.password, process.env.CRYPTO_KEY).toString(crypto.enc.Utf8)
        console.log(senha)
        throw new Error('user alredy exists!')
      }

      const user = new User(data)

      await this.usersRepository.save(user)

      await this.mailProvider.sendMail({
        to: {
          name: data.name,
          email: data.email
        },
        from: {
          name: 'contato',
          email: 'contato@meuapp.com'
        },
        subject: "Seja bem-vindo a'plataforma",
        body: '<p> Você já pode fazer login em nossa plataforma</p>'
      })
    } catch (err) {
      throw new Error(err)
    }
  }
}
