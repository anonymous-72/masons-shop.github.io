const counterInputs = document.querySelectorAll('#clothes__counter-input')
const costElements = document.querySelectorAll('.clothes__cost')

let cost = parseFloat(costElements[0].textContent)

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function(data) {
        return data.json()
    }).then(function(data) {
        console.log(data)
    }) 

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

async function updateClothesCost() {
    const currencies = await getCurrencies()
    counterInputs.forEach((counterInput, index) => {
        const value = counterInput.getAttribute('value')
        let newCost
        if (location.href.includes('#en')) {
            newCost = (cost / currencies.usdRate) * value
            costElements[index].textContent = `$${newCost.toFixed(2)}`
        } else if (location.href.includes('#ua')) {
            newCost = (cost / currencies.uahRate) * value
            costElements[index].textContent = `${newCost.toFixed(2)}₴`
        } else {
            newCost = cost * value
            costElements[index].textContent = `${newCost.toFixed(2)}₽`
        }
    })
}

updateClothesCost()

function stepper(btn) {
    counterInputs.forEach((counterInput) => {
        let id = btn.getAttribute('id')
        let min = counterInput.getAttribute('min')
        let max = counterInput.getAttribute('max')
        let step = counterInput.getAttribute('step')
        let value = counterInput.getAttribute('value')
        let calcStep = (id == "increment") ? (step * 1) : (step * -1)
        let newValue = parseInt(value) + calcStep

        if (newValue >= min && newValue <= max) {
            counterInput.setAttribute('value', newValue)
            updateClothesCost()
        }
    })
}











