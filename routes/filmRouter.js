const filmController = require('../controllers/filmController');

const router = require('express').Router();

// get all film
router.get('/', filmController.getAllFilm);

// create film
router.post('/create', filmController.createFilm);

module.exports = router;
