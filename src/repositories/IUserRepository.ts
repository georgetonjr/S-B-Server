import { User } from './../entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  save(user: User): Promise<void>;
}