import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      this.createUserUseCase.execute({
        name,
        email,
        password
      })
      return res.send()
    } catch (err) {
      return res.json({
        message: err.message || 'Erro inesperado'
      })
    }
  }
}
