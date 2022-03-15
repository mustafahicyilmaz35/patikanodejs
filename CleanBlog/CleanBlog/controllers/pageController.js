const Post = require('../models/Post');

exports.getIndex = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

exports.getAbout = (req, res) => {
  res.render('about');
};

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.getUpdatePage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render('update_post', {
    post,
  });
};