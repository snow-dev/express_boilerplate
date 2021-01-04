import UserService from '../../services/users';


export default class Auth {
	
	static async login (req, res) {
		try {
			let authData = {
				Username: req.body.username,
				Password: req.body.password,
			}
			return await res.status(200).send({message: 'Not implemented yet!'});
		} catch (err) {
			console.log("AuthController -> Login error: ", err);
			return res.status(401).send(err);
		}
	}
	
	static async register (req, res) {
		try {
			let user = {};
			user.name = req.body.name;
			user.email = req.body.email;
			user.password = req.body.password;
			
			return UserService.createUser(user);
			// return await res.status(200).send({message: 'Not implemented yet!'});
		} catch (err) {
			res.status(400).send(err);
		}
	}
}