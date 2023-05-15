// Поля регистрации

signupLink.addEventListener('click', () => {
    console.log('click')
    if (signupCard.classList.contains('none')) {
        signupCard.classList.remove('none')
        loginCard.classList.add('none')
    }
})

loginLink.addEventListener('click', () => {
    if (loginCard.classList.contains('none')) {
        loginCard.classList.remove('none')
        signupCard.classList.add('none')
    }
})

loginReturnLink.addEventListener('click', () => {
    if (loginCard.classList.contains('none')) {
        loginCard.classList.remove('none')
        resetCard.classList.add('none')
    }
})

resetLink.onclick = () => {
    if (resetCard.classList.contains('none')) {
        resetCard.classList.remove('none')
        loginCard.classList.add('none')
    }
}

resetChange.addEventListener('click', () => {
    if (resetInputOne.classList.contains('none')) {
        resetInputOne.classList.remove('none')
        resetEmailInput.classList.add('none')
    } else {
        resetEmailInput.classList.remove('none')
        resetInputOne.classList.add('none')
    }
})

loginBtn.addEventListener('click', () => {
    if (loginEmailInput.value.trim() !== '' && loginInputOne.value.trim() !== '') {
        window.location.href = '/index.html'
    } else {
        if (location.href.includes('#ru')) {
            alert('Введите все поля')
        } else if (location.href.includes('#ua')) {
            alert('Введіть усі поля')
        } else if (location.href.includes('#en')) {
            alert('Fill in all the fields')
        }
    }
})

if (location.href.includes('#ua')) {
    resetInputOne.placeholder = 'Введіть свій номер телефону'
    resetEmailInput.placeholder = 'Введіть ваш email'
    loginInputSeven.placeholder = 'Номер телефону'
    loginInputSix.placeholder = 'Повторіть пароль'
    loginInputFive.placeholder = 'Придумайте пароль'
    loginInputFour.placeholder = 'Придумайте нікнейм'
    loginInputThree.placeholder = 'Дата народження'
    loginInputTwo.placeholder = 'Ваше прізвище'
} else if (location.href.includes('#en')) {
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