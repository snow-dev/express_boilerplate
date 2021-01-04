
/* Node libraries import section */
import Router from 'express/lib/router'

// import routes endpoints
import beacon from './beacon';

const router = Router();

// Apply routes to endpoints
router.use('/beacon', beacon);

export default router;