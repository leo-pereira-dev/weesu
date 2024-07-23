import IProduct from '../models/IProduct';
import IProductPaginate from '../models/IProductPaginate';

export type Pagination = {
  page: number;
  skip: number;
  take: number;
};

export interface IProductRepository {
  find(pagination: Pagination): Promise<IProductPaginate>;
  findByName(name: string): Promise<IProduct | null>;
  findOne(id: number): Promise<IProduct | null>;
  create(data: IProduct): Promise<IProduct>;
  delete(data: IProduct): Promise<void>;
  update(data: IProduct): Promise<IProduct | null>;
  save(user: IProduct): Promise<IProduct>;
}
