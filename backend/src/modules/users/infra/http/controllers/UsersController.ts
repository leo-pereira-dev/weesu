import { Request, Response } from 'express';
import ListUserService from '../../../services/ListUserService';
import ShowUserService from '../../../services/ShowUserService';
import CreateUserService from '../../../services/CreateUserService';
import UpdateUserService from '../../../services/UpdateUserService';
import CreateSessionService from '../../../services/CreateSessionService';
import { container } from 'tsyringe';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const products = await container.resolve(ListUserService).execute();
    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(ShowUserService)
      .execute(request.body);

    return response.json(products);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(UpdateUserService)
      .execute(request.body);

    return response.json(products);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(CreateUserService)
      .execute(request.body);

    return response.json(products);
  }

  public async login(request: Request, response: Response): Promise<Response> {
    const products = await container
      .resolve(CreateSessionService)
      .execute(request.body);

    return response.json(products);
  }
}
