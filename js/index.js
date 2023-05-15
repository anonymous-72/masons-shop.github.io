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

const headerSearchPlaceholder = document.querySelector('.header__search')
const contactInputOne = document.querySelector('.contact__input-1')
const contactInputTwo = document.querySelector('.contact__input-2')
const contactInputThree = document.querySelector('.contact__input-3')
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
const loginCard = document.querySelector('.login__section')
const signupCard = document.querySelector('.signup__section')
const resetCard = document.querySelector('.reset__section')
const signupLink = document.querySelector('.login__card-link')
const loginLink = document.querySelector('.signup__card-link')
const loginReturnLink = document.querySelector('.reset__card-link')
const resetLink = document.querySelector('.login__card-reset')
const resetChange = document.querySelector('.reset__card-change')
const loginBtn = document.querySelector('.login__form-btn')
const signupBtn = document.querySelector('.signup__form-btn')
const resetBtn = document.querySelector('.reset__form-btn') 
const modalWin = document.querySelector('.modal')

const signupInputs = [contactInputOne, loginInputTwo, loginInputThree,
                      loginInputFour, loginInputFive, loginInputSix, loginInputSeven]

// -- Смена языка на странице --

const language = document.querySelector('.header__languages')
const allLang = ['ru', 'ua', 'en']

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
        contactInputFour.placeholder = 'Примiтка'
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
        contactInputThree.placeholder = 'Phone number'
        contactInputFour.placeholder = 'Note'
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


















