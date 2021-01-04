import express from 'express';
import schemeValidators from '../middlewares/schemeValidators';
import responseHandler from '../middlewares/responseHandler';
import AuthController from '../controllers/authController';

const router = express.Router();

router.post('/login', schemeValidators, responseHandler(AuthController.login));
router.post('/register', schemeValidators, responseHandler(AuthController.register));


export default router;