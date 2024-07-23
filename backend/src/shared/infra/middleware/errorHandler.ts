// src/middlewares/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

// Middleware de tratamento de erros
const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      statusCode: error.statusCode,
      validation: {
        body: {
          message: error.message,
        },
      },
    });
  } else {
    console.log(error);
    response.status(500).json({
      status: 'error',
      message: 'Erro Desconhecido!',
    });
  }
};

export default errorHandler;
