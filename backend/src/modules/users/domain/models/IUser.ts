import { IBase } from '@shared/domain/models/IBase';

export interface IUser extends IBase {
  email: string;
  password: string;
  photo_url: string;
}
