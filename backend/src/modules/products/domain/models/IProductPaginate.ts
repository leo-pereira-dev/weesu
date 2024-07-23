import IProduct from './IProduct';

interface IProductPaginate {
  per_page: number;

  total: number;

  current_page: number;

  data: IProduct[];
}

export default IProductPaginate;
