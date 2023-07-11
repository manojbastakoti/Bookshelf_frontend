import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { CartCountContext } from "../context/CartCountContext";

const BASE_URL = "http://localhost:8000/";

const BooksDetails = () => {
  const { updateCartCount } = useContext(CartCountContext);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const[cart, setCart] = useState([]);
  const [book, setBook] = useState(null);


  const param = useParams();
  const bookId = param.id;
  console.log(bookId)

//   const bookQuantity = book.quantity;
//   const price =book.price;
//   console.log(price)
//   console.log(bookQuantity)
// console.log(cart)

//   const navigate = useNavigate();
  useEffect(() => {
    const getPopularBook = async () => {
      const response = await axios({
        method: "get",
        url: BASE_URL + "popularBook/" + param.id,
        withCredentials: true,
      });
      console.log(response);
      const data = response.data.data;
      console.log(data);
      setBook(data);
    };
    getPopularBook();
  }, []);

  const addPopularBookToWishlist = async () => {
    const response = await axios({
      method: "put",
      url: BASE_URL + "popularBook/wishlist",
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

  // //update quantity
  // const [quantity, setQuantity] = useState(1);
  // const [isOutOfStock, setIsOutOfStock] = useState(false);

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //     setIsOutOfStock(false);
  //   }
  // };

  // const increaseQuantity = () => {
  //   if (quantity < bookQuantity) {
  //     setQuantity(quantity + 1);
  //     setIsOutOfStock(false); // Reset out-of-stock message
  //   } else {
  //     setIsOutOfStock(true); // Display out-of-stock message
  //   }
  // };

//addtocart
  
// const addToCart = async () => {
//   if (quantity > bookQuantity) {
//     setIsOutOfStock(true);
//     return;
//   }
//   const response = await axios({
//     method: "post",
//     url: BASE_URL + "cart",
//     data: {
//      price,
//       bookId,
//       quantity
//     },

//     withCredentials: true,
//   });
//   console.log(response);
//   const data = response.data;
//   console.log(data);
//   setCart(data);
//   setIsOutOfStock(false);


//   setIsAddedToCart(true);
//   // console.log(cart)
//   if (!cart.some((item) => item.bookId === bookId)) {
//   updateCartCount((previousCount) => previousCount + 1);
// }
// };



  if (!book) return "";
  return (
    <>
     <Meta title={"Book Details"} />
     <BreadCrumb title="Book Details" />
      <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-12 mx-auto mt-10 dark:text-white mb-16">
        <div className="images text-center col-span-3 ">
          <img src={book.Image} className="max-w-sm mx-auto" alt="books" />
          <button
            type="button"
            className="bg-slate-400 hover:bg-slate-500 rounded-md p-3 w-[80%] mt-5"
            onClick={() => {
              if (isAddedToWishlist  === true) {
                navigate("/wishlist");
              } else {
                addPopularBookToWishlist();
              }
            }}>
                    {/* {isAddedToWishlist ? (
                          <Link to="/wishlist">View Wishlist</Link>
                        ) : (
                          "Add To Wishlist"
                        )}
          > */}
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
          <div className="title text-3xl font-semibold m-2">{book.Title}</div>
          <div className="author m-2">
            by<span className="italic pl-2 text-gray-500">{book.Author}</span>
          </div>
          <div className="published m-2">
            <p>Year of Publication:{book.year}</p>
          </div>
          <div className="isbn m-2 text-blue-500 italic">ISBN:{book.ISBN}</div>
          <div className="ratings m-2">
            <i className="fa-solid fa-star text-yellow-400">{book.avgrating}</i>{" "}
          </div>
          <div className="sold m-2">
            Sold by:
            <span className="text-blue-500 pl-2 text-lg">BookShelf</span>
          </div>
          <hr className="border-[#767676] my-3" />
          <div className="about">
            <p>
              Harry Potter is a series of seven fantasy novels written by
              British author J. K. Rowling. The novels chronicle the lives of a
              young wizard, Harry Potter, and his friends Hermione Granger and
              Ron Weasley, all of whom are students at Hogwarts School of
              Witchcraft and Wizardry. The main story arc concerns Harry's
              conflict with Lord Voldemort, a dark wizard who intends to become
              immortal, overthrow the wizard governing body known as the
              Ministry of Magic and subjugate all wizards and Muggles
              (non-magical people). The series was originally published in
              English by Bloomsbury in the United Kingdom and Scholastic Press
              in the United States. All versions around the world are printed by
              Grafica Veneta in Italy.[1] A series of many genres, including
              fantasy, drama, coming-of-age fiction, and the British school
              story (which includes elements of mystery, thriller, adventure,
              horror, and romance), the world of Harry Potter explores numerous
              themes and includes many cultural meanings and references.[2]
              According to Rowling, the main theme is death.[3] Other major
              themes in the series include prejudice, corruption, and
              madness.[4]
            </p>
          </div>
        </div>
        <div className="addtoCart flex flex-col justify-center items-center  col-span-2 bg-white dark:bg-[#252525] h-[50%] ">
          <p>Price:</p>
          <div className="units flex justify-center items-center gap-6  h-10">
            <i className="fa-solid fa-circle-minus fa-xl text-gray-300 hover:text-gray-500 mt-1 "></i>
            <p>Quantity:1</p>
            <i className="fa-solid fa-circle-plus fa-xl text-gray-300 hover:text-gray-500"></i>
          </div>
          <button className="bg-slate-400 hover:bg-slate-500 rounded-md p-2 w-[80%] mt-3">
            Add To Cart
          </button>
        </div>
      </div>
      <div className="others max-w-screen-2xl mx-auto mb-14">
        <h1 className="text-3xl dark:text-white mx-5 font-semibold">Other Details</h1>
        <hr className="border-[#767676] my-3" />
        <div className="icons flex flex-row-1 justify-center items-center gap-5 ">
          <div className="isbn flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[130px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">ISBN</p>
            <i className="fa-solid fa-barcode fa-lg pb-2"></i>
            <p>{book.ISBN}</p>
          </div>

          <div className="language flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[120px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">Language</p>
            <i className="fa-solid fa-globe fa-lg pb-2" ></i>
            <p>English</p>
          </div>
          <div className="language flex flex-col justify-center items-center bg-white dark:bg-[#252525] w-[120px] p-4 rounded-md dark:text-white">
            <p className="text-gray-500 pb-3">Votes</p>
            <i className="fa-solid fa-square-poll-vertical fa-lg pb-2"></i>
            <p>{book.ratings}</p>
          </div>
        </div>
      </div>
      <div className="review-wrapper max-w-screen-2xl mx-auto ">

      <h1 className=" text-3xl dark:text-white py-5">Rating and Reviews</h1>
      <div className="reviews max-w-lg h-32 ">
      <ReactStars
    count={10}
    size={50}
    isHalf={true}
    value="8"
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
      </div>
      </div>
    </>
  );
};

export default BooksDetails;
