const express = require('express')

const router = express.Router()

const User = require('../model/User')

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials.' })
    }

    const pass = await User.findOne({ password })

    if (!pass) {
      return res.status(401).json({ error: 'Invalid credentials.' })
    }

    return res.status(200).json({ message: 'Login successful.' })

    // const existingUsername = await User.findOne({ username })
    // const existingPassword = await User.findOne({ password })

    // if (!(existingUsername || existingPassword)) {
    //   return res.json('Login fail')
    // } else {
    //   return res.status(200).json({ succes: true })
    // }
  } catch (error) {
    res.json('In valid')
  }
})

module.exports = router
