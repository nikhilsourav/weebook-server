import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  title: String,
  content: String,
  likeCount: {
    type: Number,
    default: 0,
  },
});

const PostModel = mongoose.model('PostModel', PostSchema);
