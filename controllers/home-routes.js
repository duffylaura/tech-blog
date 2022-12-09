// get routes (post routes are in api folder)
const router = require ('express').Router(); 
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//homepage // make GET request for all posts
router.get('/', async(req,res)=>{
    const dataFromDb = await Post.findAll({ include:User });
    const data = dataFromDb.map((post)=>post.get({plain:true}));
    res.render('/homepage',
    {data, loggedIn: req.session.loggedIn})
});

//GET route for seeing a single post with comments 
router.get('/single-post/:id', withAuth, async(req,res)=>{
   //GET single post based on id
    const postDataFromDb = await Post.findByPk(req.params.id,
        {include: User});
    const post = postDataFromDb.map((post)=>post.get({plain:true}));
    
    //GET comments of the single post using post id
    const commentDataFromDb = await Comment.findAll({
        where: {
            post_id: req.params.id
        },
        include: User
    });
    const comments = commentDataFromDb.map((comment)=>comment.get({plain:true}));

    res.render ('single-post', {post, comments, loggedIn: req.session.loggedIn});
});

//GET route for creating a post 
router.get('/create-post', withAuth, async(req,res)=>{
    res.render('create-post', {loggedIn: req.session.loggedIn});
});


//GET route for when login button is hit
router.get('/login', async(req,res)=>{
    res.render('login');
});

//GET route for when sign up button is hit 
router.get('/signup', async(req,res)=>{
    res.render('signup');
});

module.exports = router; 