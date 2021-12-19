import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider'
import { UsersRepository } from './../../repositories/implementations/UsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailTrapMailProvider = new MailTrapMailProvider()
const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController }
