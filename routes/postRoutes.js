import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts, createPost, updatePost, deletePost } from './controllers.js';

// All routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
