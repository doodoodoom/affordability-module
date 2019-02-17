const express = require('express');

const db = require('../db/index.js');

const app = express();

app.use(express.json());

app.set('port', 3001);

app.use(express.static(`${__dirname}/../public`));

app.get('/:homeId', (req, res) => {
  res.redirect(`/index.html?homeId=${req.params.homeId}`);
});

app.get('/homeDetails/:homeId', (req, res) => {
  db.getHome(req.params.homeId, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});

app.get('/similarHomes/:homeId', (req, res) => {
  db.getSimilarHomes(req.params.homeId, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  });
});

app.get('/affordability/:homeId', (req, res) => {
  // do db stuff
  res.send(`success /affordability/${req.params.homeId}`);
});

module.exports = app;
