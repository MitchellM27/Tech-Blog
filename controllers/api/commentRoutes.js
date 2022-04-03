const router = require('express').Router();
const { Post , User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      username: req.session.username,
      include: [{model : Post}],
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll(
      include [{model: Post}]
    )

    res.status(200).json(commentData);
    
  } catch (err) {
    res.render("homepage");
  }
});

module.exports = router;