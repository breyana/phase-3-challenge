const { expect } = require('chai')
const { itemsInSection, allItems } = require('../database.js')

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
})
