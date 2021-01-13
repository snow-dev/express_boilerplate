
import {has, get, includes, trimEnd, trimStart} from 'lodash';
import Schemas from '../schemas';
import methods from 'methods';
import Joi from 'joi';
import Boom from '@hapi/boom';

// Joi validation options
const validationOptions = {
	abortEarly: true, // abort after the last validation error
	allowUnknown: true, // allow unknown keys that will be ignored
	stripUnknown: true // remove unknown keys from the validated data
};

export default (req, res, next) => {
	let route
	const path = trimStart((req.route.path !== '/' ? req.route.path : ''), '/')
	route = trimEnd(`${req.baseUrl}/${path}`, '/')

	const key = `${req.method.toUpperCase()} ${route}`;

	if (includes(methods, req.method.toLowerCase()) && has(Schemas, key)) {
		// get schema for the current route
		const schema = get(Schemas, key)
		if (schema) {
			// Validate re.body using the schema and validation options
			Joi.validate(req.body, schema, validationOptions, (err, data) => {
				if (err) {
					const { details } = err;
					const message = details.map(i => i.message).join(',');
					
					console.log("error", message);
					res.status(422).json({ error: message })
					// Send back de JSON error response
					const boom = Boom.badRequest('Invalid request data. Please review request and try again.', err.details);
					next(boom)
				} else {
					// Replace req,body with the data after Joi validation
					req.body = data;
					next();
				}
			});
		}
	}
	next();
}