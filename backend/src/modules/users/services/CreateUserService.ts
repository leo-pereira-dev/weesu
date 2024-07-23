import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { hash } from 'bcryptjs';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { IUser } from '../domain/models/IUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}
  public async execute(data: IUser): Promise<User> {
    const userExist = await this.usersRepository.findByEmail(data.email);

    if (userExist) {
      throw new AppError('Já existe um usuário com este email');
    }

    const hashedPassword = await hash(data.password, 8);
    data.password = hashedPassword;

    const user = await this.usersRepository.create(data);

    return user;
  }
}

export default CreateUserService;
