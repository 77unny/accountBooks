import mongoose from 'mongoose';
import moment from 'moment';

// schema
const PostSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
    index: true,
  },
  rangeDate: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  receipt: {
    type: String,
    required: true,
  },
  etc: {
    type: String,
  },
  data: {
    type: Date,
    default: moment().format('YYYY-MM-DD hh:mm:ss'),
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comments',
      },
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

const Post = mongoose.model('post', PostSchema);
export default Post;
