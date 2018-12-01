const pgp = require('pg-promise')();

const dbController = {};
const db = pgp('postgres://leslygmy:uYPKynsxZKpL8a98_aXmg9GEsmZ4I3Nk@elmer.db.elephantsql.com:5432/leslygmy');


dbController.findUsers = async (req, res, next) => {
  const users = await db.query('select * from users;');
  res.locals.users = users;
  next();
};

dbController.getUserState = async (req, res, next) => {
  const { userID } = req.body;
  const state = {};
  
  const userNamePromise = db.one(`select name from users where user_id=${userID};`);
  
  const userGoalsPromise = db.query(`select goal, value
  from weeklygoals wg join goals g on wg.goal_id = g.goal_id
  where user_id =${userID};`);
  
  
  const accForPromise = db.one(`select u2.name, u2.user_id
  from users u1 join users u2 on u1.accfor = u2.user_id
  where u1.user_id = ${userID};`);
  
  const daysPromise = db.query(`select name, date, goal, value
  from progress p join goals g on p.goal_id = g.goal_id join users u on p.user_id = u.user_id
  where p.user_id = ${userID};`);
  // userNamePromise, userGoalsPromise, accForPromise,
  Promise.all([userNamePromise, userGoalsPromise, accForPromise, daysPromise])
    .then((result) => {
      console.log(result);
      // state.userName = result[0].name;
      // state.goals = goalsParser(result[1]);
      // state.partner = partnerParser(result[2]);
      // res.locals.state = state;
      next();
    })
    .catch((err) => {
      res.locals.state = err;
      next();
    });
};

module.exports = dbController;

const goalsParser = (goalsArr) => {
  const goalsObj = {};
  goalsArr.forEach(goal => goalsObj[goal.goal] = goal.value)
  return goalsObj;
};

const partnerParser = partnerObj => ({
  partnerName: partnerObj.name,
  ID: partnerObj.user_id,
});

// const daysParser = (daysArr) => {
//   const days = {};
//   daysArr.forEach((dayObj) => {
//     if (days[dayObj])
//   });

// }