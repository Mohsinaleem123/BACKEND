const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Posts = require('../models/Posts')
//const posts = mongoose.model('posts',PostSchema);
//const posts = require('../models/PostSchema');

// GET all posts
router.get('/', async (req, res) => {
  try {
   

    const posts = await Posts.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific post by ID
router.get('/:id', getPost, (req, res) => {
  res.json(res.post);
});


router.post('/update', async (req, res) => {
  const id = req.body.uid; // get the uid from the request parameters
  console.log(id);
  const updates = req.body; // get the updates from the request body
  try {

    
    const post = await Posts.findOneAndUpdate({ uid: id }, updates, { new: true });
    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }
    res.send(post);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});

// Delete a post
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single post by ID

// Middleware function to get a specific post by ID
async function getPost(req, res, next) {
  let post;
  const id = req.params.id;
  try {
    post = await Posts.findOne({nnumber:id});
    if (post == null) {
      return res.status(404).json({ message: 'Cannot find post' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.post = post;
  next();
}

module.exports = router;
