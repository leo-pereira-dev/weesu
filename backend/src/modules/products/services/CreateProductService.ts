import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IProduct from '../domain/models/IProduct';
import { IProductRepository } from '../domain/repositories/IProductRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  public async execute(data: IProduct): Promise<IProduct> {
    const productExist = await this.productRepository.findByName(data.name);

    if (productExist) throw new AppError('Já existe um produto com esse nome');

    const product = await this.productRepository.create(data);

    return product;
  }
}

export default CreateProductService;
