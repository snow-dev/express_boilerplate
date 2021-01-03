import express from 'express'
import * as fs from 'fs';

/* Import routes */
import router from './http/routes/v1/index';

// Instantiate App
const app = express();

app.use( express.logger( {
	format:  'dev',
	stream: fs.createWriteStream('app.log', {'flags': 'w'})
} ) )
app.use(express.json());

// We set routes on http/routes/v1/index.js as our main router.
app.use('/api/v1', router);

module.exports = app;
