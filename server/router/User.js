const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
router.post('/registration', async (req, res) => {
  try {
    const {
      fullName, email, phone, username, password, role,
      studentDetails, facultyDetails, managerDetails, staffDetails
    } = req.body;

    const newUser = new User({
      fullName,
      email,
      phone,
      username,
      password,
      role,
      studentDetails: role === 'student' ? studentDetails : undefined,
      facultyDetails: role === 'faculty' ? facultyDetails : undefined,
      managerDetails: role === 'manager' ? managerDetails : undefined,
      staffDetails: role === 'staff' ? staffDetails : undefined
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {   
    res.status(500).json({ error: 'Failed to register user' });
  }
});

router.post('/login',async(req,res)=>{
    const { email, password } = req.body;

  try {
    const user = await User.findOne({email});
    if (!user) {
        console.log('error');
      return res.status(400).json({ message: 'Invalid credentials' });
      
    }

    
    if (!password===user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    //   console.log('error');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET , { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
    res.cookie('user', user, { httpOnly: true, secure: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
    res.json({ token, user });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  } 
})

router.get('/:id',async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
})

module.exports = router;
