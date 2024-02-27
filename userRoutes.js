const express = require('express');
const router = express.Router();
const User = require('./userModel');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

router.post('/users/register', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).send(error);
  }
});

const jwt = require('jsonwebtoken');

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({ error: 'Login failed!' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Login failed!' });
    }

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '2 hours' });

    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;