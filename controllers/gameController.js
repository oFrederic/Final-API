const fs = require('fs');

const games = JSON.parse(fs.readFileSync(`${__dirname}/../data/games.json`));

exports.getAllGames = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: games.length,
    data: {
      games,
    },
  });
};

exports.getGame = (req, res) => {
  const id = Number(req.params.id);
  const game = games.find(item => item.id === id);
  if (!game) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      game,
    },
  });
};
