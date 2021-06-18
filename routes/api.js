const express = require('express');
const router = express.Router();

const { getCookies } = require('../controllers/cookie');
router.get('/get-cookies', getCookies);

const { createRecept, getRecepts } = require('../controllers/recepts');

router.post('/create-recept', createRecept);
router.get('/get-recepts', getRecepts);

const { getNews, deleteNews, updateOneNews } = require('../controllers/news');
router.get('/get-news', getNews);

router.delete('/delete-news/:id', deleteNews);
router.patch('/news/:id', updateOneNews);

exports.router = router;
