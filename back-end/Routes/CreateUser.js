const express = require('express')
const router = express.Router()

const User = require('../model/User')

router.post('/creatuser', async (req, res) => {
  try {
    await User.create({
      email: req.body.email,
      phone: req.body.phone,
      username: req.body.username,
      password: req.body.password,
    })
    res.json({ success: true })
  } catch (error) {
    console.log(error)
    res.send(404).json('Name invalid')
  }
})

module.exports = router
