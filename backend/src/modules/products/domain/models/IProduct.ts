import { IBase } from '@shared/domain/models/IBase';

interface IProduct extends IBase {
  price: number;

  quantity: number;

  model: string;

  reference: string;

  brand: string;

  image_url: string;

  user_id: number;
}

export default IProduct;
