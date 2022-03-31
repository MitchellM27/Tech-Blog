const { Post } = require('../models');

const postdata = [
  {
    name: 'learning about html',
    blog: 'I have been learning about html to broaden my skills and it has been great!',
    user_id: 1,
  },
  {
    name: 'taking a course on javascript',
    blog: 'This class ive been taking on javascript has been amazing',
    user_id: 2,
  },
  {
    name: 'Practicing with CSS',
    blog: 'Ive been sharpening my CSS skills lately and its been paying off',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;