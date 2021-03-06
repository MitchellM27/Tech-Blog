const router = require('express').Router();
const { Post , User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
      username: req.session.username,
      include: [{model : User}],
    });

    console.log(newPost)

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({where: {post_id: req.params.id}})
//     const postData = await Post.findOne({where: {post_id: req.params.id}})
//     const username = req.session.username

//     const comments = commentData.map((comment) => comment.get({ plain: true }));
//     res.render("post", {
//       postData,
//       comments,
//       username,
//       user_id: req.session.user_id,
//     });
//   } catch (err) {
//     res.render("homepage");
//   }
// });

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: Comment},
         { model: User,
        attributes: ['name'], }]
    })

    const post = postData.get({ plain: true });

    res.render('post', { 
      ...post, 
    });
    // res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
