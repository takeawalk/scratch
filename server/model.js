const pgp = require('pg-promise')();
const db = pgp('postgres://leslygmy:uYPKynsxZKpL8a98_aXmg9GEsmZ4I3Nk@elmer.db.elephantsql.com:5432/leslygmy');

const model = {};

const insertNewUserQuery = ({ name, password, phone }) => `insert into users (name, password, phone) values ('${name}', '${password}', ${phone});`;

model.insertNewUserPromise = request => db.query(insertNewUserQuery(request));

const verifyUserQuery = userName => `select password from users where name = '${userName}';`;

model.verifyUserPromise = userName => db.one(verifyUserQuery(userName));

const nameGoalsPartnerQuery = userID => `select u.user_ID, u.name as userName, g.goal, wg.value, p.name as partnerName, p.user_id partnerID, p.phone partnerPhone
from users u join weeklygoals wg on u.user_id = wg.user_id join goals g on wg.goal_id = g.goal_id join users p on u.accfor = p.user_id
where u.user_id =${userID};`;

model.nameGoalsAPPromise = userID => db.query(nameGoalsPartnerQuery(userID));

const daysQuery = userID => `select name, date, goal, value
from progress p join goals g on p.goal_id = g.goal_id join users u on p.user_id = u.user_id
where p.user_id = ${userID}`;

model.daysPromise = userID => db.query(daysQuery(userID));

const insertGoalsQuery = ({ userID, goalID, value }) => `insert into weeklygoals (user_id, goal_id, value) values (${userID}, ${goalID}, ${value})`;

model.insertGoalPromise = goalObj => db.query(insertGoalsQuery(goalObj));

const findPotentialPartnerQuery = partnerName => `select user_id from users where name = '${partnerName}';`;

model.findPotentialPartnerPromise = partnerName => db.one(findPotentialPartnerQuery(partnerName));

const setPartnerQuery = ({ userID, partnerID }) => `update users set accfor = ${partnerID} where user_id = ${userID};`;

model.setPartnerPromise = request => db.query(setPartnerQuery(request));

const insertProgressQuery = progressObj => (
  `INSERT INTO progress (user_ID, goal_id, value) 
  VALUES 
  (${progressObj.userID}, 1, ${progressObj[1]}),
  (${progressObj.userID}, 2, ${progressObj[2]}),
  (${progressObj.userID}, 3, ${progressObj[3]}),
  (${progressObj.userID}, 4, ${progressObj[4]});`
);

model.insertProgressPromise = progressObj => db.query(insertProgressQuery(progressObj));

module.exports = model;