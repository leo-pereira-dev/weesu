import AppError from '@shared/errors/AppError';
import IProduct from '../domain/models/IProduct';
import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../domain/repositories/IProductRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  public async execute(data: IProduct): Promise<void> {
    const product = await this.productRepository.findOne(data.id);

    if (!product) throw new AppError('Produto informado não existe no sistema');

    await this.productRepository.delete(product);
  }
}

export default DeleteProductService;
