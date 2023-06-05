// import {useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:8000/user";
const Login = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!");
        return false;
      }
    }
    try {
      const response = await axios({
        method: "post",
        url: BASE_URL + "/login",
        data: input,
        withCredentials:true,
      });
      // actions.setSubmitting(false);
      console.log(response);
      const data = response.data;
      if (!data.success) {
        setError(data.message);
        return false;
      }

      // actions.resetForm();
      navigate("/blogs");
      
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <form className="p-10 max-w-screen-sm mt-10 mx-auto bg-white  rounded-md dark:bg-[#252525] " onSubmit={loginUser}>
      <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
        Login
      </h1>
      <input
        className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3 dark:bg-gray-700 dark:text-white"
        name="email"
        type="text"
        placeholder="Email"
        value={input.email}
        onChange={(e) =>
          setInput((prev) => ({
            email: e.target.value,
            password: prev.password,
          }))
        }
      />
      <input
        className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3 dark:bg-gray-700 dark:text-white"
        name="password"
        type="text"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>
          setInput((prev) => ({
            email: prev.email,
            password:e.target.value,
          }))
        }
      />
      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm md:px-7 px-4">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="block w-[90%] mt-1 mx-auto px-3 py-3 rounded-md bg-blue-400 hover:bg-blue-500 hover:font-semibold dark:text-white"
        >
          Login
        </button>
        <p className=" dark:text-white mt-3 mb-3">
          New Here?{" "}
          <Link to="/register">
            <span className="text-blue-600">Register</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login