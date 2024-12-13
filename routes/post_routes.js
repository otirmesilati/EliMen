const express = require('express');
const Post = require('../controllers/post');
const router = express.Router();

router.get("/", Post.getAllPosts);
  
router.post("/", Post.createNewPost);

module.exports = router;