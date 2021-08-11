import express from 'express';
import Post from '../../models/post';
import auth from '../../middleware/auth';

const router = express.Router();

router.get('/', async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, 'all post get');
  res.json(postFindResult);
});

router.post('/', auth, async (req, res) => {
  try {
    console.log(req);
    const { item, rangeDate, price, fee, receipt, etc, creator } = req.body;
    const newPost = await Post.create({
      item,
      rangeDate,
      price,
      fee,
      receipt,
      etc,
      creator,
    });
    console.log(newPost);
    res.json(newPost);
  } catch (e) {
    console.log(e);
  }
});

export default router;
