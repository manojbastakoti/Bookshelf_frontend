import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8000/";

const BlogView = () => {
  const [blog, setBlog] = useState(null);
  const param = useParams();
  console.log(param);
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
      <div className="image mb-4 grid items-center justify-center">
        <img
          className="max-h-[400px]"
          src={BASE_URL + blog.image}
          alt="poster"
        />
      </div>
      <div className="description">
        <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
      </div>
    </div>
  );
};

export default BlogView;
