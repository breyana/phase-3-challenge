const pgp = require('pg-promise')()

const db = pgp({
  database: 'grocery_store'
})

const allItems = () => {
  return db.any('SELECT * FROM grocery_items')
}

const itemsInSection = (section) => {
  return db.any('SELECT * FROM grocery_items WHERE section = $1', [section])
}

module.exports = {
  allItems,
  itemsInSection
}
