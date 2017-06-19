const express = require('express')
const app = express()

app.get('/zero', (req, res) => res.send('0'))

app.get('/add', (req, res) => {
  const total = +req.query.a + +req.query.b
  res.send(total.toString())
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
