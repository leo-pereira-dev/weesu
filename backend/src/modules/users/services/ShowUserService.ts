import AppError from '@shared/errors/AppError';
import { HttpStatusCodes } from '@shared/enums/HttpStatusCodes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { ICreateUser } from '../domain/models/ICreateUser';

interface IRequest {
  id: number;
}
@injectable()
class ShowUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}
  public async execute(data: IRequest): Promise<ICreateUser> {
    const user = await this.usersRepository.findOne(data.id);
    if (!user)
      throw new AppError(
        'Este usuario não existe em nosso sistema.',
        HttpStatusCodes.NOT_FOUND,
      );

    const userResponse: ICreateUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      photo_url: user.photo_url,
    };

    return userResponse;
  }
}

export default ShowUserService;
