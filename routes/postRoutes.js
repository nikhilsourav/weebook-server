import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts, createPost, updatePost } from './controllers.js';

// All routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
