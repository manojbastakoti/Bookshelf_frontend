
import axios from 'axios'
import { useContext } from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Post from "../components/Post";
import { UserContext } from '../context/UserContext';



const BASE_URL ="http://localhost:8000/blogs";

const Blog = () => {
const [posts,setPosts]= useState([]);
const{profile}=useContext(UserContext)
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
      // console.log(posts)
      
    }
    getBlogs();
  }, [])
  
  return (
    <>
  <div className="create-button max-w-screen-2xl mx-auto mt-5 mb-2 flex justify-end">
    {profile &&(
      <Link to="/create-blog" className="bg-blue-500  hover:bg-blue-600 p-3 rounded-md text-lg dark:text-white">Create Blog</Link>
    )}

  </div>
    <div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
      {posts.map((post,index)=>(
        <Post {...post} key={index}/>
      ))}

      
        
    </div>
    </>
  )
}

export default Blog
