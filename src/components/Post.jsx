import react from "react";
import { Link } from "react-router-dom"

const BASE_URL = "http://localhost:8000/";

function Post({title,description,author,image,createdAt}){
  return (
         <div className="post grid grid-row-2 mt-5 p-8 bg-white dark:bg-[#252525] shadow-md rounded-md">
    <div className="top-box mb-2 md:mb-0">
    <img
          src={`${BASE_URL}${image}`}
          className="h-[300px] w-[100%] object-cover"
          alt="article"
        />
    </div>
    <div className="bottom-box">
      <div className="title">
        <h1 className="text-xl font-bold dark:text-white">{title}</h1>
      </div>
      <div className="info">
        <p className="dark:text-white">{description}</p>
      </div>
      <div className="date py-1">
        <p className="italic text-slate-500">Article-Date:<span>{createdAt}</span></p>
      </div>
      <div className="author flex justify-between pt-1">
        <p className="text-[#6C9BCF] font-semibold">Author:<span>{author}</span></p>
        <Link to="" className="text-[#FF6D60] font-semibold pr-2 underline">See more</Link>
      </div>
    </div>
  </div>

  )
}

export default Post
