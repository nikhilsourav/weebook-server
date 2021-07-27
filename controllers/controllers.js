/*
 *
 ======= import dependencies =======
 *
*/
import mongoose from 'mongoose';
import PostModel from '../models/postModel.js';

/*
 *
 ======= fetch all posts =======
 *
*/
export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostModel.find().sort([['_id', -1]]);
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/*
 *
 ======= create new post =======
 *
*/
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel({ ...post, creator: req.userId });
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/*
 *
 ======= update post by id =======
 *
*/
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

  const updatedPost = await PostModel.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
  res.json(updatedPost);
};

/*
 *
 ======= find by id and delete post =======
 *
*/
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  await PostModel.findByIdAndRemove(id);

  res.json({ message: `Post deleted successfully!` });
};

/*
 *
 ======= like post =======
 *
*/
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ msg: 'User not authenticated' });

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

  const post = await PostModel.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) post.likes.push(req.userId);
  else post.likes = post.likes.filter((id) => id !== String(req.userId));

  const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
};
