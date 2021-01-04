import UserService from '../../services/usersService';

export default class UserController {
	
	static async login (req, res) {
		try {
			return {message: 'Not implemented yet!'};
		} catch (err) {
			console.log("AuthController -> Login error: ", err);
			return res.status(401).send(err);
		}
	}
	
	static async register (req, res) {
		try {
			return UserService.createUser(req.body);
		} catch (err) {
			console.error(err)
			res.status(400).send(err);
		}
	}
}