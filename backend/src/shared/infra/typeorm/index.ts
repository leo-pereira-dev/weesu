import { DataSource } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CriarUsuarios1721405475493 } from './migrations/1721405475493-CriarUsuarios';
import { CriarProdutos1721245293917 } from './migrations/1721245293917-CriarProdutos';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Essasenha0521@',
  database: 'weesu',
  entities: [User, Product],
  migrations: [CriarProdutos1721245293917, CriarUsuarios1721405475493],
});
