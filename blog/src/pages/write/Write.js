import axios from 'axios'
import React, { useState } from 'react'
import './write.css'
import { Navigate, useNavigate } from 'react-router-dom'
const Write = () => {
  const [tittle,setTittle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const navigate = useNavigate()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const newPost = {
      tittle,
      desc
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename
      try {
        await axios.post("/upload",data)
      } catch (error) {
        
      }
    }
    try {
      const res = await axios.post("/posts",newPost)
      navigate("/post/"+res.data._id)
    } catch (error) {
      
    }
 
  }
  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)}/>

      )
      }
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" className='writeInput' autoFocus={true} onChange={e=>setTittle(e.target.value)}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>
            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write