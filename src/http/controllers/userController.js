// import user from '../../database/models/userModel';
const models = require('../../database/models');
const User = models.User;

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
			let newUser = {};
			newUser.id = 1;
			newUser.name = req.body.name;
			newUser.email = req.body.email;
			newUser.password = req.body.password;
			
			console.log("New user register: ", req.body);
			// console.log("New user create: ", User.create());
			
			// return  await UserService.createUser(req.body);
			return User.create(req.body);
			
			// console.log("User to register: ", snow.toJSON());
			// return newUser;
			// 	.then(user => {
			// 		res.status(200).send(user)
			// 		console.log('response: ', user);
			// 	}).catch(error => {
			// 		res.status(400).send(error)
			// 	console.log('error: ', user);
			// });
			// return {message: 'Not implemented'};
		} catch (err) {
			console.error(err)
			res.status(400).send(err);
		}
	}
}