const router = require('express').Router();
const {Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//write a comment
router.post('/', withAuth, async(req, res)=>{
    try{
        const comment = await Comment.create({...req.body, user_id:req.session.user_id});
        res.status(200).json(comment);
    } catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;