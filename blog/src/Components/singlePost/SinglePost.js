import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './singlepost.css'
const SinglePost = () => {
  const PF = "http://localhost:5000/images/"
  const location = useLocation()
  const path = (location.pathname.split("/")[2])
  const [post,setPost] = useState({})
  useEffect(()=>{
    const getPost = async () =>{
      const res = await axios.get("/posts/"+path)
      setPost(res.data)
    }
    getPost()
  },[path])
  return (
    <div className='singlepost'>
        <div className='singlePostWrapper'>
          {post.photo && (
             <img className='singlePostImg' src={PF+post.photo} />
          )}
           
            <h1 className='singlePostTitle'>{post.tittle}
           
            </h1>
            <div className='singlePostInfo'>
               
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>
              {post.desc}
            </p>
        </div>
    </div>
  )
}

export default SinglePost