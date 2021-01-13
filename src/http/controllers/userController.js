import UserService from '../../services/usersService';
import {registerDataSchema} from '../schemas/authSchema';

export default class UserController {
	
	static async login (req, res) {
		try {
			return {message: 'Not implemented yet!!'};
		} catch (err) {
			console.log("AuthController -> Login error: ", err);
			return res.status(401).send(err);
		}
	}
	
	static async register (req, res) {
		try {
			const result = registerDataSchema.validate(req.body)
			let { value, error } = result;
			if (error)
				return Promise.reject({
					data: error.details,
					statusCode: 500,
					error: true
				});
			// return res.status(500).send(error.details);
			return UserService.createUser(value);
			
			
			// UserService.createUser(value).then(response => {
			// 	return res.status(200).send(response);
			// 	// return res.statusCode(200).send(response);
			// }).catch(err => {
			// 	return res.status(500).send(err);
			// });
		} catch (err) {
			console.error( "Something happen: ", err)
			return  res.status(400).send(err);
		}
	}
	
	static async getAll (req, res) {
		try {
			return UserService.getAllUser();
		} catch (err) {
			return res.status(400).send(err);
		}
	}
	
}