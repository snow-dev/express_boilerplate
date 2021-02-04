import env from 'env' // eslint-disable-line
import UserService from '../../services/usersService';
import {registerDataSchema, authDataSchema} from '../schemas/authSchema';
import * as http from 'http';
import jwt from 'jsonwebtoken';


export default class UserController {
	
	static async protected () {
		return Promise.reject({
			data: {message: "Protected OK!"},
			statusCode: 200,
			error: false
		});
	}
	
	/**
	 * Log into system using user(email) and password.
	 * @param req
	 * @param res
	 * @returns {Promise<{message: string}|*>}
	 */
	static async login (req, res) {
		try {
			let { value, error } = authDataSchema.validate(req.body);
			if (error) {
				return Promise.reject({
					data: error.details,
					statusCode: 400,
					error: true
				});
			}
			console.log("User data: ", value);
			if (value.username === 'snow@mail.com' && value.password === 'sesamo'){
				const payload = { check: true };
				const token = jwt.sign(payload, process.env.JWT_KEY, {
					expiresIn: 1440
				});
				return Promise.reject({
					data: { token: token },
					statusCode: 200,
					error: false
				});
			} else {
				return Promise.reject({
					data: { message: 'Unauthorized' },
					statusCode: 403,
					error: false
				});
			}
			
		} catch (err) {
			return res.status(400).send(err);
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
			return UserService.createUser(value);
			
		} catch (err) {
			console.error( "Something happen: ", err)
			return  res.status(400).send(err);
		}
	}
	
	static async delete (req) {
		try {
			let user = await UserService.getUserByEmail(req.body.email);
			if (user[0] === undefined){
				return Promise.reject({
					data: {message: "No user found!"},
					statusCode: 204,
					error: true
				});
			} else {
				let response = await UserService.deleteById(user[0].dataValues.id);
				return Promise.resolve({
					data: response,
					statusCode: 200,
					error: false
				});
			}
		} catch (err) {
			return Promise.reject({
				data: {error: err},
				statusCode: 500,
				error: true
			});
			// return res.status(500).send(err);
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