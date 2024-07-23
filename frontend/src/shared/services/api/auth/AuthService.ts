import axios from 'axios';
import { Api } from '../axios-config';

interface IAuth {
  token: string;
}

interface IValidationError {
  source: string;
  keys: string[];
  message: string;
}

interface IErrorResponse {
  statusCode: number;
  error: string;
  message: string;
  validation: {
    body: IValidationError;
  };
}

const auth = async (email: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/users/login', {  email, password });

    if (data) {
      return data;
    }

    return new Error('Erro no login.');
  } catch (err) {

    // Check if err is of type AxiosError
    if (axios.isAxiosError(err) && err.response) {
      const errorData = err.response.data as IErrorResponse;

      console.log(errorData.validation);

      if (errorData.validation && errorData.validation.body) {
        return new Error(errorData.validation.body.message);
      }
      
      return new Error(errorData.message || 'Erro no login.');
    }

    // Caso não encontre a mensagem específica, retorna a mensagem geral de erro
    return new Error((err as { message: string }).message || 'Erro no login.');
  }
};

export const AuthService = {
  auth,
};
