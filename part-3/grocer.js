const modal = document.querySelector('.modal')
const cartButton = document.querySelector('#cart-button')
const x = document.querySelector('.close')
const addToCartButtons = document.querySelectorAll('.item button')
const cartContents = document.querySelector('.cart-contents')
const cartAmount = document.querySelector('#cart-item-count')
let cartCounter = 0

cartButton.addEventListener('click', function() {
  modal.style.display = 'block'
})

x.addEventListener('click', function() {
  modal.style.display = 'none'
})

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const newListItem = document.createElement('li')
    newListItem.className = 'item flex flex-row-between'

    const item = event.target.previousElementSibling.previousElementSibling.innerText
    const itemSpan = document.createElement('span')
    itemSpan.innerText = item
    itemSpan.className = 'item-name'
    newListItem.appendChild(itemSpan)

    const price = event.target.previousElementSibling.innerText
    const priceSpan = document.createElement('span')
    priceSpan.innerText = price
    priceSpan.className = 'item-price'
    newListItem.appendChild(priceSpan)

    cartContents.appendChild(newListItem)

    cartCounter++
    cartAmount.innerText = `(${cartCounter})`
  })
})
