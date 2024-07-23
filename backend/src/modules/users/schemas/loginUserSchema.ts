import Joi from 'joi';

// Defina o esquema de validação para criação de usuário
const loginUserSchema = Joi.object({
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
});

export default loginUserSchema;
