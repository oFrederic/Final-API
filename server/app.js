const fs = require('fs');
const express = require('express');

const app = express();

const games = JSON.parse(fs.readFileSync(`${__dirname}/../data/games.json`));

app.get('/api/games', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: games.length,
    data: {
      games,
    },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://127.0.0.1:${PORT}...`);
});
