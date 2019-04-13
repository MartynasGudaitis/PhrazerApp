const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const phrases = require('./routes/api/phrases');
const categories = require('./routes/api/categories');

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/phrases', phrases);
app.use('/api/categories', categories);

// process.env.PORT for heroku
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

module.exports = app;
