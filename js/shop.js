// -- Анимация для поиска в header --

const headerSearch = document.querySelector('.header__search')

headerSearch.addEventListener('focus', () => {
    headerSearch.classList.add('header__search--active')
})

headerSearch.addEventListener('blur', () => {
    headerSearch.classList.remove('header__search--active')
})

// Мобильная навигация

const nav = document.querySelector('#nav')
const headerBtn = document.querySelector('#header__btn')
const headerBtnIcon = document.querySelector('#header__button-icon')

headerBtn.onclick = () => {
    console.log('clicked')
    if (nav.classList.toggle('open')) {
        headerBtnIcon.innerHTML = '&#xf00d;'
        headerBtnIcon.style.position = 'static'
        document.body.style.overflow = 'hidden'
    } else {
        headerBtnIcon.innerHTML = '&#xf0c9;'
        headerBtnIcon.style.position = 'static'
        document.body.style.overflow = 'auto'
    }
}

async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    const response = await fetch(url)
    const data = await response.json()

    const usdRate = data.Valute.USD.Value.toFixed(2)
    const uahRate = data.Valute.UAH.Value.toFixed(2)

    const usdCost = parseFloat(usdRate)
    const uahCost = parseFloat(uahRate)

    const tshirtsCosts = document.querySelectorAll('.tshirts__card-cost')
    tshirtsCosts.forEach((cost) => {
        const costValue = parseFloat(cost.textContent)
        const usdCostValue = (location.href.includes('#en')) ? (costValue / usdCost).toFixed(2) : costValue.toFixed(2)
        const uahCostValue = (location.href.includes('#ua')) ? (costValue / uahCost).toFixed(2) : costValue.toFixed(2)

        if (location.href.includes('#en')) {
            cost.textContent = `$${usdCostValue}`
        } else if (location.href.includes('#ua')) {
            cost.textContent = `${uahCostValue}₴`
        }
    })
}

getCurrencies()

// Каталог 

const sortSelect = document.querySelector('.tshirts__sort-select')
sortSelect.addEventListener('change', sortCards)

function sortCards() {
    const tshirtCards = document.querySelectorAll('.tshirts__card')
    if (sortSelect.value === '1') {
        sortAscending(tshirtCards)
    } else if (sortSelect.value === '2') {
        sortDescending(tshirtCards)
    }
}

function sortAscending(cards) {
    const sortedCards = Array.from(cards).sort((a, b) =>
      a.querySelector('.tshirts__card-cost').textContent.localeCompare(b.querySelector('.tshirts__card-cost').textContent)
    )

    cards.forEach((card) => {
      card.style.order = sortedCards.indexOf(card);
    })
}
  
function sortDescending(cards) {
    const sortedCards = Array.from(cards).sort((a, b) =>
      b.querySelector('.tshirts__card-cost').textContent.localeCompare(a.querySelector('.tshirts__card-cost').textContent)
    )

    cards.forEach((card) => {
      card.style.order = sortedCards.indexOf(card);
    })
}

const amountSelect = document.querySelector('.tshirts__amount-select')
const tshirtsCards = document.querySelectorAll('.tshirts__cards')

amountSelect.addEventListener('change', (e) => {
    const selectedCardsAmount = parseInt(e.target.value)

    tshirtsCards.forEach((tshirtsCard) => {
        const cards = tshirtsCard.querySelectorAll('.tshirts__card')
        
        cards.forEach(function (card) {
            card.style.display = 'none'
        })
    
        for (let i = 0; i < selectedCardsAmount; i++) {
            cards[i].style.display = 'block'
        }
    
    })
})

// Страницы
const tshirtsPageLinks = document.querySelectorAll('.tshirts__page-link')

tshirtsPageLinks.forEach((tshirtsPageLink, index) => {
    tshirtsPageLink.addEventListener('click', () => {
        const activeLink = document.querySelector('.tshirts__page-link.active')
        activeLink.classList.remove('active')
        tshirtsPageLink.classList.add('active')

        tshirtsCards.forEach((tshirtsCard) => {
            tshirtsCard.classList.add('none')
        })

        tshirtsCards[index].classList.remove('none')
    })
})
  

// -- Смена языка на странице --

const language = document.querySelector('.header__languages')
const allLang = ['ru', 'ua', 'en']

const headerSearchPlaceholder = document.querySelector('.header__search')
const contactInputOne = document.querySelector('.contact__input-1')
const contactInputTwo = document.querySelector('.contact__input-2')
const contactInputFour = document.querySelector('.contact__input-4')
const loginInputTwo = document.querySelector('.login__input-2')
const loginInputThree = document.querySelector('.login__input-3')
const loginInputFour = document.querySelector('.login__input-4')
const loginInputFive = document.querySelector('.login__input-5')
const loginInputSix = document.querySelector('.login__input-6')
const loginInputSeven = document.querySelector('.login__input-7')
const loginEmailInput = document.querySelector('.login__input-email')
const loginInputOne = document.querySelector('.login__input-1')
const resetEmailInput = document.querySelector('.reset__input-email')
const resetInputOne = document.querySelector('.reset__input-1')

language.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
    let lang = language.value
    location.href = `${window.location.pathname}${'#'}${lang}`
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    console.log(hash)

    if (!allLang.includes(hash)) {
        location.href = `${window.location.pathname}${'#ru'}`
        location.reload()
    }
    language.value = hash

    for (let key in langArr) {
        let el = document.querySelector('.lng-' + key)
        if (el) {
            el.innerHTML = langArr[key][hash]
        }
    }

    if (location.href.includes('#ua')) {
        headerSearchPlaceholder.placeholder = 'Пошук'
        contactInputOne.placeholder = `Ваше iм'я`
        resetInputOne.placeholder = 'Введіть свій номер телефону'
        resetEmailInput.placeholder = 'Введіть ваш email'
        loginInputSeven.placeholder = 'Номер телефону'
        loginInputSix.placeholder = 'Повторіть пароль'
        loginInputFive.placeholder = 'Придумайте пароль'
        loginInputFour.placeholder = 'Придумайте нікнейм'
        loginInputThree.placeholder = 'Дата народження'
        loginInputTwo.placeholder = 'Ваше прізвище'
    } else if (location.href.includes('#en')) {
        headerSearchPlaceholder.placeholder = 'Search'
        contactInputOne.placeholder = `Name`
        resetInputOne.placeholder = 'Enter your telephone number'
        resetEmailInput.placeholder = 'Enter your email'
        loginInputSeven.placeholder = 'Phone number'
        loginInputSix.placeholder = 'Repeat your password'
        loginInputFive.placeholder = 'Create a password'
        loginInputFour.placeholder = 'Create a nickname'
        loginInputThree.placeholder = 'Date of birth'
        loginInputTwo.placeholder = 'Last name'
        loginInputOne.placeholder = 'Password'
    }
}

changeLanguage()






