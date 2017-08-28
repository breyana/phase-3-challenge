const express = require('express')
const app = express()

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
    response.status(200).send(`${daysOfWeek[day]}`)
  } else {
    response.status(404).send(`'${day}' is not a valid day!`)
  }
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
