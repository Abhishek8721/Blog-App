const router = require('express').Router()
const Post = require('../Model/Post')
//CREATE POST
router.post('/',async (req,res)=>{
   const newPost = new Post(req.body)
   try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
    
   } catch (err) {
    res.status(400).json(err)
   }
})
//GET POST
router.get('/:id',async (req,res)=>{
    
    try {
     const post = await Post.findById(req.params.id)
     res.status(200).json(post)
     
    } catch (err) {
     res.status(400).json(err)
    }
 })
 router.get('/',async (req,res)=>{
    
   try {
    const post = await Post.find()
    res.status(200).json(post)
    
   } catch (err) {
    res.status(400).json(err)
   }
})


 

module.exports = router