const pgp = require('pg-promise')();
const SALT_WORK_FACTOR = 8;
const bcrypt = require('bcryptjs');

const {
  nameGoalsAPPromise,
  daysPromise,
  insertGoalPromise,
  insertNewUserPromise,
  findPotentialPartnerPromise,
  setPartnerPromise,
  insertProgressPromise,
  verifyUserPromise,
} = require('./model');

const dbController = {};

// inputs the new user that signs up
dbController.newUser = (req, res, next) => {
  console.log('here');
  const user = req.body;
  const { password } = user;
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
  const hash = bcrypt.hashSync(password, salt);
  user.password = hash;
  insertNewUserPromise(user)
    .then(() => next())
    .catch(err => res.send(err));
};

dbController.verifyUser = (req, res, next) => {
  const { userName, password } = req.body;
  verifyUserPromise(userName)
    .then((passwordObj) => {
      if (bcrypt.compareSync(password, passwordObj.password)) {
        res.status(200).send('Login Successful')
      } else {
        throw new Error('Incorrect password');
      }
    })
    .catch(err => res.send(err));
};

dbController.getUserState = (req, res, next) => {
  const { name } = req.body;
  Promise.all([nameGoalsAPPromise(name), daysPromise(name)])
    .then((result) => {
      const state = convertToState(result[0]);
      state.days = daysParser(result[1]);
      res.locals.state = state;
      next();
    })
    .catch(err => res.send(err));
};

// insert weekly goals
dbController.insertGoals = (req, res, next) => {
  const goals = req.body;
  insertGoalPromise(goals)
    .then(() => {
      next();
    })
    .catch(err => res.send(err));
};

// insert daily progress
dbController.insertProgress = (req, res, next) => {
  const progress = req.body;
  console.log('progress: ', progress);
  insertProgressPromise(progress)
    .then(() => {
      next();
    })
    .catch(err => res.send(err));
};

// add accountability partner
dbController.addPartner = (req, res, next) => {
  const { userID, partnerName } = req.body;
  const reqBody = {};
  findPotentialPartnerPromise(partnerName)
    .then((partnerIDObj) => {
      reqBody.partnerID = partnerIDObj.user_id;
      reqBody.userID = userID;
      return reqBody;
    })
    .then((request) => { setPartnerPromise(request); })
    .then(() => { next(); })
    .catch(err => res.send(err));
};

module.exports = dbController;

// two helper functions to build the full state
const daysParser = (daysArr) => {
  const days = {};
  daysArr.forEach((dayObj) => {
    const currentDate = days[dayObj.date];
    if (currentDate) {
      currentDate[dayObj.goal] = dayObj.value;
    } else {
      days[dayObj.date] = {};
      days[dayObj.date][dayObj.goal] = dayObj.value;
    };
  });
  return days;
};

function convertToState(array) {
  return array.reduce((accum, curr) => {
    accum.userName = curr.username;
    accum.name = curr.user_id;
    if (!accum.hasOwnProperty('goals')) { accum.goals = {}; }
    accum.goals[curr.goal] = curr.value;
    if (!accum.partner) {
      accum.partner = {
        partnerName: curr.partnername,
        ID: curr.partnerid,
        phone: curr.partnerphone,
      }
    }
    return accum;
  }, {});
}
