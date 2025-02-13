import express from 'express';
const router = express.Router();
import {register,login,searchUsers} from '../app/controllers/userController.js';
import {registerValidation,loginValidation} from '../app/middleware/validation.js';
import auth from '../app/middleware/auth.js';


router.post('/register',registerValidation,register);
router.post('/login',loginValidation,login);
router.get('/search', auth, searchUsers);

export default router;