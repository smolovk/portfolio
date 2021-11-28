require('dotenv').config()
const express = require('express')
const app = express()

const path = require('path')


app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(process.env.PORT, () => {
  console.log(`Working on ${process.env.PORT}`);
})
