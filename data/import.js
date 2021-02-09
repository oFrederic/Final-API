require('dotenv').config();
const mongoose = require('mongoose');
const Game = require('./../models/gameModel');
const gamesData = require('./games.json');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DATABASE connection successful!'));

// inject data into database
const importData = async () => {
  try {
    await Game.create(gamesData);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// delete data into database
const deleteData = async () => {
  try {
    await Game.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
