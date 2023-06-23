
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PopularBooks from './PopularBooks'

const BASE_URL ="http://localhost:8000/";

const Home_popular = () => {
  const [popularHomeBooks,setPopularHomeBooks]= useState([]);
  useEffect(() => {
    const getPopularBooks =async()=>{
      const response =await axios({
        method:"get",
        url:BASE_URL + "popularBooks",
        withCredentials:true,
      });
      console.log(response)
      const data = response.data;
      console.log(data);
      setPopularHomeBooks(data.popularBooks.slice(0,5));
      console.log(popularHomeBooks)

    } 
      getPopularBooks();
    }, [])
  return (
    <div className="max-w-screen-2xl mx-auto p-5 mt-5">
    <div className="popular flex justify-between items-center">

  <h1 className="md:text-3xl text-xl dark:text-white ">Popular Books
  </h1>
  <Link to="/popularbooks" className="text-slate-400  font-semibold pr-2 ">Show All</Link>

    </div>
  <hr className="md:my-4 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-2" />
  <div className="blog-wrapper max-w-screen-2xl mx-auto grid grid-cols-5 overflow-x-scroll sm:gap-10 gap-x-[130px]">
  {popularHomeBooks.map((popularBook,index)=>(
    
  <PopularBooks {...popularBook} key={index}/>
))}

    </div>
</div>
  )
}

export default Home_popular
