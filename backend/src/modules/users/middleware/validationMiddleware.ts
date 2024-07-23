import { celebrate, Segments } from 'celebrate';
import showUserSchema from '../schemas/showUserSchema';
import createUserSchema from '../schemas/createUserSchema';
import loginUserSchema from '../schemas/loginUserSchema';
import updateUserSchema from '../schemas/updateUserSchema';

const validateShowUser = celebrate({
  [Segments.BODY]: showUserSchema,
});

const validateCreateUser = celebrate({
  [Segments.BODY]: createUserSchema,
});

const validateUpdateUser = celebrate({
  [Segments.BODY]: updateUserSchema,
});

const validateLoginUser = celebrate({
  [Segments.BODY]: loginUserSchema,
});

export {
  validateShowUser,
  validateCreateUser,
  validateLoginUser,
  validateUpdateUser,
};
