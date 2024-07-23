import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from '@shared/infra/middleware/errorHandler';
import '@shared/infra/typeorm';
import '@shared/container';
import { errors } from 'celebrate';
import loadRoutes from '@shared/infra/http/routes'; // Ajuste o caminho conforme necessário
import { pagination } from 'typeorm-pagination';

const app = express();

const startServer = async (): Promise<void> => {
  try {
    // Middleware para habilitar CORS
    app.use(cors());

    // Middleware para parsing de JSON
    app.use(express.json());

    // Middleware para paginação
    app.use(pagination);

    // Middleware para as rotas - Carregue as rotas após o parsing de JSON
    await loadRoutes(app); // Carregar as rotas dinamicamente

    // Middleware para erros de validação - Deve ser definido após as rotas
    app.use(errors());

    // Middleware de tratamento de erros - Deve ser definido após os middlewares de validação
    app.use(errorHandler);
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1); // Encerrar o processo com um código de erro
  }
};

export { app, startServer };
