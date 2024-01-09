const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get back all the post
router.get('/', async (req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);

    }catch(err)
    {
        console.log(err);
    }
});

//add the post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
  try {
        const savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:err });
    }
});



//Specific post
router.get('/:postId',async (req,res)=>{
    try{
        const posts = await Post.findById(req.params.postId);
        res.status(200).json(posts);

    }catch(err)
    {
        console.log(err);
    }
});


//Delete Post
router.delete('/:postId',async (req,res)=>{
    try{
        const posts = await Post.deleteOne({_id:req.params.postId});
        res.status(200).json(posts);

    }catch(err)
    {
        console.log(err);
    }
});


//Update the post
router.patch('/:postId', async (req,res)=>{
    const filter = { _id: req.params.postId };
    const updateData = {
       $set: {
        title: req.body.title,
       }
    };

  try {
        // const updatePost = await Post.updateOne({_id:req.params.postId},{$set:{ title: req.body.title}});
        const updatePost = await Post.updateOne(filter, updateData);
        res.status(200).json(updatePost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message:err });
    }
});


module.exports = router;
