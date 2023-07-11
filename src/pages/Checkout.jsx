import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import * as Yup from "yup";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const Checkout = () => {
  const [totalAmount,setTotalAmount] =useState([null]) 
  const { profile } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const [shippingInfo, setshippingInfo]=useState(null)
  const [cartProductState, setCartProductState]=useState(null)
  const navigate = useNavigate();

  console.log(cart);
  // const quantity =cart[0].quantity;
  // console.log(quantity)
  // console.log(profile);
  // const [input, setInput] = useState({
  //   firstname: "",
  //   lastname: "",
  //   address:"",
  //   city:"",
  //   state:"",

  // });
  const initialValues = {
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    country: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is Required!"),
    lastname: Yup.string().required(" Lastname is Required!"),
    address: Yup.string().required("Address is Required!"),
    city: Yup.string().required("City is Required!"),
    state: Yup.string().required("State is Required!"),
    country: Yup.string().required("Country is Required!"),
  });

useEffect(() => {
  let items=[]
  for (let index = 0; index < cart.length; index++) {
   items.push({book:cart[index].bookId._id,quantity:cart[index].quantity,price:cart[index].price})
    // console.log(items)
  }
  setCartProductState(items)
}, [])

  const onSubmit = async(values) => {
    // Handle form submission
// alert(JSON.stringify(values));
setshippingInfo(values);
console.log(shippingInfo)
  // const createOrder = async () => {
    const response = await axios({
      method: "post",
      url: BASE_URL + "create-order",
      data:{
        shippingInfo:shippingInfo,
        totalPrice:totalAmount,
        orderItems:cartProductState,

      },
      withCredentials: true,
    });
    console.log(response)
    const data = response.data;
    console.log(data);


    try {
      const response = await axios({
        method:"post",
        url:"http://localhost:8000/khalti",
        data:{
          return_url:"http://localhost:5173/khalti/confirm",
          website_url:"http://localhost:5173",
          purchase_order_name:"test",
          purchase_order_id:"test123",
          amount:totalAmount,
          customer_info:{
            name:profile?.name,
            email:profile?.email,
           
          }
         
        }

      });
      const { pidx, payment_url} = response.data;
      window.location.href = payment_url;
      // window.location.href = pidx;

      
    } catch (error) {
      console.log(error)
      
    }
  // };
  // createOrder();
    console.log(values);
    // navigate("/payment")
  };


  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });


  useEffect(() => {
    let sum=0;
    for (let index = 0; index < cart?.length; index++) {
      sum =sum + (Number(cart[index].quantity)*cart[index].price)
      setTotalAmount(sum);
      // console.log(totalAmount)
      
    }
  setCart(cart);
  // console.log(cart)
  }, [cart])


  return (
    <>
    {console.log(cart)}
      <div className="grid grid-cols-12 gap-6 max-w-screen-2xl mx-auto py-10 ">
        <div className="col-span-6">
          <div className="checkout-left-data ">
            <h1 className="website-name text-2xl font-bold dark:text-white">
              BookShelf
            </h1>
            <nav className="text-gray-500" aria-label="breadcrumb">
              <ol className="flex items-center space-x-2 list-none ">
                <li className="inline-flex items-center">
                  <Link
                    to="/cart"
                    className="text-gray-700 total-price dark:text-white"
                  >
                    Cart
                  </Link>
                </li>
                <li className="inline-flex items-center">
                  <span className="text-gray-400">{">"}</span>
                  <span className="text-gray-700 total-price dark:text-white">
                    Information
                  </span>
                </li>
                <li className="inline-flex items-center">
                  <span className="text-gray-400">{">"}</span>
                  <span className="text-gray-700 total-price dark:text-white">
                    Shipping
                  </span>
                </li>
                <li className="inline-flex items-center">
                  <span className="text-gray-400">{">"}</span>
                  <span className="text-gray-700 total-price dark:text-white">
                    Payment
                  </span>
                </li>
              </ol>
            </nav>
            <h4 className="title total text-xl font-semibold mt-4 dark:text-white">
              Contact Information
            </h4>
            <p className="user-details total text-gray-500 dark:text-white">
              {profile?.name} ({profile?.email})
            </p>
            <h4 className="mb-3 dark:text-white mt-4">Shipping Address</h4>
            <form
              className="grid gap-4 md:gap-6 md:grid-cols-2 "
              onSubmit={formik.handleSubmit}
            >
              <div>
                <select
                  name="country"
                  className="form-control form-select rounded-md "
                  value={formik.values.country}
                  onChange={formik.handleChange("country")}
                  onBlur={formik.handleBlur("country")}
                >
                  <option value=""  disabled>
                    Select Country
                  </option>
                  <option value="Nepal">Nepal</option>
                </select>
                <div className="error">
                  {formik.touched.country && formik.errors.country ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.country}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control rounded-md"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control rounded-md"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control rounded-md"
                  value={formik.values.address}
                  onChange={formik.handleChange("address")}
                  onBlur={formik.handleBlur("address")}
                />
                <div className="error">
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.address}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="form-control rounded-md"
                  value={formik.values.city}
                  onChange={formik.handleChange("city")}
                  onBlur={formik.handleBlur("city")}
                />
                <div className="error">
                  {formik.touched.city && formik.errors.city ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.city}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <select
                  name="state"
                  className="form-control form-select rounded-md"
                  value={formik.values.state}
                  onChange={formik.handleChange("state")}
                  onBlur={formik.handleBlur("state")}
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Bagmati">Bagmati</option>{" "}
                  <option value="Gandaki">Gandaki</option>
                </select>
                <div className="error">
                  {formik.touched.state && formik.errors.state ? (
                    <div className="text-red-500 text-sm  ">
                      {formik.errors.state}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* <div>
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="form-control rounded-md"
                />
              </div> */}
              <div className="col-span-2 ">
                <div className="flex justify-between items-center">
                  <Link
                    to="/cart"
                    className="text-dark bg-slate-400 rounded-md p-3"
                  >
                    <i class="fa-solid fa-angle-left mr-1"></i>
                    Return to Cart
                  </Link>
                  {/* <Link
                    to="/cart"
                    className="button bg-slate-400 rounded-md p-3"
                  >
                    Continue to Payment
                  </Link> */}
                  <button
                    className="button  bg-slate-400 rounded-md p-3"
                    type="submit"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* cart-items */}
        <div className="col-span-6">
        {cart?.map((item) => (
          <div className="col-span-5  p-2 " key={item._id}>
            <div className="border-b border-gray-400 py-4">
              <div className="flex items-center space-x-10 mb-2">
                <div className="w-3/4 flex items-center space-x-4">
                  <div className="w-1/4 relative">
                    <span className="bg-gray-500 text-white rounded-full p-2 absolute -top-3 -right-2 dark:text-white">
                      {item.quantity}
                    </span>
                    <img
                      className="w-full"
                      src={`${BASE_URL}${item.bookId.cover}`}
                      alt="product"
                    />
                  </div>
                  <div>
                  <h5 className="total-price dark:text-white">Price:{item.price}</h5>
                  
                </div>
                </div>
                <div className="flex-grow">
                  <h5 className="total dark:text-white">Subtotal:{item.price * item.quantity}</h5>
                </div>
              </div>
            </div>
            {/* <div className="border-b border-gray-400 py-4">
              <div className="flex justify-between items-center">
                <p className="total dark:text-white">Subtotal</p>
                <p className="total-price dark:text-white">
                  {" "}
                  
                </p>
              </div> */}
              {/* <div className="flex justify-between items-center">
              <p className="mb-0 total dark:text-white">Shipping</p>
              <p className="mb-0 total-price dark:text-white">Rs 10000</p>
            </div> */}
            {/* </div> */}
            {/* <div className="flex justify-between items-center border-b py-4">
              <h4 className="total dark:text-white">Total</h4>
              <h5 className="total-price dark:text-white">Rs 10000</h5>
            </div> */}
          </div>
        ))}

        <div className="flex flex-col items-end mr-10">
                <h1 className="text-xl font-bold dark:text-white ">Total:Rs{totalAmount}</h1>
                </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
