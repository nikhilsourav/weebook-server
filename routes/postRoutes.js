import express from 'express';
const router = express.Router();

// import from controllers
import { getPosts } from './controllers.js';

// All routes
router.get('/', getPosts);

export default router;
