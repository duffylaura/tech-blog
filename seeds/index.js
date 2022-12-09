const sequelize = require('../config/connection');

//require modularized seed data

const seedUserData = require('./seedUserData');
const seedPostData = require('./seedPostData');
const seedCommentData = require('./seedCommentData');

//define seeding as a function to bring all js files together
const seedAllData = async () => {
  await sequelize.sync({ force: true });
  await seedUserData();
  await seedPostData();
  await seedCommentData();
  process.exit(0);
};

seedAllData();