import UserService from '../../services/usersService';
import {registerDataSchema, authDataSchema} from '../schemas/authSchema';
import * as http from 'http';

export default class UserController {
	
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
			
		} catch (err) {
			console.log("AuthController -> Login error: ", err);
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
	
	static async delete (req, res) {
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