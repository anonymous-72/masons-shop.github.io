const sectionsListRu = [
	"Наши услуги",
	"Пример печати",
	"Акции и предложения",
	"Топ продаж",
	"Каталог",
	"Отзывы",
	"Ещё есть сомнения?",
	"Свяжитесь с нами",
	"Расписание"
]

const sectionsListUa = [
	"Нашi послуги",
	"Приклад печатки",
	"Акції та пропозиції",
	"Топ продажів",
	"Каталог",
	"Відкликання",
	"Ще є сумніви?",
	"Зв'яжіться з нами",
	"Розклад"
]

const sectionsListEn = [
	"Our services",
	"Example of printing",
	"Promotions and offers",
	"Top sales",
	"Catalogue",
	"Feedback",
	"Still have doubts?",
	"Contact us",
	"Schedule"
]

if (location.href.includes('#ru')) {
	const autoCompleteJS = new autoComplete({
		selector: '#list',
		placeHolder: 'Поиск',
		data: {
			src: sectionsListRu,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value
					autoCompleteJS.input.value = selection
				},
			},
		},
		resultList: {
			maxResults: 15,
		},
		searchEngine: 'strict'
	})
} else if (location.href.includes('#ua')) {
	const autoCompleteJS = new autoComplete({
		selector: '#list',
		placeHolder: 'Поиск',
		data: {
			src: sectionsListUa,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value
					autoCompleteJS.input.value = selection
				},
			},
		},
		resultList: {
			maxResults: 15,
		},
		searchEngine: 'strict'
	})
} else {
	const autoCompleteJS = new autoComplete({
		selector: '#list',
		placeHolder: 'Поиск',
		data: {
			src: sectionsListEn,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value
					autoCompleteJS.input.value = selection
				},
			},
		},
		resultList: {
			maxResults: 15,
		},
		searchEngine: 'strict'
	})
}