const pgp = require('pg-promise')();

const {
  nameGoalsAPPromise,
  daysPromise,
  insertGoalPromise,
  insertNewUserPromise,
  findPotentialPartnerPromise,
  setPartnerPromise,
  insertProgressPromise,
} = require('./model');

const dbController = {};

dbController.findUsers = async (req, res, next) => {
  const users = await db.query('select * from users;');
  res.locals.users = users;
  next();
};

dbController.newUser = (req, res, next) => {
  // input the new user in the users table
  const user = req.body;
  insertNewUserPromise(user)
    .then(() => next())
    .catch(err => res.send(err));
};

dbController.getUserState = (req, res, next) => {
  const { userID } = req.body;
  Promise.all([nameGoalsAPPromise(userID), daysPromise(userID)])
    .then((result) => {
      // console.log()
      const state = convertToState(result[0]);
      state.days = daysParser(result[1]);
      res.locals.state = state;
      next();
    })
    .catch(err => res.send(err));
};

dbController.insertGoals = (req, res, next) => {
  const goals = req.body;
  console.log('goals: ', goals);
  insertGoalPromise(goals)
    .then(() => {
      next();
    })
    .catch(err => res.send(err));
};

dbController.insertProgress = (req, res, next) => {
  const progress = req.body;
  console.log('progress: ', progress);
  insertProgressPromise(progress)
    .then(() => {
      next();
    })
    .catch(err => res.send(err));
};

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
    accum.userID = curr.user_id;
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
