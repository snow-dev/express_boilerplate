import express from 'express';
// import rfs from 'rotating-file-stream';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import expressBoom from 'express-boom-v2';
import rateLimit from 'express-rate-limit';

/* Import routes */
import routes from '../http/routes/v1/index';
import authRoutes from '../http/routes/authRoutes';

export default (app) => {
	
	if (process.env.DEBUG) {
		// const logDirectory = path.join(process.env.SRC_PATH, 'logs')
		app.use(logger('dev'))
		// const accessLogStream = rfs.createStream('access.log', {
		// 	interval: '1d', // rotate daily
		// 	path: logDirectory
		// });
		// app.use(logger('combined', {
		// 	stream: accessLogStream
		// }))
	}
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(cors({ origin: '*' }));
	app.use(expressBoom());
	
	if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'semiproduction') {
		// SAY SOMETHING NICE TO THE HACKER
		const rateLimitMsg = '( ͡° ͜ʖ ͡°) Something fishy\'s going on pal. '
		// RATE LIMIT API V1 WITH 180 REQUESTS MAX EVERY 15 MINUTES
		const apiLimiter = rateLimit({
			windowsMs: 15 * 60 * 1000, // 15 minutes
			max: 180, // 180 REQUESTS
			message: rateLimitMsg
		})

		// RATE LIMIT API AUTHORIZATION WITH 15 REQUESTS MAX EVERY 15 MINUTES
		const authLimiter = rateLimit({
			windowMs: 15 * 60 * 1000, // 1 hour
			max: 15, // 15 REQUESTS
			message: rateLimitMsg
		})
		// APPLY RATE LIMITER
		app.use('/api/v1', apiLimiter)
		app.use('/api/auth', authLimiter);
	}
	
	// APPLY ROUTING
	app.use('/api/v1', routes);
	app.use('/api/auth', authRoutes);
	
	return app;
};