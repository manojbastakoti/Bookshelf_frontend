import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const AllBooks = () => {
    const{profile}=useContext(UserContext)
    console.log(profile)
  return (
    <>
    <div className="create-button max-w-screen-2xl mx-auto mt-5 mb-2 flex justify-end">
    {profile?.role ==="admin" &&(
        <Link to="/addbooks" className="bg-blue-500  hover:bg-blue-600 p-3 rounded-md text-lg dark:text-white">Add Books</Link>
        )}

  </div>
        </>
  )
}

export default AllBooks
