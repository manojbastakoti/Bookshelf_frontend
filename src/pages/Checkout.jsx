import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 max-w-screen-2xl mx-auto py-10">
        <div className="col-span-7">
          <div className="checkout-left-data">
            <h1 className="website-name text-2xl font-bold">BookShelf</h1>
            <nav
              style={{ "--bs-breadcrumb-divider": ">" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link className="text-dark total-price" to="/cart">
                    Cart
                  </Link>
                </li>
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Information
                </li>
                <li className="breadcrumb-item total-price active">Shipping</li>
                <li
                  className="breadcrumb-item total-price active"
                  aria-current="page"
                >
                  Payment
                </li>
              </ol>
            </nav>
            <h4 className="title total text-xl font-semibold">Contact Information</h4>
            <p className="user-details total text-gray-500">
              Manoj Bastakoti (manojbastakoti252@gmail.com)
            </p>
            <h4 className="mb-3">Shipping Address</h4>
            <form className="grid gap-4 md:gap-6 md:grid-cols-2">
              <div>
                <select
                  name=""
                  className="form-control form-select"
                  defaultValue=""
                  disabled
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Apartment, Suite ,etc"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="form-control"
                />
              </div>
              <div>
                <select
                  name=""
                  className="form-control form-select"
                  defaultValue=""
                  disabled
                >
                  <option value="" disabled>
                    Select State
                  </option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="form-control"
                />
              </div>
              <div className="col-span-2 ">
                <div className="flex justify-between items-center">
                  <Link to="/cart" className="text-dark bg-slate-400 rounded-md p-3">
                    <i class="fa-solid fa-angle-left mr-1"></i>
                    Return to Cart
                  </Link>
                  <Link to="/cart" className="button bg-slate-400 rounded-md p-3">
                    Continue to Shipping
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-5 bg-white p-2">
          <div className="border-b py-4">
            <div className="flex items-center space-x-10 mb-2">
              <div className="w-3/4 flex items-center space-x-4">
                <div className="w-1/4 relative">
                  <span className="badge bg-secondary text-white rounded-full p-2 absolute -top-3 -right-2">
                    1
                  </span>
                  <img
                    className="w-full"
                    src="./assets/Book1.jpg"
                    alt="product"
                  />
                </div>
                <div>
                  <h5 className="total-price">gfdhgf</h5>
                  <p className="total-price">s / #agfgfd</p>
                </div>
              </div>
              <div className="flex-grow">
                <h5 className="total">$ 100</h5>
              </div>
            </div>
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between items-center">
              <p className="total">Subtotal</p>
              <p className="total-price">$ 10000</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="mb-0 total">Shipping</p>
              <p className="mb-0 total-price">$ 10000</p>
            </div>
          </div>
          <div className="flex justify-between items-center border-b py-4">
            <h4 className="total">Total</h4>
            <h5 className="total-price">$ 10000</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
