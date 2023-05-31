import {useFormik } from 'formik';

const Login = () => {
  const formik =useFormik({
    initialValues:{
      email:"",
      password:"",
    }
  })
  console.log('Form values',formik.values)
  return (
    <form className="p-10 max-w-screen-sm mt-10 mx-auto bg-white  rounded-md ">
    <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
      Login
    </h1>
    <input
      className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3"
      name="email"
      type="text"
      placeholder="Email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
    <input
      className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3"
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
        className="block w-[90%] mt-3 mx-auto px-3 py-3 rounded-md bg-[#99a7bd] hover:bg-[#5ea4f3] hover:font-semibold"
      >
        Login
      </button>
    </div>
  </form>
  )
}

export default Login