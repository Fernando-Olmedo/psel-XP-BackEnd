const Joi = require('joi');

const movementDataSchema = Joi.object({
  codCliente: Joi.number().integer().required(),
  valor: Joi.number().greater(0).required(),
}).messages({
  'any.required': '"{{#key}}" is required',
  'number.integer': '"{{#key}}" must be a integer',
  'number.greater': '"{{#key}}" quantity must be greater than {{#limit}}',
});

const errorCode = {
  'any.required': 400,
  'number.base': 422,
  'number.min': 422,
  'number.greater': 422,
};

module.exports = async (req, res, next) => {
  const { error } = movementDataSchema.validate(req.body, { abortEarly: true });
  if (error) {
    return res.status(errorCode[error.details[0].type]).json({ message: error.details[0].message });
  }
  next();
};