

export default class Auth {
	
	static async login (req, res) {
		try {
			let authData = {
				Username: req.body.username,
				Password: req.body.password,
			}
			return res.status(200).send({message: 'Not implemented yet!'});
		} catch (err) {
			console.log("AuthController -> Login error: ", err);
			res.status(401).send(err);
		}
	}
	
}