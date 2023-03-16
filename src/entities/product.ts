import { BaseEntity } from './base-entity';
import { Partner } from './partner';

export class Product extends BaseEntity {
  isActve: boolean;

  imgUrl: string;

  code: string;

  amount: number;

  type: string;

  brand: string;

  stock: number;

  partner: Partner;
}

