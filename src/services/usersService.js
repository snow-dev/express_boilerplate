import models from '../database/models';
const { User } = models;

export default class UserService {
	
	/**
	 * Creates a user into the local database with the provided data
	 * @param userdata (name, email, password)
	 * @returns {Promise<User>}
	 */
	static async createUser(userdata) {
		try {
			return await User.create(userdata);
		} catch (err) {
			console.error('Unable to connect to the database:', err);
			err.type = 'local';
			throw err;
		}
	}
}