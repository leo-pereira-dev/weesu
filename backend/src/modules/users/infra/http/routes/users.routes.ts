import { Router } from 'express';
import UsersController from '../../../infra/http/controllers/UsersController';
import {
  validateShowUser,
  validateCreateUser,
  validateLoginUser,
  validateUpdateUser,
} from '@modules/users/middleware/validationMiddleware';
import isAuthenticated from '../../../../../shared/infra/middleware/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController(); // Instancia o UsersController

// Rotas públicas
usersRouter.post(
  '/create',
  validateCreateUser,
  usersController.create.bind(usersController),
);

usersRouter.post(
  '/login',
  validateLoginUser,
  usersController.login.bind(usersController),
);

// Rotas protegidas
usersRouter.use(isAuthenticated);

usersRouter.get('/list', usersController.index.bind(usersController));

usersRouter.post(
  '/show',
  validateShowUser,
  usersController.show.bind(usersController),
);

usersRouter.put(
  '/update',
  validateUpdateUser,
  usersController.update.bind(usersController),
);

export default usersRouter;
