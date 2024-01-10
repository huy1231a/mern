const express = require('express')

const router = express.Router()

const User = require('../model/User')

router.post('/creatuser', async (req, res) => {
  const { username, email, phone, password } = req.body

  console.log('username', username)

  // Basic validation
  if (!username || !email || !phone || !password) {
    return res
      .status(400)
      .json({ error: 'Please provide all required information.' })
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email })
    console.log('existingUser', existingUser)
    const existingUsername = await User.findOne({ username })
    const existingPhone = await User.findOne({ phone })
    if (existingUser || existingPhone || existingUsername) {
      return res.status(409).json({
        error: 'User already exists with this email or phone or email.',
      })
    }

    // Create a new user
    const newUser = new User({ username, email, phone, password })
    await newUser.save()

    // In a real-world application, you would hash the password before saving it
    // For simplicity, we are saving the plain text password here.

    return res
      .status(201)
      .json({ message: 'User registered successfully.', user: newUser })
      .json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error.' })
  }
})

module.exports = router
