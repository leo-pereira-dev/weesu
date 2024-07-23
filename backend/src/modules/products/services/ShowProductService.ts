import AppError from '@shared/errors/AppError';
import { HttpStatusCodes } from '@shared/enums/HttpStatusCodes';
import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../domain/repositories/IProductRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  id: number;
}

@injectable()
class ShowProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  public async execute({ id }: IRequest): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product)
      throw new AppError(
        'Esse produto não existe em nosso sistema.',
        HttpStatusCodes.NOT_FOUND,
      );

    return product;
  }
}

export default ShowProductService;
