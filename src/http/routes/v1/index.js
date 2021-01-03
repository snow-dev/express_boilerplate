
/* Node libraries import section */
import Router from 'express/lib/router'

// import routes endpoints
import beacon from './beacon';
import users from './users';

const router = Router();

// Apply routes to endpoints
router.use('/beacon', beacon);
router.use('/users', users);

export default router;