import { BaseEntity } from './base-entity';

export interface Adress {
  zipCode: string;
  complement: string;
  streed: string;
  number: string;
  city: string;
  state: string;
  neighborhood: string;
}

export class Partner extends BaseEntity {
  isActive: boolean;

  name: string;

  documentNumber: string;

  phone: Record<'ddd' | 'phoneNumber', string>;

  fantasyName: string;

  adress: Adress;

  email: string;

  password: string;
}
