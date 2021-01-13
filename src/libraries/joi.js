import Joi from 'joi'

export default Joi

export const fullName = Joi.string().regex(/^[\W\D\s]+$/i);
export const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required();
export const password = Joi.string().alphanum().min(5).max(30).required();
// export const phone_number = Joi.string().regex(/^\+[1-9]{1,4}[0-9]{10,20}/i) // eslint-disable-line
// export const tinyString = Joi.string().max(24)
export const string = Joi.string().max(128)
export const text = Joi.string().max(512)
export const decimalPositive = Joi.number().positive().precision(2)
export const bool = Joi.boolean()
export const integerPositive = Joi.number().positive()
export const integer = Joi.number()
export const paymentMethods = Joi.string().valid('oxxo', 'spei', 'cash', 'card')
