import { celebrate, Segments } from 'celebrate';
import showProductSchema from '../schemas/showProductSchema';
import createProductSchema from '../schemas/createProductSchema';
import updateProductSchema from '../schemas/updateProductSchema';

const validateShowProduct = celebrate({
  [Segments.BODY]: showProductSchema,
});

const validateCreateProduct = celebrate({
  [Segments.BODY]: createProductSchema,
});

const validateUpdateProduct = celebrate({
  [Segments.BODY]: updateProductSchema,
});

export { validateShowProduct, validateCreateProduct, validateUpdateProduct };
