// get routes (post routes are in api folder)

const router = require ('express').Router(); 
const {User, Post, Comment} = require('../models');

//homepage // make GET request for all posts
router.get('/', async(req,res)=>{
    try{
        const dataFromDb = await Post.findAll({
            include:[{
                model: User, 
            }]
        });

        const data = dataFromDb.map((post)=>post.get({plain:true}));

        res.render('homepage',{
            data,
            loggedIn: req.session.loggedIn, 
        })
        } catch (err) {
            res.status(500).json(err);
    };
});

//show login page 
router.get('/login', async(req,res)=>{
    res.render('login');
});

//show sign up page 
router.get('/signup', async(req,res)=>{
    res.render('signup');
});

module.exports = router; 