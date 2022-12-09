const { Post } = require("../models");

const postData = [
  {
    id: 34,
    title: "Once upon a time...",
    content: "I went to the grocery store.",
    user_id: 987
  },
  {
    id: 47859,
    title: "But, can you kick it?",
    content: "Yes. You can.",
    user_id: 987
  },
  {
    id: 8930030,
    title: "Kirby is the best!",
    content: "I love Kirby!",
    user_id: 000023
  },
];
const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;