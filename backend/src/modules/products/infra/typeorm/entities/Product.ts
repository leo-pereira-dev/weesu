import { Column, Entity } from 'typeorm';
import Base from '@shared/infra/typeorm/entities/Base';

@Entity('products')
class Product extends Base {
  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  @Column()
  model: string;

  @Column()
  reference: string;

  @Column()
  brand: string;

  @Column('text')
  image_url: string;

  @Column('int')
  user_id: number;
}

export default Product;
