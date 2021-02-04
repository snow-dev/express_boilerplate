import express from 'express';
import jwt from 'jsonwebtoken';

const protectedRoute = express.Router();

export default protectedRoute.use((req, res, next) => {
	const token = req.headers['authorization'];
	
	if (token) {
		jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
			if (err) {
				return res.status(403).send({message: err.message , error: err });
			} else {
				req.decode = decoded;
				next();
			}
		})
	} else  {
		res.send({ message: 'Token not provided'})
	}
});

