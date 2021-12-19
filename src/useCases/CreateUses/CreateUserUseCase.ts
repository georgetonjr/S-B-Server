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
