const express = require('express');
const { getAllGames, getGame } = require('../controllers/gameController');
const router = express.Router();

router.route('/').get(getAllGames);
router.route('/:id').get(getGame);

module.exports = router;
