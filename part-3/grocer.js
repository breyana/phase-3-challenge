const modal = document.querySelector('.modal')
const cartButton = document.querySelector('#cart-button')
const x = document.querySelector('.close')

cartButton.addEventListener('click', function() {
  modal.style.display = 'block'
})

x.addEventListener('click', function() {
  modal.style.display = 'none'
})
