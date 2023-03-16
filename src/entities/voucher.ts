import { BaseEntity } from './base-entity';
import { Partner } from './partner';
import { Product } from './product';
import { User } from './user';

export class Voucher extends BaseEntity {
  isActive: Boolean;

  product: Product;

  amount: number;

  user: User;

  partner: Partner;
}
