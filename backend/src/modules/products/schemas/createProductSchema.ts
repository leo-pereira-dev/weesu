import Joi from 'joi';

const createProductSchema = Joi.object({
  name: Joi.string()
    .min(1) // Garante que não seja uma string vazia
    .required()
    .messages({
      'any.required': 'O campo nome é obrigatório.',
      'string.base': 'O nome deve ser uma string.',
      'string.empty': 'O campo nome não pode ser vazio.',
      'string.min': 'O campo nome deve ter pelo menos 1 caractere.',
    }),
  price: Joi.number()
    .greater(0) // Garante que o preço seja maior que 0
    .required()
    .messages({
      'any.required': 'O campo preço é obrigatório.',
      'number.base': 'O preço deve ser um número.',
      'number.greater': 'O preço deve ser maior que 0.',
    }),
  quantity: Joi.number()
    .integer()
    .greater(0) // Garante que a quantidade seja maior que 0
    .required()
    .messages({
      'any.required': 'O campo quantidade é obrigatório.',
      'number.base': 'A quantidade deve ser um número.',
      'number.integer': 'A quantidade deve ser um número inteiro.',
      'number.greater': 'A quantidade deve ser maior que 0.',
    }),
  model: Joi.string()
    .min(1) // Garante que não seja uma string vazia
    .required()
    .messages({
      'any.required': 'O campo modelo é obrigatório.',
      'string.base': 'O modelo deve ser uma string.',
      'string.empty': 'O campo modelo não pode ser vazio.',
      'string.min': 'O campo modelo deve ter pelo menos 1 caractere.',
    }),
  reference: Joi.string()
    .min(1) // Garante que não seja uma string vazia
    .required()
    .messages({
      'any.required': 'O campo referência é obrigatório.',
      'string.base': 'A referência deve ser uma string.',
      'string.empty': 'O campo referência não pode ser vazio.',
      'string.min': 'O campo referência deve ter pelo menos 1 caractere.',
    }),
  brand: Joi.string()
    .min(1) // Garante que não seja uma string vazia
    .required()
    .messages({
      'any.required': 'O campo marca é obrigatório.',
      'string.base': 'A marca deve ser uma string.',
      'string.empty': 'O campo marca não pode ser vazio.',
      'string.min': 'O campo marca deve ter pelo menos 1 caractere.',
    }),
  image_url: Joi.string()
    .uri() // Garante que a URL seja válida
    .required()
    .messages({
      'any.required': 'O campo URL da imagem é obrigatório.',
      'string.base': 'A URL da imagem deve ser uma string.',
      'string.empty': 'O campo URL da imagem não pode ser vazio.',
      'string.uri': 'A URL da imagem deve ser uma URL válida.',
    }),
  user_id: Joi.number()
    .integer()
    .greater(0) // Garante que o ID do usuário seja maior que 0
    .required()
    .messages({
      'any.required': 'O campo ID do usuário é obrigatório.',
      'number.base': 'O ID do usuário deve ser um número.',
      'number.integer': 'O ID do usuário deve ser um número inteiro.',
      'number.greater': 'O ID do usuário deve ser maior que 0.',
    }),
});

export default createProductSchema;
