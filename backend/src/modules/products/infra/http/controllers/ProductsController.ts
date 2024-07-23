import { Request, Response } from 'express';
import ListProductService from '../../../services/ListProductService';
import ShowProductService from '../../../services/ShowProductService';
import CreateProductService from '../../../services/CreateProductService';
import UpdateProductService from '../../../services/UpdateProductService';
import DeleteProductService from '../../../services/DeleteProductService';
import { container } from 'tsyringe';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.body.page ? Number(request.body.page) : 1;
    console.log(page);
    const limit = request.body.limit ? Number(request.body.limit) : 15;

    const products = await container
      .resolve(ListProductService)
      .execute({ page, limit });
    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(ShowProductService)
      .execute(request.body);

    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(CreateProductService)
      .execute(request.body);
    return response.json(products);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(UpdateProductService)
      .execute(request.body);

    return response.json(products);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(DeleteProductService)
      .execute(request.body);

    return response.json(products);
  }
}
