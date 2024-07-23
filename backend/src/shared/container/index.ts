import { container } from 'tsyringe';

import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository';
import { IProductRepository } from '@modules/products/domain/repositories/IProductRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
