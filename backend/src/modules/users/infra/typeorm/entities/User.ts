import { Column, Entity } from 'typeorm';
import Base from '@shared/infra/typeorm/entities/Base';
import { IUser } from '@modules/users/domain/models/IUser';

@Entity('users')
class User extends Base implements IUser {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  photo_url: string;
}

export default User;
