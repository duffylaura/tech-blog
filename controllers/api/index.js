const router = require('express').Router();

//Choosing to break routes up by model

// User
const user = require('./user-routes');
router.use('/user', user);

// Post
const posts = require('./post-routes');
router.use('/posts', posts); 

//Comment
const comments = require('./comments-routes');
router.use('/comments',comments);


module.exports = router;


