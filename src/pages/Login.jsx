import {useFormik } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  const formik =useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    onSubmit:values=>{
        console.log("form data",values);
    },
  })
  // console.log('Form values',formik.values)
  return (
    <form className="p-10 max-w-screen-sm mt-10 mx-auto bg-white  rounded-md dark:bg-[#252525] "onSubmit={formik.handleSubmit}>
    <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
      Login
    </h1>
    <input
      className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3 dark:bg-gray-700"
      name="email"
      type="text"
      placeholder="Email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <input
      className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3  dark:bg-gray-700 "
      name="password"
      type="text"
      placeholder="Password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
    {/* <div className="error-box">
      <p className="text-red-500 font-semibold text-sm">
        {error ? error : ""}
      </p>
    </div> */}
    <div className="grid place-items-center">
      <button
        type="submit"
        className="block w-[90%] mt-3 mx-auto px-3 py-3 rounded-md bg-blue-400 hover:bg-blue-500 hover:font-semibold "
      >
        Login
      </button>
    </div>
    <p className="text-md grid place-items-center mt-2">
          New Here?{" "}
          <Link to="/register">
            <span className="text-blue-600">Register</span>
          </Link>
        </p>
  </form>
  )
}

export default Login