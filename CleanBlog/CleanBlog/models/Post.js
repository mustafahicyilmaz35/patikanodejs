const mongoose = require('mongoose');


//Schema
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated : {
      type: Date,
      default: Date.now()
  }
});

//Model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;