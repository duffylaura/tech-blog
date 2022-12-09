const { Comment } = require('../models');

const commentData = [
    {
        id: 57884,
        content: "Wow, interesting thought",
        user_id: 987,
        post_id: 8930030,

    },
]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;