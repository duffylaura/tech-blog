const router = require("express").Router();
//importing models
const { User, Post, Comment } = require("../models");
//importing auth helper to make sure user is logged int to access certain routes
const auth = require("../utils/auth");

//get all posts that the logged in user has made and render them to the dashboard.hbs file
router.get("/", auth, async (req, res) => {
  try {
    const allPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
          attributes: ["id", "text"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });
    //map goes over the allPostData array at each position and gets just the datavalues for the  post. 
    //and then we serialize the data with post.get so only the datavalues we want to see will show up
    const post = allPostData.map((post) => post.get({ plain: true }));
    //console.log(post, "test");
    res.render("dashboard", {
      post,
      loggedIn: true,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get a single post from the dashboard hbs so that the logged in user 
//can edit/delete a single post they click on

router.get("/edit/:id", auth, async (req, res) => {
  try {
    const editSinglePostData = await Post.findOne({
      where: {
        id: req.params.id,
      },

      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["text", "user_id", "created_at", "id", "post_id"],
          include: {
            model: User,
            atrributes: ["username"],
          },
        },
      ],
    });

    const editPostData = editSinglePostData.get({ plain: true });
    res.render("editPost", {
      editPostData,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err)
    res.status(500).json(err); 
  }
});

module.exports = router;