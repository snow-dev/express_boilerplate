
/* Node libraies import section */
import express from 'express';

// import routes endpoints
import beacon from './beacon';
import users from './users';

const router = express.Router();

// Apply routes to endpoints
router.use('/users', users);
router.use('/beacon', beacon);

export default router;