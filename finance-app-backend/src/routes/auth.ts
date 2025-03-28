// auth.ts
import express, { RequestHandler } from 'express';
import { signup, login, getMe } from '../controllers/authController';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/signup', signup as RequestHandler);
router.post('/login', login as RequestHandler);
router.get('/me', auth as RequestHandler, getMe as RequestHandler);

export default router;