import { BaseEntity } from './base-entity';

export class User extends BaseEntity {
  name: string;

  documentNumber: string;

  phone: string;

  email: string;

  passWord: string;

}
