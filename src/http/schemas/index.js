import {authDataSchema, registerDataSchema} from '../../../dist-server/http/schemas/auth';

export default {
	'POST /auth/login': authDataSchema,
	'POST /auth/register': registerDataSchema
}