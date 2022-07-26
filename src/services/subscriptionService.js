'use strict';

const db = require('../db/db');

module.exports.subscribe = async email => {
  const insertedEmail = await db.insertEmail(email);
  return insertedEmail;
};
