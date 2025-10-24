const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ msg: "Hello" })
})

app.listen(3000, () => {
  console.log("Server Started");
})