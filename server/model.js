const pgp = require('pg-promise')();
const db = pgp('postgres://leslygmy:uYPKynsxZKpL8a98_aXmg9GEsmZ4I3Nk@elmer.db.elephantsql.com:5432/leslygmy');

const nameQuery = userID => `select name from users where user_id=${userID};`
export const userNamePromise = userID => db.one(nameQuery(userID));
  const userGoalsPromise = db.query(`select goal, value
  from weeklygoals wg join goals g on wg.goal_id = g.goal_id
  where user_id =${userID};`);