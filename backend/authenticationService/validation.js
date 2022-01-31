const Joi = require("@hapi/joi");

// Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/) // Regex to accept only digits
      .required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    login: Joi.alternatives().try(
      Joi.string().min(6).email(),
      Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
    ).required(),
    // email: Joi.string().min(6).required().email(),
    // phoneNumber: Joi.string()
    //   .length(10)
    //   .pattern(/^[0-9]+$/) // Regex to accept only digits
    //   .required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
