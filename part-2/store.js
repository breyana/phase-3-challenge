#! /usr/local/bin/node
const productListBySection = require('./commands/product-list')

const command = process.argv[2]
const argument = process.argv[3]

switch(command) {
  case 'product-list':
    productListBySection(argument)
    break;

  case 'shopper-orders':
    console.log('this is the shopper-orders command')
    break;

  case 'real-shoppers':
    console.log('This is the real-shoppers command')
    break;

  default:
    console.log('Invalid command, use \'product-list\', \'shopper-orders\', or \'real-shoppers\'')
}
