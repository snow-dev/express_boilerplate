import env from 'env' // eslint-disable-line
require('dotenv').config(); // this is important!

module.exports = {
	"username": process.env.DB_USERNAME,
	"password": process.env.DB_PASSWORD,
	"database": process.env.DB_DATABASE,
	"configs": {
		"host": process.env.DB_HOST,
		"port": process.env.DB_PORT,
		"dialect": process.env.DB_DIALECT,
		"timezone": 'America/Mexico_City', // for writing to database
		"dialectOptions": {
			"useUTC": true, // for reading from database
		},
		"logging": false,
	},
	"key": "aSuperSecretEncryptionKey0912834"
};