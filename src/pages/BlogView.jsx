import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment/moment";
import { UserContext } from '../context/UserContext';


const BASE_URL = "http://localhost:8000/";

const BlogView = () => {
  const { profile } = useContext(UserContext);
  const [blog, setBlog] = useState(null);
  console.log(profile);
  console.log(blog)
  const param = useParams();
  // console.log(param);
  useEffect(() => {
    const getSingleBlog = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL +"blog/"+ param.id,
        withCredentials: true,
      });
      console.log(response);
      const data = response.data;
      console.log(data);
      setBlog(data.data);
    };
    getSingleBlog();
  }, []);

  if (!blog) return "";

  return (
    <div className= "max-w-screen-2xl mx-auto">
      <div className="title py-5">
        <h1 className="text-center text-3xl font-bold dark:text-white">
          {blog.title}
        </h1>
      </div>
      <div className="date">
        <p className="text-center text-md font-semibold text-[#7f7f7f] mt-[-10px]">
          {moment(blog.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
      <div className="author pt-2 pb-4 flex justify-between">
        <p className="font-bold dark:text-white">
          Posted by: {blog.author}{" "}
        </p>
        <div className="action flex gap-3">
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#2980b9] text-white rounded-md font-semibold"
            >
              <i className="fa-regular fa-pen-to-square mr-1"></i>
              Edit
            </Link>
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#c0392b] text-white rounded-md font-semibold"
            >
              <i className="fa-solid fa-trash mr-1"></i>
              Delete
            </Link>
            </div>
        </div>
      <div className="image mb-4 grid items-center justify-center">
        <img
          className="max-h-[500px]"
          src={BASE_URL + blog.image}
          alt="poster"
        />
      </div>
      <div className="introduction">
        <p className="text-lg font-semibold dark:text-white">
          {blog.introduction}
        </p>
      </div>
      <hr className="border-[#767676] my-4" />
      <div className="description dark:text-white px-5">
        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
      </div>
    </div>
  );
};

export default BlogView;
