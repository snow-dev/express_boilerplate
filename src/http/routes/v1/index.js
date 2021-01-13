
/* Node libraries import section */
import Router from 'express/lib/router'

// import routes endpoints
import pong from './pong';
import {loggerMiddleware} from '../../middlewares/loggerMiddleware';

const router = Router();

// Apply routes to endpoints
router.use('/pong', loggerMiddleware, pong);

export default router;