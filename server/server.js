const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbContoller = require('./dbcontroller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use(express.static(path.resolve(__dirname, '../dist/')));

// get the entire state of requested user
app.get('/userdata', dbContoller.getUserState, (req, res) => {
  res.json(res.locals.state);
});

// inputs the new user that signs up
app.post('/newUser', dbContoller.newUser, (req, res) => res.send());

// insert weekly goals
app.post('/insertGoals', dbContoller.insertGoals, (req, res) => res.send());

// insert daily progress
app.post('/insertProgress', dbContoller.insertProgress, (req, res) => res.send());

// add accountability partner
app.patch('/addPartner', dbContoller.addPartner, (req, res) => res.send());

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
