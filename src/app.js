import express from 'express'
import * as fs from 'fs';
import path from 'path';
import morgan from 'morgan';

/* Import routes */
import router from './http/routes/v1/index';

// Instantiate App
const app = express();

// create logger "middleware"
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('dev', {
	stream: accessLogStream,
	
}));

app.use(express.json());

// We set routes on http/routes/v1/index.js as our main router.
app.use('/api/v1', router);

module.exports = app;
