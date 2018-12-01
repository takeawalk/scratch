const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbContoller = require('./dbcontroller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../dist/')));


app.get('/userdata', dbContoller.getUserState, (req, res) => {
  res.json(res.locals.state);
});

app.post('/newUser', dbContoller.newUser, (req, res) => res.send());

app.post('/insertGoals', dbContoller.insertGoals, (req, res) => res.send());


app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
