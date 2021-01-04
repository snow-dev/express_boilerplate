import User from '../database/models/user';
import Sequelize, {json} from 'sequelize';
import DB from '../config/database';

export default class UserService {
	
	/**
	 * description Creates a user into the local database with the provided data
	 * @param userdata (name email, password, confirm_password)
	 * @returns {Promise<User>}
	 */
	static async createUser(userdata) {
		
		const sequelize = new Sequelize(DB.database, DB.username, DB.password, DB);
		
		try {
			await sequelize.authenticate();
			console.log("Connection has been established successfully");
			// return 'Not implemented yet!';
			return User.create(userdata);
		} catch (err) {
			console.error('Unable to connect to the database:', err);
			err.type = 'local';
			throw err;
		}
	}
}