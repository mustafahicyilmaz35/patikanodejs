const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/Post');
const { urlencoded } = require('express');

//Connect Database(Name ve Message bilgileri lazım.)
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Post.create({
//   name : "Name 1",
//   message: "Message 1"
// })

// Post.find({}, (err, data) => {
//   console.log(data)
// })

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/index', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portundan başlatıldı`);
});
