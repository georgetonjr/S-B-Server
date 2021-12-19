import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password
      })
      return res.send()
    } catch (err) {
      res.status(409).json({
        message: err.message || 'Erro inesperado'
      })
    }
  }
}
