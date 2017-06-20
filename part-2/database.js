const pgp = require('pg-promise')()
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'grocery_store',
}
const db = pgp(connection)

const allItems = () => {
  return db.any('SELECT * FROM grocery_items')
}
