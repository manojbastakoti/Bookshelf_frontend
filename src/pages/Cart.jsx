import React from "react";
// import Footer from "../components/Footer";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      {/* <div className="cart_field h-[550px] max-w-screen-xl mx-auto grid md:grid-cols-2 mt-10">
        <div className="my-auto description p-4">
      <h1 className=" text-4xl mb-3 font-semibold dark:text-white">Your cart is empty!</h1>
      <p className="text-slate-500">
          Looks like you haven`t added anything to your cart yet. You can find
        interesting books if you look around.
      </p>
        </div>
        <div className="empty_img flex pr-10">
            <img src="./assets/Person.png" alt="emty cart"/>
        </div>
    </div>
    <Footer/> */}

      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5 max-w-screen-2xl mx-auto px-4 md:px-0 ">
        <div className="grid grid-cols-1">
          <div>
            <div className="cart-header py-3 grid grid-cols-4 gap-0.5 border-b-2 border-gray-300 text-center">
              <h4 className="col-span-1 text-sm text-gray-700 dark:text-white ">
                Product
              </h4>
              <h4 className="col-span-1 text-sm text-gray-700 dark:text-white">
                Price
              </h4>
              <h4 className="col-span-1 text-sm text-gray-700 dark:text-white">
                Quantity
              </h4>
              <h4 className="col-span-1 text-sm text-gray-700 dark:text-white">
                Total
              </h4>
            </div>
            <div className="cart-data py-3 mb-2 grid grid-cols-4 gap-0.5 border-b-2 border-gray-300">
              <div className="col-span-1 grid gap-2.5 items-center w-40">
                <div className="w-1/4">
                  <img
                    src="./assets/Book1.jpg"
                    className="img-fluid "
                    alt="product image"
                  />
                </div>
                <div className="w-3/4">
                  <p className="text-gray-700 text-base dark:text-white">
                    WHere the Crawdada
                  </p>
                  <p className="text-gray-700 text-base dark:text-white">
                    Author:
                  </p>
                </div>
              </div>
              <div className="col-span-1 w-15 ">
                <h5 className="price text-sm text-gray-700 dark:text-white text-center">
                  Rs 400
                </h5>
              </div>
              <div className="col-span-1 flex  justify-center items-start space-x-2.5 w-15 mt-5 relative">
                <i className="fa-solid fa-circle-minus fa-xl text-gray-300 hover:text-gray-500 mt-2 "></i>
                <p className="text-gray-700">Quantity: 1</p>
                <i className="fa-solid fa-circle-plus fa-xl text-gray-300 hover:text-gray-500 mt-2"></i>
                <div>
                  <i className="fa-solid fa-trash dark:text-white absolute"></i>
                </div>
              </div>
              <div className="col-span-1 w-15">
                <h5 className="price text-sm text-gray-700 dark:text-white text-center">
                  Rs 400
                </h5>
              </div>
            </div>
          </div>
          <div className="py-2 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-baseline">
              <Link to="/popularbooks" className="button dark:text-white">
                <i class="fa-solid fa-angle-left mr-2"></i>
                Continue To Shopping
              </Link>
              <div className="flex flex-col items-end">
                <h4 className="text-base dark:text-white">SubTotal:RS 1200</h4>
                <p className="text-sm text-gray-700 dark:text-white">
                  Taxes and shipping calculated at checkout
                </p>
                <Link to="/checkout" className="button dark:text-white bg-slate-600 p-3 rounded-md">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
