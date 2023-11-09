const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
  // res.send("Get all posts route");
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    // console.log(post);
    res.status(201).json({ message: "Post created" });
    // res.send("Create new post route");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.changePostById = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const newTitle = req.body.title;
    const newBody = req.body.body;
    const [post, _] = await Post.changeById(postId, newTitle, newBody);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.deleteById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }

  // res.send("Get post by id route");
};
