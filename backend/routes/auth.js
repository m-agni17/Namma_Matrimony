const express = require('express');
const UserAccount = require('../models/UserAccount');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { user_id, password, email_id, gender, Date_of_Birth, First_Name, Last_Name } = req.body;
  try {
    const user = new UserAccount({ user_id, password, email_id, gender, Date_of_Birth, First_Name, Last_Name });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email_id, password } = req.body;
  try {
    const user = await UserAccount.findOne({ email_id });
    if (!user) return res.status(400).send('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
