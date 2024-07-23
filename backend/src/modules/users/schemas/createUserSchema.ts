import Joi from 'joi';

// Defina o esquema de validação para criação de usuário
const createUserSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    'string.base': 'Nome deve ser uma string',
    'string.empty': 'Nome não pode ser vazio',
    'string.min': 'Nome deve ter pelo menos {#limit} caracteres',
    'string.max': 'Nome deve ter no máximo {#limit} caracteres',
    'any.required': 'Nome é obrigatório',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email deve ser uma string',
    'string.email': 'Email deve ser um email válido',
    'string.empty': 'Email não pode ser vazio',
    'any.required': 'Email é obrigatório',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': 'Senha deve ser uma string',
    'string.empty': 'Senha não pode ser vazia',
    'string.min': 'Senha deve ter pelo menos {#limit} caracteres',
    'any.required': 'Senha é obrigatória',
  }),
  // confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
  //   'string.base': 'Confirmação de senha deve ser uma string',
  //   'string.empty': 'Confirmação de senha não pode ser vazia',
  //   'any.only': 'Senhas devem coincidir',
  //   'any.required': 'Confirmação de senha é obrigatória',
  // }),
});

export default createUserSchema;
