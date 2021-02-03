import models from '../database/models';

export default class UserService {
	static async login(userdata) {
	
	}
	
	
	/**
	 * Creates a user into the local database with the provided data
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
	/**
	 * Get user by email.
	 * @param email - string
	 * @returns {Promise<user[]>}
	 */
	static async getUserByEmail(email) {
		try {
			return await models.user.findAll({
				where: {
					email: email,
					status: 1,
				}
			});
		} catch (err) {
			err.type = 'local';
			throw err;
		}
	}
	/**
	 * Return all users
	 * @returns {Promise<user[]>}
	 */
	static async getAllUser() {
		try {
			return await models.user.findAll();
		} catch (err) {
			throw err;
		}
	}
	/**
	 * Delete user by userID
	 * @param userId
	 * @returns {Promise<*>}
	 */
	static async deleteById(userId) {
		try {
			return await models.user.destroy({
				where: {
					id: userId
				}
			});
		} catch (err) {
			throw err;
		}
	}
	
}