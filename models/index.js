const User = require('./user');
const Post = require('./post');
const Comment = require('./comment'); 

// Model relations: 
// User has many Posts and Comments 
// Post belongs to User and has many Comments 
// Comments belongs to User and to Post 

//User 

User.hasMany(Post, {
    foreignKey: 'user_id',
}); 

User.hasMany(Comment, {
    foreignKey: 'user_id',
}); 

//Post 

Post.belongsTo(User, {
    foreignKey: 'user_id',
}); 

Post.hasMany(Comment, {
    foreignKey: 'post_id',
}); 

//Comment 

Comment.belongsTo(User, {
    foreignKey: 'user_id',
}); 

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
}); 

module.exports = { User, Post, Comment};
