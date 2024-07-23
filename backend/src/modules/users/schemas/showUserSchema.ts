import Joi from 'joi';

const showUserSchema = Joi.object({
  id: Joi.number().required().messages({
    'any.required': 'O campo ID é obrigatório.',
    'number.base': 'O ID deve ser um número.',
  }),
});

export default showUserSchema;
