const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/days/:day', (request, response) => {
  const day = request.params.day
  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  if (daysOfWeek[day]) {
    response.set('Content-Type', 'text/plain')
    response.status(200).send(`${daysOfWeek[day]}`)
  } else {
    response.set('Content-Type', 'text/plain')
    response.status(404).send(`'${day}' is not a valid day!`)
  }
})

app.post('/api/array/concat', (request, response) => {
  const array1 = request.body.array1
  const array2 = request.body.array2
  if (Array.isArray(array1) && Array.isArray(array2)) {
    response.json({"result": array1.concat(array2)})
  } else {
    response.status(400).json({"error": "Input data should be of type Array."})
  }
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
