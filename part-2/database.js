const pgp = require('pg-promise')()

const db = pgp({
  database: 'grocery_store'
})

const itemsInSection = (section) => {
  return db.any('SELECT * FROM grocery_items WHERE section = $1', [section])
}

const orderTotalsPerShopper = (shopperId) => {
  return db.any('SELECT ordered_items.order_id, SUM(grocery_items.price) AS "total cost" FROM orders JOIN ordered_items ON ordered_items.order_id = orders.id JOIN grocery_items ON grocery_items.id = ordered_items.grocery_id WHERE orders.shopper_id = $1 GROUP BY ordered_items.order_id',
    [shopperId])
}

module.exports = {
  itemsInSection,
  orderTotalsPerShopper
}
