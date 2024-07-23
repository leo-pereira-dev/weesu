import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';

export interface IUserRepository {
  find(): Promise<IUser[]>;
  findByName(name: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findOne(id: number): Promise<IUser | null>;
  create(data: ICreateUser): Promise<IUser>;
  update(data: ICreateUser): Promise<IUser | null>;
  save(user: IUser): Promise<IUser>;
}
