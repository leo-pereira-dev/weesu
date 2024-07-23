import { Environment } from '../../../environment';
import { Api } from '../axios-config';


export interface IListagemProduto {
  per_page: number;
  total: number;
  current_page: number;
  data: IDetalheProduto[];
}

export interface IDetalheProduto {
  id: number;
  name: string;
  price: number;
  model: string;
  reference: string;
  brand: string;
  image_url: string;  
  quantity: number;
}

export interface IRequest {
  page: number;
  limit: number
}

type TProdutosComTotalCount = {
  data: IListagemProduto;
  totalCount: number;
}

const getAll = async (req: IRequest): Promise<TProdutosComTotalCount | Error> => {
  try {
    const urlRelativa = '/products/list';

    const { data, headers } = await Api.post(urlRelativa, req);

    if (data) {
      return {
        data,
        totalCount: 1,
      };
    }

    return new Error('Erro ao listar os registros.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');
  }
};

const getById = async (id: number): Promise<IDetalheProduto | Error> => {
  try {
    const { data } = await Api.post('/products/show',{id});

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o registro.');
  }
};

const create = async (dados: Omit<IDetalheProduto, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IDetalheProduto>('/products/create', dados);

    if (data) {
      return data.id;
    }

    return new Error('Erro ao criar o registro.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dados: IDetalheProduto): Promise<void | Error> => {
  try {
    console.log(dados);
    await Api.put('/products/update', dados);
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete('/products/delete', {
      data: { id },
    });
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao apagar o registro.');
  }
};



export const ProdutosService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};
