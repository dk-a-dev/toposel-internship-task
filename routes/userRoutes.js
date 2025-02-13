import express from 'express';
const router = express.Router();
import {register,login} from '../app/controllers/userController.js';
import {registerValidation,loginValidation} from '../app/middleware/validation.js';

router.post('/register',registerValidation,register);
router.post('/login',loginValidation,login);

export default router;