import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts, createPost, updatePost, deletePost, likePost } from './controllers.js';

// middleware
import auth from '../middleware/auth.js';

// All routes
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
