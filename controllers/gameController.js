const Game = require('./../models/gameModel');

exports.getAllGames = async (req, res) => {
  try {
    // const games = await Game.find()
    //   .where('platforme')
    //   .equals('Nintendo')
    //   .where('developer')
    //   .equals('Squaresoft');

    const games = await Game.find(req.body);

    res.status(200).json({
      status: 'success',
      result: games.length,
      data: {
        games,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        game,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
