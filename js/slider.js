// -- Слайдер --

const slider = document.querySelector('.feedback__slider-imgs')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('.feedback__slider-btn-next')
const btnPrev = document.querySelector('.feedback__slider-btn-prev')

sliderItems.forEach((slide, index) => {
    console.log(slide)

    // Скрываем все слайды, кроме первого
    if (index !== 0) {
        slide.classList.add('none')
    } 

    // Добавляем индексы
    slide.dataset.index = index

    // Добавляем data атрибут active для активного слайда
    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайдам
    slide.addEventListener('click', () => {
        // Скрываем текущий слайд
        slide.classList.add('none')
        slide.removeAttribute('data-active')

        // Расчитываем индекс следующего слайда
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1

        // Находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)

        // Отображаем следующий слайд
        nextSlide.classList.remove('none')
        nextSlide.setAttribute('data-active', '')
    })
})

btnNext.onclick = () => {
    console.log('Next')

    // Скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('none')
    currentSlide.removeAttribute('data-active')

    // Показываем следующий слайд
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)

    nextSlide.classList.remove('none')
    nextSlide.setAttribute('data-active', '')
}

btnPrev.onclick = () => {
    console.log('Prev')

    const currentSlide = document.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('none')
    currentSlide.removeAttribute('data-active')

    const prevSlideIndex = currentSlideIndex === 0 ? sliderItems.length -1 : currentSlideIndex - 1
    const prevSlide = document.querySelector(`[data-index="${prevSlideIndex}"]`)

    prevSlide.classList.remove('none')
    prevSlide.setAttribute('data-active', '')
}