import React, { useState,useEffect } from 'react'
import Header from '../../Components/header/Header'
import Posts from '../../Components/posts/Posts'
import axios from 'axios'
import './home.css'
const Home = () => {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const fetchPost = async () =>{
      const res = await axios.get("/posts")
      
      setPosts(res.data)
      console.log(res)
    }
    fetchPost()
    
  }, [])
 
  return (
    <>

      <Header />
      <div className='home'>
        <Posts posts={posts}/>

      </div>
    </>
  )
}

export default Home