const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/Post');
const { urlencoded } = require('express');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

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
app.use(methodOverride('_method', {
  methods:['GET','POST']
}))

app.set('view engine', 'ejs');

app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/index', pageController.getIndex);
app.get('/about', pageController.getAbout);
app.get('/add_post', pageController.getAddPostPage);
app.get('/posts/update_post/:id', pageController.getUpdatePage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portundan başlatıldı`);
});
