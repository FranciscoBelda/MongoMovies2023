const express = require('express');
const movieCtrl = require('../controllers/movie.controller');
const router = express.Router();

router.get('/', movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.get('/moviename/:name', movieCtrl.getMovieName);
router.post('/', movieCtrl.addMovie);
router.put('/:id', movieCtrl.updateMovie);
router.delete('/:id', movieCtrl.deleteMovie);

router.get('/genres', movieCtrl.getGenres);

module.exports = router;
