import PostModel from '../models/postModel.js';

export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostModel.find().sort([['_id', -1]]); // returned data sorted by creation time (new first)
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);
  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
