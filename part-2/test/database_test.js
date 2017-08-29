const { expect } = require('chai')
const { itemsInSection, orderTotalsPerShopper } = require('../database.js')

describe('Database Queries', () => {
  context('itemsInSection', () => {
    it('itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice"', () => {
      return itemsInSection('bulk')
        .then(data => {
          expect(data).to.eql([{
            "id": 16,
            "name": "Flour",
            "price": "8.74",
            "section": "bulk"
          },
          {
            "id": 33,
            "name": "Pasta",
            "price": "13.39",
            "section": "bulk"
          },
          {
            "id": 36,
            "name": "Rice",
            "price": "5.23",
            "section": "bulk"
          }])
        })
    })
  })

  context('orderTotalsPerShopper', () => {
    it('orderTotalsPerShopper(3) to return three orders and their totals', () => {
      return orderTotalsPerShopper(3)
        .then(data => {
          expect(data).to.eql([{
            "order_id": 1,
            "total cost": "28.31"
          },
          {
            "order_id": 2,
            "total cost": "32.06"
          },
          {
            "order_id": 6,
            "total cost": "6.36"
          }])
        })
    })
  })
})
