let news = [
	{
		title: 'Воображение покинуло меня',
		content: 'ывфвыфвыф',
		lang: 'ru',
		id: '1',
	},
	{
		title: 'Воображение кетти менден',
		content: 'таза контент',
		lang: 'kg',
		id: '2',
	},
	{
		title: 'Воображение',
		content: 'Вображение вображение',
		lang: 'ru',
		id: '3',
	},
];

exports.getNews = function (req, res) {
	console.log('Request Language: ', req.headers.lang);
	console.log('Request headers: ', req.headers);

	console.log('Query Params: ', req.query);

	let lang = req.headers.lang;

	if (!lang) {
		lang = 'ru';
	}

	const filteredNews = news.filter((oneNews) => oneNews.lang === lang);

	res.status(200).json(filteredNews);
};

exports.deleteNews = function (req, res) {
	console.log('ID Params: ', req.params);
	console.log('NewsId value: ', req.params.id);

	const id = req.params.id; // 3

	const existingNews = news.find(
		(oneNews) => oneNews.id === id,
	);

	if (!existingNews) {
		return res.status(400).json('Вы удаляете не существующую новость');
	}

	news = news.filter((oneNews) => oneNews.id !== id);

	res.status(201).json('Новость успешно удалена!');
};

exports.updateOneNews = function (req, res) {
	// title, lang, content

	const index = news.findIndex((oneNews) => oneNews.id === req.params.id);

	if (index == -1) {
		return res.status(404).json('Новость не найдена');
	}

	news[index] = {
		...news[index],
		...req.body
	};

	res.status(201).json(`обновил новость: ${req.params.id}`);
};

exports.createNews = function (req, res) {
	const newsData = req.body;

	news.unshift(newsData);

	return res.status(201).json('Новость успешно добавлена!');
};
