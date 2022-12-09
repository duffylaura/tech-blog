const { User } = require("../models");

const userData = [
  {
    id: 987,
    userName: "A'ja Wilson",
    email: "wilson@wnba.com",
    password: "sdkfjsldkjfs;kldfjs",
  },
  {
    id: 89,
    userName: "Severus Snape",
    email: "ILoveLily@hotMales.com",
    password: "cnnzncznskjdhqluehd987654",
  },
  {
    id: 000023,
    userName: "Rocky DAT Rockstar",
    email: "dogWithAttitude@bark.com",
    password: "fkzcdklxmwkmjdkekek3645758",
  },
  {
    id: 34444, 
    userName: "Kirby Popstar",
    email: "KirbyKirby@Kirby.com",
    password: "KirbyKirbyKirby45678i43",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;