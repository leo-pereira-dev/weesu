// src/modules/users/infra/typeorm/repositories/UserRepository.ts
import { dataSource } from '@shared/infra/typeorm';

import User from '../entities/User';
import { IUserRepository } from '@modules/users/domain/repositories/IUserRepository';
import { ICreateUser } from '@modules/users/domain/models/ICreateUser';

export default class UserRepository implements IUserRepository {
  private ormRepository = dataSource.getRepository(User);

  public async create(data: ICreateUser): Promise<User> {
    const user = this.ormRepository.create(data);
    this.ormRepository.save(user);
    return user;
  }

  public async update(data: ICreateUser): Promise<User | null> {
    await this.ormRepository.update(data.id, data);
    const updatedUser = await this.ormRepository.findOne({
      where: { id: data.id },
    });
    return updatedUser;
  }

  public async save(user: User): Promise<User> {
    this.ormRepository.save(user);
    return user;
  }

  public async findByName(name: string): Promise<User | null> {
    return this.ormRepository.findOne({ where: { name } });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.ormRepository.findOne({ where: { email } });
  }

  public async findOne(id: number): Promise<User | null> {
    return this.ormRepository.findOne({ where: { id } });
  }

  public async find(): Promise<User[]> {
    return this.ormRepository.find();
  }
}
