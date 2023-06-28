import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-2 max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <div className="wishlist-card relative shadow-md">
              <div className="icon bg-white ">
                <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 "></i>
              </div>
              <div className="wishlist-card-image flex justify-center items-center bg-white">
                <img
                  src="./assets/Book1.jpg"
                  className="object-scale-down w-60  h-60 mt-6"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title font-semibold">Where The CrawDad Sings</h5>
                <h6 className="price">Rs:450</h6>
              </div>
            </div>
          </div>
          <div>
          <div className="wishlist-card relative shadow-md">
              <div className="icon bg-white ">
                <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 "></i>
              </div>
              <div className="wishlist-card-image flex justify-center items-center bg-white">
                <img
                  src="./assets/Book1.jpg"
                  className="object-scale-down w-60  h-60 mt-6"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title font-semibold">Where The CrawDad Sings</h5>
                <h6 className="price">Rs:450</h6>
              </div>
            </div>
          </div>
          <div>
          <div className="wishlist-card relative shadow-md">
              <div className="icon bg-white ">
                <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 "></i>
              </div>
              <div className="wishlist-card-image flex justify-center items-center bg-white">
                <img
                  src="./assets/Book1.jpg"
                  className="object-scale-down w-60  h-60 mt-6"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title font-semibold">Where The CrawDad Sings</h5>
                <h6 className="price">Rs:450</h6>
              </div>
            </div>
            
          </div>
          <div className="wishlist-card relative shadow-md">
              <div className="icon bg-white ">
                <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 "></i>
              </div>
              <div className="wishlist-card-image flex justify-center items-center bg-white">
                <img
                  src="./assets/Book1.jpg"
                  className="object-scale-down w-60  h-60 mt-6"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title font-semibold">Where The CrawDad Sings</h5>
                <h6 className="price">Rs:450</h6>
              </div>
            </div>
            <div className="wishlist-card relative shadow-md">
              <div className="icon bg-white ">
                <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 "></i>
              </div>
              <div className="wishlist-card-image flex justify-center items-center bg-white">
                <img
                  src="./assets/Book1.jpg"
                  className="object-scale-down w-60  h-60 mt-6"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title font-semibold">Where The CrawDad Sings</h5>
                <h6 className="price">Rs:450</h6>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
