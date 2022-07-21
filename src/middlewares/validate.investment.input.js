const Joi = require('joi');

const investmentDataSchema = Joi.object({
  codCliente: Joi.number().integer().required(),
  codAtivo: Joi.number().integer().required(),
  qtdeAtivo: Joi.number().integer().min(1).required(),
}).messages({
  'any.required': '"{{#key}}" is required',
  'number.integer': '"{{#key}}" must be a integer',
  'number.integer.min': '"{{#key}}" quantity must be at least {{#limit}}',
});

const errorCode = {
  'any.required': 400,
  'number.base': 422,
  'number.min': 422,
  'number.integer': 422,
};

module.exports = async (req, res, next) => {
  const { error } = investmentDataSchema.validate(req.body, { abortEarly: true });
  if (error) {
    return res.status(errorCode[error.details[0].type]).json({ message: error.details[0].message });
  }
  next();
};
