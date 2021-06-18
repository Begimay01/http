const express = require('express');
const app = express();

const { router } = require('./routes/api');

const PORT = 5050;

app.use(express.json());
app.use(router);

app.listen(PORT, function () {
	console.log('Бекенд приложение запущено на порту: ' + PORT);
});
