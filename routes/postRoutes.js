import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts, createPost } from './controllers.js';

// All routes
router.get('/', getPosts);
router.post('/', createPost);

export default router;
