const { Comment } = require('../models');

const commentData = [
    {
        content: "Wow, interesting thought",
        user_id: 1,
        post_id: 3

    },
]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;