const express = require('express');
const morgan = require('morgan');
const path = require('path');
const gameRouter = require('../routes/gameRoutes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/games', gameRouter);
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
