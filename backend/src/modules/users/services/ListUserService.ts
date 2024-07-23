import { IUserRepository } from '../domain/repositories/IUserRepository';
import { ICreateUser } from '../domain/models/ICreateUser';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { inject, injectable } from 'tsyringe';

@injectable()
class ListProductService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute(): Promise<ICreateUser[]> {
    // Obtém os usuários do repositório
    const users = await this.usersRepository.find();

    // Mapeia os usuários para o formato de resposta
    const userResponse: ICreateUser[] = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      photo_url: user.photo_url,
    }));

    return userResponse;
  }
}

export default ListProductService;
