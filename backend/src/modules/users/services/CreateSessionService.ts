import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import { compare } from 'bcryptjs';
import { HttpStatusCodes } from '@shared/enums/HttpStatusCodes';
import { sign } from 'jsonwebtoken';
import AuthConfig from '@config/auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../domain/repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}
  public async execute(data: IRequest): Promise<IResponse> {
    const userExist = await this.usersRepository.findByEmail(data.email);

    if (!userExist) {
      throw new AppError(
        'E-mail ou senha inválido.',
        HttpStatusCodes.NOT_FOUND,
      );
    }

    const passwordMatched = await compare(data.password, userExist.password);

    if (!passwordMatched) {
      throw new AppError(
        'E-mail ou senha inválido.',
        HttpStatusCodes.NOT_FOUND,
      );
    }

    const token = sign(
      {
        sub: String(userExist.id), // Inclua o ID do usuário no payload
      },
      AuthConfig.jwt.secret,
      {
        expiresIn: AuthConfig.jwt.expiresIn,
      },
    );

    return {
      user: userExist,
      token,
    };
  }
}

export default CreateSessionService;
