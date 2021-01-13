import joi, {fullName, integer, password, email} from '../../libraries/joi';
import * as Joi from 'joi';

export const authDataSchema = joi.object({
	username: email,
	password: password,
});

export const registerDataSchema = Joi.object().keys({
	name: fullName,
	email: email,
	password: password,
	conf_password: password,
	status: integer,
});