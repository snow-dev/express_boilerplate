import express from 'express';
import schemeValidators from '../middlewares/schemeValidators';
import responseHandler from '../middlewares/responseHandler';
import UserController from '../controllers/userController';

const router = express.Router();

router.post('/login', schemeValidators, responseHandler(UserController.login));
router.post('/register', responseHandler(UserController.register));


export default router;