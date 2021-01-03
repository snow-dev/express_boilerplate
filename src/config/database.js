import env from 'env' // eslint-disable-line
export default {
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_LANG,
	logging: process.env.DB_DEBUG === 'true'
}