const express = require('express')
const app = express()
const port = 3000

app.get('/conv', function(req, res) {
    console.log(req.headers["authorization"])
  res.send('Hello World!')
})

app.listen(port)