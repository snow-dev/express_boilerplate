import express from 'express';
import responseHandler from '../middlewares/responseHandler';
import UserController from '../controllers/userController';
import protectedRoutes from '../middlewares/authorizationMiddleware';

const router = express.Router();

router.post('/login', responseHandler(UserController.login));
router.post('/register', responseHandler(UserController.register));
router.post('/delete', responseHandler(UserController.delete));
router.get('/getAll',  responseHandler(UserController.getAll));
router.get('/protected', protectedRoutes, responseHandler(UserController.protected));


export default router;