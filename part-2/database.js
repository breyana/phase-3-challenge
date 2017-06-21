const pgp = require('pg-promise')()
const db = pgp('postgres://breyana@localhost:5432/grocery_store')

const allItems = () => {
  return db.any('SELECT * FROM grocery_items')
    .then(data => {
      console.log('DATA:', data);
    })
    .catch(error => {
      console.log('ERROR:', error);
    })
}

const itemsInSection = (section) => {
  return db.any('SELECT * FROM grocery_items WHERE section = $1', [section])
    .then(data => {
      console.log('DATA:', data);
    })
    .catch(error => {
      console.log('ERROR:', error);
    })
}

module.exports = {
  allItems,
  itemsInSection
}
