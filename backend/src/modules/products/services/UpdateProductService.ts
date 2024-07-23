import AppError from '@shared/errors/AppError';
import IProduct from '../domain/models/IProduct';
import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../domain/repositories/IProductRepository';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  public async execute(data: IProduct): Promise<IProduct | null> {
    const productExistName = await this.productRepository.findByName(data.name);
    const product = await this.productRepository.findOne(data.id);

    if (!product)
      throw new AppError('Esse produto não existe em nosso sistema.');

    if (productExistName && data.name !== product.name)
      throw new AppError('Já existe um produto com esse nome');

    const productResponse = await this.productRepository.update(data);

    return productResponse;
  }
}

export default UpdateProductService;
