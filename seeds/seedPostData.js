const { Post } = require("../models");

const postData = [
  {
    title: "Once upon a time...",
    content: "I went to the grocery store.",
    user_id: 1
  },
  {
    title: "But, can you kick it?",
    content: "Yes. You can.",
    user_id: 1
  },
  {
    title: "Kirby is the best!",
    content: "I love Kirby!",
    user_id: 3
  },
];
const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;