import models from '../database/models';

export default class UserService {
	
	/**
	 * * Creates a user into the local database with the provided data
	 * @param userdata (name, email, password)
	 * @returns {Promise<*>}
	 */
	static async createUser(userdata) {
		try {
			return await models.user.create(userdata);
		} catch (err) {
			console.error('Unable to connect to the database:', err);
			err.type = 'local';
			throw err;
		}
	}
	
	static async getAllUser() {
		try {
			return await  models.user.findAll();
		} catch (err) {
			throw err;
		}
	}
}