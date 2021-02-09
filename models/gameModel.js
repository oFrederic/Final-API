const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
    unique: true,
  },
  platforme: {
    type: String,
    required: [true, 'A game must have a platforme'],
  },
  type: {
    type: String,
    required: [true, 'A game must have a type'],
  },
  developer: {
    type: String,
    required: [true, 'A game must have a developer'],
  },
  editor: {
    type: String,
    required: [true, 'A game must have a editeur'],
  },
  format: {
    type: String,
    required: [true, 'A game must have a format'],
  },
  release: {
    type: String,
    required: [true, 'A game must have a release'],
  },
  img: {
    type: String,
    required: [true, 'A game must have a img'],
  },
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
