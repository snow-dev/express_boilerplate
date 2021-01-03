import Joi from 'joi';

// Composite auth request data schema
export const authDataSchema = Joi.object().keys({
	username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

// export const registerDataSchema = joi.object().keys({
// 	name: type.fullname.required(),
// 	phone_number: type.phone_number.required(),
// 	email: type.email.required(),
// 	password: type.password.required(),
// 	confirm_password: type.password.valid(joi.ref('password')).required().strict()
// });