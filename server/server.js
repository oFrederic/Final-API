require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app.js');

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
