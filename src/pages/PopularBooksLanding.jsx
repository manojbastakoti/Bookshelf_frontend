import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import PopularBooks from '../components/PopularBooks';

const BASE_URL ="http://localhost:8000/";

const PopularBooksLanding = () => {
  const [popularBooks,setPopularBooks]= useState([]);
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
      setPopularBooks(data.popularBooks);
      console.log(popularBooks)

    } 
      getPopularBooks();
    }, [])
  
  return (
    <>
  <div className="section max-w-screen-2xl mx-auto mt-10 pl-2 sm:pl-0 dark:text-white">
    {console.log(popularBooks)}

  <h1 className='text-3xl mb-2'>Popular Books</h1>
  <p>Our popular books are updated based on user reviews and ratings.</p>
  </div>
<div className="blog-wrapper max-w-screen-2xl min-h-screen mx-auto grid md:grid-cols-5 grid-cols-2 gap-10">
{popularBooks.map((popularBook,index)=>(
  <PopularBooks {...popularBook} key={index}/>
))}

  </div>
<Footer/>
    </>
  )
}

export default PopularBooksLanding
