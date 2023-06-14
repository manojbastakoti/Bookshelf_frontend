
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Post from "../components/Post";



const BASE_URL ="http://localhost:8000/blogs";

const Blog = () => {
const [posts,setPosts]= useState([]);
  useEffect(() => {
    const getBlogs =async()=>{
      const response =await axios({
        method:"get",
        url:BASE_URL,
        withCredentials:true,
      });
      console.log(response)
      const data = response.data;
      console.log(data);
      setPosts(data.data);
      console.log(posts)
      
    }
    getBlogs();
  }, [])
  
  return (
    <>
      <Link to="/create-blog">Create Blog</Link>
    <div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-10">
      {posts.map((post,index)=>(
        <Post {...post} key={index}/>
      ))}

      
        
    </div>
    </>
  )
}

export default Blog
