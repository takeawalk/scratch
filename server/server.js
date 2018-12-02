const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbContoller = require('./dbcontroller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


// app.use(express.static(path.resolve(__dirname, '../dist/')));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/userdata', dbContoller.getUserState, (req, res) => {
  res.json(res.locals.state);
});

app.post('/newUser', dbContoller.newUser, (req, res) => res.status(200).send());

app.post('/insertGoals', dbContoller.insertGoals, (req, res) => res.send());


app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
