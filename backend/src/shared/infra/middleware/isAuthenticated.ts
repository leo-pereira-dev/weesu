import auth from '@config/auth';
import { HttpStatusCodes } from '@shared/enums/HttpStatusCodes';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ITokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Não autenticado!', HttpStatusCodes.UNAUTHORIZED);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodeToken = verify(token, auth.jwt.secret);
    // Você pode adicionar o token decodificado à solicitação, se precisar usá-lo nas rotas posteriores
    const { sub } = decodeToken as ITokenPayLoad;

    request.user = {
      id: sub,
    };

    // Continue para o próximo middleware ou rota
    next();
  } catch (error) {
    throw new AppError('Não autenticado!', HttpStatusCodes.UNAUTHORIZED);
  }
}
