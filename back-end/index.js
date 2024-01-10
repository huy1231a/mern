const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
const mongoose = require('mongoose')

const createUser = require('./Routes/CreateUser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (req, res) => {
  res.send('hello word')
})

// app.use(express.json())

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
