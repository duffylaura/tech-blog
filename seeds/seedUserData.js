const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "A'ja Wilson",
    email: "wilson@wnba.com",
    password: "sdkfjsldkjfs;kldfjs",
  },
  {
    id: 2,
    username: "Severus Snape",
    email: "ILoveLily@hotMales.com",
    password: "cnnzncznskjdhqluehd987654",
  },
  {
    id: 3,
    username: "Rocky DAT Rockstar",
    email: "dogWithAttitude@bark.com",
    password: "fkzcdklxmwkmjdkekek3645758",
  },
  {
    id: 4, 
    username: "Kirby Popstar",
    email: "KirbyKirby@Kirby.com",
    password: "KirbyKirbyKirby45678i43",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;