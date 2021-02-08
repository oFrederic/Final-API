const express = require('express');
const morgan = require('morgan');
const gameRouter = require('../routes/gameRoutes');

const app = express();

app.use(morgan('dev'));
app.use('/api/games', gameRouter);

module.exports = app;
