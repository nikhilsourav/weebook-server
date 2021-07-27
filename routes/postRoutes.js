/*
 *
 ======= import dependencies =======
 *
*/
import express from 'express';
const router = express.Router();

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/controllers.js';

import auth from '../middleware/auth.js';

/*
 *
 ======= all routes =======
 *
*/
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
