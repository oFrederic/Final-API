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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on http://127.0.0.1:${port}...`);
});
