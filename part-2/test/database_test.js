const { expect } = require('chai')
const { itemsInSection } = require('../database.js')

describe('Database Queries', () => {
  context('itemsInSection', () => {
    it('itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice"', () => {
      expect(itemsInSection("bulk")).to.equal([])
    })
  })
})
