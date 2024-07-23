import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../domain/repositories/IProductRepository';
import IProductPaginate from '../domain/models/IProductPaginate';

interface IRequest {
  page: number;
  limit: number;
}

@injectable()
class ListProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  public async execute(data: IRequest): Promise<IProductPaginate> {
    const take = data.limit;
    const page = data.page;
    const skip = Number((data.page - 1) * take);
    const products = await this.productRepository.find({ page, skip, take });
    return products;
  }
}

export default ListProductService;
