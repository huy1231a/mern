const express = require('express')
const app = express()

const port = 5000
const mongoose = require('mongoose')

const createUser = require('./Routes/CreateUser')

app.get('/', (req, res) => {
  res.send('hello word')
})

app.use(express.json())

app.use('/api', createUser)

mongoose
  .connect(
    'mongodb+srv://nqhuydev:Huybeo1ga@nqhuydev.e0kr1f9.mongodb.net/food',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err))

app.listen(port, () => {
  console.log(`Connect Success Port ${port}`)
})
