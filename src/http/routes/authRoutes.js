import express from 'express';
import responseHandler from '../middlewares/responseHandler';
import UserController from '../controllers/userController';

const router = express.Router();

router.post('/login', responseHandler(UserController.login));
router.post('/register', responseHandler(UserController.register));
router.get('/getAll',  responseHandler(UserController.getAll));


export default router;