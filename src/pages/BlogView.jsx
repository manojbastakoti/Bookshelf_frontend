import axios from "axios";
import  { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import Comments from "../components/Comments";


const BASE_URL = "http://localhost:8000/";

const BlogView = () => {
  const { profile } = useContext(UserContext);
  const [blog, setBlog] = useState(null);
  console.log(profile);
  console.log(blog)
  const param = useParams();
  const navigate = useNavigate();
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
    const addViews = async () => {
      const response = await axios({
        method: "post",
        url: BASE_URL + "article-add-views/" + param.id,
        withCredentials: true,
      });
      const data = response.data;
      console.log(data);
    };
    getSingleBlog();
    addViews();
  }, []);

  const deleteArticle = async () => {
    const response = await axios({
      method: "delete",
      url: BASE_URL + "blog/delete/" + param.id,
      withCredentials: true,
    });
    const data = response.data;
    if (data.success) {
      navigate("/blogs");
    }
  };
  

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
        <p className="text-green-700 font-semibold">
          <i className="fa-solid fa-eye"></i> <span>{blog.views}</span>
        </p>

        {profile?.user_id === blog?.author_id && (

          <div className="action flex gap-3">
            <Link
              to={`/edit-blog/${blog._id}`}
              className="min-w-[80px] py-2 px-4 bg-[#2980b9] text-white rounded-md font-semibold"
            >
              <i className="fa-regular fa-pen-to-square mr-1"></i>
              Edit
            </Link>
            <Link
              to=""
              className="min-w-[80px] py-2 px-4 bg-[#c0392b] text-white rounded-md font-semibold"
              onClick={() =>
                window.confirm("Are you sure?") ? deleteArticle() : ""
              }>
              <i className="fa-solid fa-trash mr-1"></i>
              Delete
            </Link>
            </div>
        )}
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
      <div className="description dark:text-white">
        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
      </div>
      <hr className="border-[#767676] my-5" />
      <div className="comment">
        <div className="mb-4">
          <h1 className="text-3xl font-bold dark:text-white">Comments</h1>
        </div>

        <div className="input-box mb-4">
          <textarea
            className="w-[100%] bg-white rounded-md shadow-md min-h-[80px] outline-none border-none py-2 px-2 text-sm dark:bg-[#252525] dark:text-white"
            placeholder="Write your comment.."
          ></textarea>
          <div className="flex justify-end items-center">
            <button className="px-4 py-2 bg-[#2980b9] text-white rounded-md">
              <span className="pr-1">Send</span>
              <i
                className="fa-solid fa-paper-plane text-sm"
              ></i>
            </button>
          </div>
        </div>

        <Comments />
        <Comments />

        <Comments />
      </div>
    </div>
  );
};

export default BlogView;
