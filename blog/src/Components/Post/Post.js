import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
const Post = ({post}) => {
  const PF = "http://localhost:5000/images/"
  return (
    <div className='post'>
      {post.photo && (<Link to={`/post/${post._id}`} className="link"><img className='postImg' src={PF+post.photo}/></Link>)}
        
    <div className='postInfo'>
        

        <span className='postTitle'>{post.tittle}</span>
        
        <hr/>
        <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className='postDesc'>
       {post.desc}
    </p>
    </div>
  )
}

export default Post