import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().min(4).required(),
    lastname:Joi.string().min(4).optional(),
    email:Joi.string().min(4).required(),
    pwd:Joi.string().min(4).required(),

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
