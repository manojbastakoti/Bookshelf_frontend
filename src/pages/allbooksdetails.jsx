import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import moment from "moment";
import { CartCountContext } from "../context/CartCountContext";

const BASE_URL = "http://localhost:8000/";

const AllBooksDetails = () => {
  const { updateCartCount } = useContext(CartCountContext);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const[cart, setCart] = useState([]);
  const [book, setBook] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [rate, setRate] = useState([]);

  const param = useParams();
  const bookId = param.id;
  console.log(bookId);
  const bookQuantity = book.quantity;
  const price =book.price;
  console.log(price)
  console.log(bookQuantity)
console.log(cart)
  console.log(bookId);
  //   const navigate = useNavigate();
  useEffect(() => {
    const getallBook = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "book/" + param.id,
        withCredentials: true,
      });
      console.log(response);
      const data = response.data.book;
      console.log(data);
      setBook(data);
      //   console.log(book);
    };

    getallBook();
  }, []);

  const addToWishlist = async () => {
    const response = await axios({
      method: "put",
      url: BASE_URL + "wishlist",
      data: {
        bookId,
      },

      withCredentials: true,
    });
    console.log(response);
    const data = response.data;
    console.log(data);
    setWishlist(data);
    setIsAddedToWishlist(true);
  };

  const addRating = async (newRating) => {
    const response = await axios({
      method: "put",
      url: BASE_URL + "rate",
      data: {
        star: newRating,
        bookId,
      },

      withCredentials: true,
    });
    console.log(response);
    const data = response.data;
    console.log(data);
    setRate(data);
    setBook((prevBook) => ({
      ...prevBook,
      totalrating: data.totalrating,
    }));
  };

  //update quantity
  const [quantity, setQuantity] = useState(1);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setIsOutOfStock(false);
    }
  };

  const increaseQuantity = () => {
    if (quantity < bookQuantity) {
      setQuantity(quantity + 1);
      setIsOutOfStock(false); // Reset out-of-stock message
    } else {
      setIsOutOfStock(true); // Display out-of-stock message
    }
  };


//addtocart

  const addToCart = async () => {
    if (quantity > bookQuantity) {
      setIsOutOfStock(true);
      return;
    }
    const response = await axios({
      method: "post",
      url: BASE_URL + "cart",
      data: {
       price,
        bookId,
        quantity
      },

      withCredentials: true,
    });
    console.log(response);
    const data = response.data;
    console.log(data);
    setCart(data);
    setIsOutOfStock(false);


    setIsAddedToCart(true);
    // console.log(cart)
    if (!cart.some((item) => item.bookId === bookId)) {
    updateCartCount((previousCount) => previousCount + 1);
  }
  };
  
  //remove product from Cart




  // addToWishlist();

  if (!book) return "";
  return (
    <>
      {console.log(book)}
      <Meta title={"Book Details"} />
      <BreadCrumb title="Book Details" />
      <div className="max-w-screen-2xl grid grid-cols-1 lg:grid-cols-12 mx-auto mt-10 dark:text-white mb-16">
        <div className="images text-center col-span-3 ">
          <img
            src={BASE_URL + book.cover}
            className="max-w-sm mx-auto"
            alt="books"
          />
          <button
            type="button"
            className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 w-[80%] mt-5"
            onClick={addToWishlist}
          >
            <i className="fa-solid fa-heart fa-lg text-red-600"></i>
            <span className="ml-1">
              {isAddedToWishlist ? (
                <Link to="/wishlist">View Wishlist</Link>
              ) : (
                "Add To Wishlist"
              )}
            </span>
          </button>
        </div>
        <div className="description p-2 col-span-7 mr-2">
          <div className="title text-3xl font-semibold m-2">{book.title}</div>
          <div className="author m-2">
            by<span className="italic pl-2 text-gray-500">{book.author}</span>
          </div>
          <div className="published m-2">
            <p>
              Year of Publication:
              {moment(book.publishedDate).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
          </div>
          <div className="isbn m-2 text-blue-500 italic">ISBN:{book.ISBN}</div>
          <div className="ratings m-2">
            <i className="fa-solid fa-star text-yellow-400">
              {book.totalrating ?? ""}
            </i>{" "}
          </div>
          <div className="sold m-2">
            Sold by:
            <span className="text-blue-500 pl-2 text-lg">BookShelf</span>
          </div>
          <hr className="border-[#767676] my-3" />
          <div className="about">
            <div dangerouslySetInnerHTML={{ __html: book.description }}></div>
          </div>
        </div>
        <div className="addtoCart flex flex-col justify-center items-center  col-span-2 bg-white dark:bg-[#252525] h-[50%] ">
          <p>Price:&nbsp; {book.price}</p>
          <div className="units flex justify-center items-center gap-6  h-10">
            <i
              className="fa-solid fa-circle-minus fa-xl text-gray-300 hover:text-gray-500 mt-1"
              onClick={decreaseQuantity}
            ></i>
            <p>Quantity: {quantity}</p>
            <i
              className="fa-solid fa-circle-plus fa-xl text-gray-300 hover:text-gray-500"
              onClick={increaseQuantity}
            ></i>
          </div>
          <button className="bg-slate-400 hover:bg-slate-500 rounded-md p-2 w-[80%] mt-3"  onClick={() => {
    if (isAddedToCart  === true) {
      navigate("/cart");
    } else {
      addToCart();
    }
  }}>
          {isAddedToCart ? (
                <Link to="/cart">View Cart</Link>
              ) : (
                "Add To Cart"
              )}
          </button>
          {isOutOfStock && <p className="text-red-500">Out of stock</p>}
        </div>
      </div>
      <div className="others max-w-screen-2xl mx-auto mb-14">
        <h1 className="text-3xl dark:text-white mx-5 font-semibold">
          Other Details
        </h1>
        <hr className="border-[#767676] my-3" />
        <div className="icons flex flex-row-1 justify-center items-center gap-5 ">
          <div className="isbn flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[130px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">ISBN</p>
            <i className="fa-solid fa-barcode fa-lg pb-2"></i>
            <p>{book.ISBN}</p>
          </div>

          <div className="language flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[120px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">Language</p>
            <i className="fa-solid fa-globe fa-lg pb-2"></i>
            <p>English</p>
          </div>
          {/* <div className="language flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[120px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">Votes</p>
            <i className="fa-solid fa-square-poll-vertical fa-lg pb-2"></i>
            <p>{book.ratings}</p>
          </div> */}
        </div>
      </div>
      <div className="review-wrapper max-w-screen-2xl mx-auto ">
        <h1 className=" text-3xl dark:text-white py-5">Rating and Reviews</h1>
        <div className="reviews max-w-lg h-32 ">
          <ReactStars
            count={10}
            size={50}
            isHalf={true}
            value={book.totalrating}
            edit={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            onChange={(newRating) => addRating(newRating)}
          />
        </div>
      </div>
    </>
  );
};

export default AllBooksDetails;
