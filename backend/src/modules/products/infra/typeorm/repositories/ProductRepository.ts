// src/modules/users/infra/typeorm/repositories/UserRepository.ts
import { dataSource } from '@shared/infra/typeorm';

import {
  IProductRepository,
  Pagination,
} from '@modules/products/domain/repositories/IProductRepository';
import IProduct from '@modules/products/domain/models/IProduct';
import Product from '../entities/Product';
import IProductPaginate from '@modules/products/domain/models/IProductPaginate';

export default class ProductRepository implements IProductRepository {
  private ormRepository = dataSource.getRepository(Product);

  public async create(data: IProduct): Promise<IProduct> {
    const user = this.ormRepository.create(data);
    this.ormRepository.save(user);
    return user;
  }

  public async delete(data: IProduct): Promise<void> {
    this.ormRepository.remove(data);
  }

  public async update(data: IProduct): Promise<IProduct | null> {
    await this.ormRepository.update(data.id, data);
    const updatedUser = await this.ormRepository.findOne({
      where: { id: data.id },
    });
    return updatedUser;
  }

  public async save(user: IProduct): Promise<IProduct> {
    this.ormRepository.save(user);
    return user;
  }

  public async findByName(name: string): Promise<IProduct | null> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async findOne(id: number): Promise<IProduct | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async find(pagination: Pagination): Promise<IProductPaginate> {
    const [products, count] = await this.ormRepository
      .createQueryBuilder('product')
      .skip(pagination.skip)
      .take(pagination.take)
      .getManyAndCount();

    return {
      per_page: pagination.take,
      total: count,
      current_page: pagination.page,
      data: products,
    };
  }
}
