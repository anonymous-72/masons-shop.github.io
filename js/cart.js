const counterInputs = document.querySelectorAll('.clothes__counter-input')
const clothesCosts = document.querySelectorAll('.clothes__cost')

async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()

    const usdRate = data.Valute.USD.Value.toFixed(2)
    const uahRate = data.Valute.UAH.Value.toFixed(2)

    return {
        usdRate: parseFloat(usdRate),
        uahRate: parseFloat(uahRate)
    }
}

async function updateClothesCosts(cardIndex) {
    const currencies = await getCurrencies()
    const counterInput = document.querySelector(`#clothes__counter-input${cardIndex}`)
    const cost = parseFloat(clothesCosts[cardIndex - 1].dataset.cost)
    const value = parseInt(counterInput.value)
    let newCost

    if (location.href.includes('#en')) {
        newCost = (cost / currencies.usdRate) * value 
        clothesCosts[cardIndex - 1].textContent = `$${newCost.toFixed(2)}`
    } else if (location.href.includes('#ua')) {
        newCost = (cost / currencies.uahRate) * value
        clothesCosts[cardIndex - 1].textContent = `${newCost.toFixed(2)}₴`
    } else {
        newCost = cost * value 
        clothesCosts[cardIndex - 1].textContent = `${newCost.toFixed(2)}₽`
    }
}

function stepper(btn) {
    const cardIndex = parseInt(btn.getAttribute('data-card-index'))
    const counterInput = document.querySelector(`#clothes__counter-input${cardIndex}`)
    const min = parseInt(counterInput.min)
    const max = parseInt(counterInput.max)
    const step = parseInt(counterInput.step)
    const value = parseInt(counterInput.value)
    const calcStep = btn.classList.contains('increment') ? step : -step
    const newValue = calcStep + value

    if (newValue >= min && newValue <= max) {
        counterInput.value = newValue
        updateClothesCosts(cardIndex)
    }
}

function initiliazeCard(cardIndex) {
    updateClothesCosts(cardIndex)

    const incrementBtn = document.querySelector(`.clothes__counter-button.increment[data-card-index="${cardIndex}"]`)
    const decrementBtn = document.querySelector(`.clothes__counter-button.decrement[data-card-index="${cardIndex}"]`)

    incrementBtn.addEventListener('click', () => {
        stepper(incrementBtn)
    })

    decrementBtn.addEventListener('click', () => {
        stepper(decrementBtn)
    })
}

counterInputs.forEach((counterInput, index) => {
    const cardIndex = index + 1
    initiliazeCard(cardIndex)
})

async function updateCosts() {
    const currencies = await getCurrencies()
    const usdCost = parseFloat(currencies.usdRate)
    const uahCost = parseFloat(currencies.uahRate)
    const orderCosts = document.querySelectorAll('.cart__card-cost')
    orderCosts.forEach((cost) => {
        const orderCostValue = parseFloat(cost.textContent)
        const usdCostValue = (location.href.includes('#en')) ? (orderCostValue / usdCost).toFixed(2) : orderCostValue.toFixed(2)
        const uahCostValue = (location.href.includes('#ua')) ? (orderCostValue / uahCost).toFixed(2) : orderCostValue.toFixed(2)

        if (location.href.includes('#en')) {
            cost.textContent = `$${usdCostValue}`
        } else if (location.href.includes('#ua')) {
            cost.textContent = `${uahCostValue}₴`
        }
    })
}

updateCosts()


const orderInputOne = document.querySelector('.order__input-1')
const orderInputTwo = document.querySelector('.order__input-2')
const orderInputThree = document.querySelector('.order__input-3')
const orderInputFour = document.querySelector('.order__input-4')
const orderInputFive = document.querySelector('.order__input-5')

if (location.href.includes('#ua')) {
    orderInputOne.placeholder = `Ваше iм'я`
    orderInputFour.placeholder = 'Мiсто'
    orderInputFive.placeholder = 'Відділення'
} else if (location.href.includes('#en')) {
    orderInputOne.placeholder = 'Your Name'
    orderInputThree.placeholder = 'Phone number'
    orderInputFour.placeholder = 'City'
    orderInputFive.placeholder = 'Post Office'
}

const orderCheckboxes = document.querySelectorAll('.order__checkbox')
const orderLabels = document.querySelectorAll('.order__label')
orderCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        const fontWeight = checkbox.checked ? 600 : 400
        orderLabels[index].style.fontWeight = fontWeight
    })
})

const cartCardBtn = document.querySelectorAll('.cart__card-btn')
const cartCards = document.querySelectorAll('.cart__card')
const cartCardMessage = document.querySelector('.cart__card-message')
cartCardBtn.forEach((cardBtn, index) => {
    cardBtn.addEventListener('click', () => {
        cartCards[index].classList.add('none')
        if (cartCards.length === document.querySelectorAll('.none').length - 1) {
            cartCardMessage.classList.remove('none')
        }
    })
})