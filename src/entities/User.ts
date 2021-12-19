import { v4 as uuid } from 'uuid'
export class User {
  public readonly id: string
  public readonly createdDate: Date

  public name: string
  public email: string
  public cpf: string
  public phone: string
  public password: string

  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
      this.createdDate = new Date()
    }
  }
}
