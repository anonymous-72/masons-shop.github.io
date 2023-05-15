const whiteShirtLinks = document.querySelectorAll('.hits__whiteshirt-link')
const yellowHoodieLinks = document.querySelectorAll('.hits__yellowhoodie-link')
const whiteShirtCard = document.querySelector('.white-shirt__row')
const yellowHoodieCard = document.querySelector('.yellow-hoodie__row')
const selectedCard = localStorage.getItem('selectedCard')

whiteShirtLinks.forEach((whiteShirtLink) => {
    whiteShirtLink.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('selectedCard', 'whiteShirtCard')
        window.location.href = '/masons-shop.github.io/clothes.html'
    })
})

yellowHoodieLinks.forEach((yellowHoodieLink) => {
    yellowHoodieLink.addEventListener('click', (e) => {
        e.preventDefault()
        localStorage.setItem('selectedCard', 'yellowHoodieCard')
        window.location.href = '/masons-shop.github.io/clothes.html'
    })
})

if (selectedCard === 'whiteShirtCard') {
    whiteShirtCard.classList.remove('none')
    yellowHoodieCard.classList.add('none')
} else if (selectedCard === 'yellowShirtCard') {
    yellowHoodieCard.classList.remove('none')
    whiteShirtCard.classList.add('none')
}

const heartIcons = document.querySelectorAll('.fa-heart')

heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener('click', () => {
        if (!heartIcon.classList.contains('active')) {
            heartIcon.classList.toggle('active')
        } else {
            heartIcon.classList.remove('active')
        }
    })
})
