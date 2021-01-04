import Joi from 'joi';

// Composite auth request data schema
export const authDataSchema = Joi.object().keys({
	username: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

export const registerDataSchema = Joi.object().keys({
	name: Joi.string(),
	email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
	password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});