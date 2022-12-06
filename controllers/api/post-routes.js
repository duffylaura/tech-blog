const router = require('express').Router();
const {Post } = require('../../models');
const withAuth = require('../../utils/auth')

//write a post 
router.post('/', withAuth ,async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, user_id: req.session.user_id });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;