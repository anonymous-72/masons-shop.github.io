// Перевод валют

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
    const usdCost = parseFloat(usdRate)
    const uahCost = parseFloat(uahRate)

    const hitsCosts = document.querySelectorAll('.hits__cost')
    hitsCosts.forEach((cost) => {
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

