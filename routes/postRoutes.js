import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts, createPost, updatePost, deletePost, likePost } from './controllers.js';

// All routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
