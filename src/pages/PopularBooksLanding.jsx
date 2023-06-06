import React from 'react'
import Footer from '../components/Footer'
import PopularBooks from '../components/PopularBooks'

const PopularBooksLanding = () => {
  return (
    <>
  <div className="section max-w-screen-2xl mx-auto mt-10 dark:text-white">

  <h1 className='text-3xl mb-2'>Popular Books</h1>
  <p>Our popular books are updated based on user reviews and ratings.</p>
  </div>
<div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>
  <PopularBooks/>

  </div>
<Footer/>
    </>
  )
}

export default PopularBooksLanding
