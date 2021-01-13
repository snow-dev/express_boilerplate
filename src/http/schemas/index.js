
import {authDataSchema, registerDataSchema} from './authSchema';

export default {
	'POST /auth/login': authDataSchema,
	'POST /auth/register': registerDataSchema
}