import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { UserContext } from "../context/UserContext";



const BASE_URL = "http://localhost:8000/";

const Wishlist = () => {
  const { profile } = useContext(UserContext);
  const [userWishList, setuserWishList] = useState([]);
  const [userPopularWishList, setuserPopularWishList] = useState([]);
  // const param = useParams();
  // const bookId = param.id;

  const navigate = useNavigate();
  useEffect(() => {
    const getWishlist = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "wishlist",
        withCredentials: true,
      });
      console.log(response);
      const data = response.data.wishlist;

      console.log(data);
      setuserWishList(data);
      const Populardata =response.data.Popularwishlist;
      console.log(Populardata);
      setuserPopularWishList(Populardata);

      // console.log(book)
    };

    getWishlist();
  }, []);


  const removeWishlist = async (_id) => {
    const response = await axios({
      method: "put",
      url: BASE_URL + "wishlist",
      data: {
        bookId:_id,
      },

      withCredentials: true,
    });
    console.log(response);
    const data = response.data;
    console.log(data);
    setuserWishList(prevWishlist => prevWishlist.filter(item => item._id !== _id));

    // setWishlist(data);
    // setIsAddedToWishlist(true);
    // window.location.reload();
  };


  const removePopularBookWishlist = async (_id) => {
    const response = await axios({
      method: "put",
      url: BASE_URL + "popularBook/wishlist",
      data: {
        bookId:_id,
      },

      withCredentials: true,
    });
    console.log(response);
    const data = response.data;
    console.log(data);
    setuserPopularWishList(prevWishlist => prevWishlist.filter(item => item._id !== _id));
  };

  if (profile === "loading") return "";

  if (!profile) {
    navigate("/login");
  }

  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      {console.log(userWishList)}

      {userWishList.length === 0 && userPopularWishList.length === 0 && (

<div className="cart_field h-[550px] max-w-screen-xl mx-auto grid md:grid-cols-2 mt-10">
<div className="my-auto description p-4">
<h1 className=" text-4xl mb-3 font-semibold dark:text-white">Your WishList is empty!</h1>
<p className="text-slate-500">
  Looks like you haven`t added anything to your cart yet. You can find
interesting books if you look around.
</p>
</div>
<div className="empty_img flex pr-10">
    <img src="./assets/Person.png" alt="empty cart"/>
</div>
</div>
)}
      <div className="wishlist-wrapper home-wrapper-2 py-2 max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {userWishList?.map((item, index) => {
            const { _id,author, cover, price, title } = item;
            return (
              <div className="wishlist-card relative shadow-md" key={index}>
                <div className="icon bg-white ">
                  <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 " onClick={()=>removeWishlist(_id)}></i>
                </div>
                <div className="wishlist-card-image flex justify-center items-center bg-white">
                  <img
                    src={`${BASE_URL}${cover}`}
                    className="object-scale-down w-60  h-60 mt-6"
                    alt="book"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title font-semibold">{title}</h5>
                  <h6 className="price">Rs:{price}</h6>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {userPopularWishList?.map((item, index) => {
            const { _id,Author, Image, price, Title } = item;
            return (
              <div className="wishlist-card relative shadow-md" key={index}>
                <div className="icon bg-white ">
                  <i className="fa-solid fa-xmark fa-lg absolute right-1 top-2 " onClick={()=>removePopularBookWishlist(_id)}></i>
                </div>
                <div className="wishlist-card-image flex justify-center items-center bg-white">
                  <img
                    src={Image}
                    className="object-scale-down w-60  h-60 mt-6"
                    alt="book"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title font-semibold">{Title}</h5>
                  <h6 className="price">Rs:550</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
