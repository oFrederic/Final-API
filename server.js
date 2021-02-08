const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./server/app.js');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DATABASE connection successful!'));

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A game must have a name'],
  },
  platforme: {
    type: String,
    required: [true, 'A game must have a platforme'],
    unique: true,
  },
  type: {
    type: String,
    required: [true, 'A game must have a type'],
  },
  developer: {
    type: String,
    required: [true, 'A game must have a developer'],
  },
  editeur: {
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

const testGame = new Game({
  name: 'Final Fantasy XX',
  platforme: 'Playstation6',
  type: 'RPG',
  developer: 'Square-Enix',
  editeur: 'Square-Enix',
  format: 'Blue Ray',
  release: '12-15-2035',
  img: 'abcdefghijklmnopqrstuvwxyz',
});

testGame
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(`ERROR: ${err}`);
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on http://127.0.0.1:${port}...`);
});
