import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
// import PopularBooks from '../components/PopularBooks';
import Books from '../components/Book';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import PopularBooks from '../components/PopularBooks';

const BASE_URL ="http://localhost:8000/";

const AllBooks = () => {
    const{profile}=useContext(UserContext)
    const {keyword}=useParams();
    
    console.log(profile)
    const [book,setBooks]= useState([]);
    useEffect(() => {
      const getBooks =async(keyword="")=>{
        const response =await axios({
          method:"get",
          url:`${BASE_URL}books?keyword=${keyword}`,
          withCredentials:true,
        });
        console.log(response)
        const data = response.data;
        console.log(data);
        setBooks(data.books);
        // console.log(book)
  
      } 

    
        getBooks(keyword);
      }, [keyword])

  return (
    <>
     <Meta title={"All Details"} />
     <BreadCrumb title="All Books" />
    {console.log(book)}
    <div className="create-button max-w-screen-2xl mx-auto mt-5 mb-2 flex justify-end">
    {profile?.role ==="admin" &&(
        <Link to="/addbooks" className="bg-blue-500  hover:bg-blue-600 p-3 rounded-md text-lg dark:text-white">Add Books</Link>
        )}

  </div>
  <div className="section max-w-screen-2xl mx-auto mt-10 pl-2 sm:pl-0 dark:text-white">

  <h1 className='text-3xl mb-2'>All Books</h1>
  {/* <p>Our popular books are updated based on user reviews and ratings.</p> */}
  </div>
<div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-5 grid-cols-2 gap-10">
{book.map((book,index)=>(
  <Books {...book} key={index}/>
))}
  </div>
        </>
  )
}

export default AllBooks
