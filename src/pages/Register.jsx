import {useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "Manoj Bastakoti",
  email: "",
  password: "",
  confirmPassword: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required!";
  }

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required!";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required!";
  }
  return errors
};

const validationSchema= Yup.object({
  name:Yup.string().required("Required!"),
  email:Yup.string().email("Invalid email address!").required("Required!"),
  password:Yup.string().required("Required!"),
  confirmPassword:Yup.string().required("Required!"),
});

const Register = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  console.log("Visited data", formik.touched);
  return (
    <form
      className="p-10 max-w-screen-sm mt-10 mx-auto bg-white  rounded-md dark:bg-[#252525] "
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
        Register An Account
      </h1>
      <div className="form-control mb-3">
        <input
          className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3 dark:bg-gray-700 dark:text-white"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm md:px-7 px-4">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-control mb-3">
        <input
          className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3 dark:bg-gray-700 dark:text-white"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm md:px-7 px-4 ">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-control mb-3">
        <input
          className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3  dark:bg-gray-700 dark:text-white"
          name="password"
          type="text"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm md:px-7 px-4">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="form-control mb-3">
        <input
          className="block w-[90%] mx-auto px-3 py-3 rounded-md outline-none mb-3  dark:bg-gray-700 dark:text-white "
          name="confirmPassword"
          type="text"
          placeholder=" Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-sm md:px-7 px-4">{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      {/* <div className="error-box">
      <p className="text-red-500 font-semibold text-sm">
        {error ? error : ""}
      </p>
    </div> */}
      <div className="grid place-items-center">
        <button
          type="submit"
          className="block w-[90%] mt-1 mx-auto px-3 py-3 rounded-md bg-blue-400 hover:bg-blue-500 hover:font-semibold "
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
