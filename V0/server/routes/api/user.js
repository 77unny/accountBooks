import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user';
import config from '../../config';

const { JWT_SECRET } = config;
const router = express.Router();

// @routes GET api/user
// @desc get all user
// @access public

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No user');
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: '모든 필드를 입력 하세요.' });
  }

  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: '이미 가입된 유저가 존재합니다.' });

    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            });
          });
        });
      });
    });
  });
});

export default router;
