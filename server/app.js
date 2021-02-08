const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from the server side!');
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://127.0.0.1:${PORT}...`);
});
