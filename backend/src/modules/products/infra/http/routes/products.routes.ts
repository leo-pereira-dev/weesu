import { Router } from 'express';
import ProductsController from '@modules/products/infra/http/controllers/ProductsController';
import {
  validateShowProduct,
  validateCreateProduct,
  validateUpdateProduct,
} from '@modules/products/middleware/validationMiddleware';
import isAuthenticated from '@shared/infra/middleware/isAuthenticated';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.use(isAuthenticated);

productsRouter.post('/list', productsController.index.bind(productsController));

productsRouter.post(
  '/show',
  validateShowProduct,
  productsController.show.bind(productsController),
);

productsRouter.post(
  '/create',
  validateCreateProduct,
  productsController.create.bind(productsController),
);

productsRouter.put(
  '/update',
  validateUpdateProduct,
  productsController.update.bind(productsController),
);

productsRouter.delete(
  '/delete',
  validateShowProduct,
  productsController.delete.bind(productsController),
);

export default productsRouter;
