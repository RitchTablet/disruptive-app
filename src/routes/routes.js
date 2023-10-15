import express from 'express';
const router = express.Router();

import { getAllUsers, createUser } from '../controllers/userController.js';

router.get('/users', getAllUsers);
router.post('/users', createUser);

export default router;