import { BaseEntity } from './base-entity';
import { Partner } from './partner';
import { Product } from './product';

export class Promotion extends BaseEntity {
  isActive: boolean;

  product: Product;

  amount: number;
  
  stock: number;

  vouncherLimit: number;

  partner: Partner;

  expirationDate: Date;
}



