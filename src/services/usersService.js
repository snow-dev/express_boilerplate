// import User from '../database/models/userModel';
// import Sequelize from 'sequelize';

export default class UserService {
	
	/**
	 * description Creates a user into the local database with the provided data
	 * @param userdata (name email, password, confirm_password)
	 * @returns {Promise<User>}
	 */
	static async createUser(userdata) {
		try {
			console.log("User services -> User: ", userdata);
			// return { message: 'Not implemented yet!'};
			return await User.create(userdata);
		} catch (err) {
			console.error('Unable to connect to the database:', err);
			err.type = 'local';
			throw err;
		}
	}
}