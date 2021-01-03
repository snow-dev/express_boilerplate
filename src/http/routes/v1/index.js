
/* Node libraies import section */
import express from 'express';

// import routes endpoints
import beacon from './beacon';
import users from './users';
import auth from './auth';

const router = express.Router();

// Apply routes to endpoints
router.use('/beacon', beacon);
router.use('/users', users);
router.use('/auth', auth);

export default router;