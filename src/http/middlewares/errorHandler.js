import log from '../../libraries/log.js';
import Boom from '@hapi/boom';

/**
 * Any request to this server will get here, and will send an HTTP
 * response with the error message 'woops'
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const ErrorHandler =  async (err, req, res, next) => {
	if (err.statusCode === 500)
		log.fatal(err.trace.toString())
	
	if (!err.isBoom) {
		console.log({name: err.name}, '@ errorHandler' );
		switch (err.name) {
			case 'SequelizeValidationError':
				err = Boom.badData(err.message || 'Sequelize validation error', err.errors)
				break
			
			case 'SequelizeDatabaseError':
				err = Boom.badData(err.message || 'Bad data!', err.errors)
				break
			case 'SequelizeNotFoundException':
				err = Boom.notFound('The requested resource was not found')
				break
			case 'UsernameExistsException':
				err = Boom.conflict(err.message || 'A resource with the given attributes already exists!', err.errors)
				break
			case 'NotAuthorizedException':
				err = Boom.unauthorized(err.message || 'Unauthorized!')
				break
			default:
				err = Boom.badImplementation('(╯°□°）╯︵ ┻━┻ Something went wrong dude. Fix it!', err)
				break
		}
	}
	
	let statusCode = err.output.statusCode || err.statusCode || 500
	// let errJson = {
	// 	statusCode,
	// 	message: err.message || '(╯°□°）╯︵ ┻━┻ Something went wrong dude. Fix it!',
	// 	data: err.data || [],
	// 	error: true
	// }
	
	res.status(statusCode).send('(╯°□°）╯︵ ┻━┻ Something went wrong dude. Fix it!')
};

export default ErrorHandler;