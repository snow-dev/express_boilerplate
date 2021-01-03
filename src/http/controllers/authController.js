

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
	
}