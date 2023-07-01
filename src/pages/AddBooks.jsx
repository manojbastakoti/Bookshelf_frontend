import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import "react-quill/dist/quill.snow.css";
import { UserContext } from '../context/UserContext';

const BASE_URL = "http://localhost:8000/book/add";

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
    ["link", "cover"],
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
  "cover",
];


const AddBooks = () => {
  const { profile } = useContext(UserContext);
  const [preview, setPreview] = useState(null);
  const [input, setInput] = useState({
    title: "",
    price:"",
    quantity:"",
    cover:"",
    description: "",
    author:"",
    publishedDate:"",
    genre:"",
    ISBN:"",

  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const addBook = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required !");
        return false;
      }
    }

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("price", input.price);
    formData.append("quantity", input.quantity);
    formData.append("description", input.description);
    formData.append("author", input.author);
    formData.append("publishedDate", input.publishedDate);
    formData.append("genre", input.genre);
    formData.append("ISBN", input.ISBN);

    formData.append("cover", input.cover);

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

      navigate("/allbooks");
    } catch (error) {
      console.log(error);
    }
  };

  if (profile === "loading") return "";

  if (!profile) {
    navigate("/login");
  }

  return (
    <form className="pt-[50px] max-w-xl mx-auto" onSubmit={addBook}>
      <h1 className="text-3xl font-bold text-center mb-[20px] dark:text-white">
        Add Book
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
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author: prev.author,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />
      
      {/* author */}
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="author"
        placeholder="Author"
        value={input.author}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author: e.target.value,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />

      {/* price */}
        <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="price"
        placeholder="Price"
        value={input.price}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:e.target.value,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author:prev.author ,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />
        <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={input.quantity}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            quantity:e.target.value,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author:prev.author ,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />
        <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="publishedDate"
        placeholder="PublishedDate"
        value={input.publishedDate}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            publishedDate:e.target.value,
            description: prev.description,
            author:prev.author,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />
        <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="genre"
        placeholder="Genre"
        value={input.genre}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author: prev.author,
            genre:e.target.value,
            ISBN:prev.ISBN,
            cover: prev.cover,
          }))
        }
      />
      <input
        className="block w-[100%] outline-none py-[10px] px-[10px] rounded-md mb-3"
        type="text"
        name="ISBN"
        placeholder="ISBN"
        value={input.ISBN}
        onChange={(e) =>
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author:  prev.author,
            genre:prev.genre,
            ISBN:e.target.value,
            cover: prev.cover,
          }))
        }
      />
      <input
        className=" w-[100%] outline-none py-[10px] rounded-md mb-3 bg-white"
        type="file"
        name="cover"
        onChange={(e) => {
          console.log();
          setInput((prev) => ({
            title: prev.title,
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: prev.description,
            author: prev.author,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: e.target.files[0],
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
            price:prev.price,
            publishedDate:prev.publishedDate,
            description: value,
            author: prev.author,
            genre:prev.genre,
            ISBN:prev.ISBN,
            cover: prev.cover,
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

export default AddBooks;

