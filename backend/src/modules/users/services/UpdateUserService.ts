import AppError from '@shared/errors/AppError';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { ICreateUser } from '../domain/models/ICreateUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: number;
  name: string;
  email: string;
  photo_url: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute(data: IRequest): Promise<ICreateUser> {
    const userExistName = await this.usersRepository.findByName(data.name);
    const user = await this.usersRepository.findOne(data.id);

    if (!user) {
      throw new AppError('Este usuario não existe em nosso sistema.');
    }

    if (userExistName && data.name !== user.name) {
      throw new AppError('Já existe um usuario com este nome');
    }

    const userUpdated = await this.usersRepository.update(data);

    if (!userUpdated) {
      throw new AppError('Erro ao atualizar o usuário');
    }

    const userResponse: ICreateUser = {
      id: userUpdated.id,
      name: userUpdated.name,
      email: userUpdated.email,
      photo_url: userUpdated.photo_url,
    };

    return userResponse;
  }
}

export default UpdateUserService;
