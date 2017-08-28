const modal = document.querySelector('.modal')
const cartButton = document.querySelector('#cart-button')
const x = document.querySelector('.close')

cartButton.onclick = function() {
  modal.style.display = 'block'
}

x.onclick = function() {
  modal.style.display = 'none'
}
