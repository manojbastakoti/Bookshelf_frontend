import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UserContext } from "../context/UserContext";

const BASE_URL = "http://localhost:8000/blog/add";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreateBlog = () => {
  const { profile } = useContext(UserContext);
  // console.log(profile);
  const [preview, setPreview] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const postBlog = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }
    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("introduction", input.introduction);
    formData.append("description", input.description);
    formData.append("author_id", profile ? profile.user_id : "");
    formData.append("author", profile ? profile.name : "");
    formData.append("image", input.image);

    try {
      const response = await axios({
        method: "post",
        url: BASE_URL,
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: Cookies.get("auth") ?? null,
        },
      });

      const data = response.data;
      console.log(data);

      if (!data.success) {
        setError(data.message);
        return false;
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (profile === "loading") return "";

  if (!profile) {
    navigate("/login");
  }

  return (
    <form className="pt-[50px] max-w-xl mx-auto" onSubmit={postBlog}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Create Blog
      </h1>
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="title"
        placeholder="Title"
        value={input.title}
        onChange={(e) =>
          setInput((prev) => ({
            title: e.target.value,
            introduction: prev.introduction,
            description: prev.description,
            author: prev.author,
            image: prev.image,
          }))
        }
      />
      {/* <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="author"
        placeholder="Author"
        value={input.author}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            introduction:prev.introduction,
            description: prev.description,
            author: e.target.value,
            image: prev.image,
          }))
        }
      /> */}
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="introduction"
        placeholder="Introduction"
        value={input.introduction}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            introduction: e.target.value,
            description: prev.description,
            author: prev.author,
            image: prev.image,
          }))
        }
      />
      <input
        className=" w-[100%] outline-none py-[10px] rounded-md mb-3 bg-white"
        type="file"
        name="image"
        onChange={(e) => {
          console.log();
          setInput((prev) => ({
            title: prev.title,
            introduction: prev.introduction,
            description: prev.description,
            author: prev.author,
            image: e.target.files[0],
          }));
          const objectUrl = URL.createObjectURL(e.target.files[0]);
          setPreview(objectUrl);
        }}
      />

      {preview && (
        <div className="image-preview grid items-center justify-center mb-3">
          <img className="max-h-[100px]" src={preview} alt="preview" />
        </div>
      )}
      
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={input.description}
        onChange={(value) =>
          setInput((prev) => ({
            title: prev.title,
            introduction: prev.introduction,
            description: value,
            author: prev.author,
            image: prev.image,
          }))
        }
      />

      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="mt-3 bg-[#ced6e0] w-[100%] py-[10px] px-[10px] rounded-md hover:bg-[#b0bdce] hover:font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
