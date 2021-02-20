import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  name: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  title: String,
  content: String,
  likes: {
    type: [String],
    default: [],
  },
});

const PostModel = mongoose.model('PostModel', PostSchema);

export default PostModel;
