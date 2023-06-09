import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../context/UserContext";
import { CartCountContext } from "../context/CartCountContext";

const BASE_URL = "http://localhost:8000/";

const Navbar = () => {
  const [text,setText]=useState("search")
  const { cartCount } = useContext(CartCountContext);
  const { profile, setProfile } = useContext(UserContext);
  const navigate =useNavigate()
  const [token, setToken] = useState(Cookies.get("auth") ?? null);
  const [theme, setTheme] = useState(
    localStorage.getItem("mernTheme") ?? "light"
  );

  useEffect(() => {
    // console.log(Cookies.get("auth"));
    const getUser = async () => {
      const response = await axios({
        method: "post",
        url: BASE_URL +"profile_info",
        data: {
          token: token,
        },
        withCredentials: true,
      });
      // console.log(response);
      const data = response.data;
      // console.log(data);
      if (data.success) {
        setProfile(data.data);
      } else {
        setProfile(null);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("mernTheme", theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const logOut = () => {
    Cookies.remove("auth");
    setProfile(null);
  };

  // const handleSearch=async e=>{
  //   setText(e.target.value);

  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: BASE_URL + "search",
  //       data: {
  //         type: 'text',
  //         query: e.target.value
  //       },
       
  //     });
  //     const data =response.data;
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  //   };
  
  const handleSubmit = async()=>{
    const search = text.search
    if (search?.trim()){
      navigate(`/search/${search}`);

    }
    // else{
    //   navigate("/allbooks")
    // }
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="Nav max-w-screen-2xl mx-auto bg-white shadow-md px-4 py-3 flex items-center justify-between rounded-md  dark:bg-[#252525] dark:border-1 dark:border-[#757677]">
        {/* <img className="h-[80px] mr-3" src="./assets/bookshelf.png"/> */}
        <div className="flex logo items-center gap-5  dark:text-white">
          <Link className="text-3xl font-Cherry" to="/home">
            Bookshelf
          </Link>
          <div className="hidden lg:flex justify-center items-center gap-5">
            <Link to="/allbooks">All Books</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/wishlist">Wishlist</Link>
            

          </div>
        </div>
        <div className="links hidden lg:flex justify-end gap-5 items-center  dark:text-white">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                onChange={(e)=>setText((prev)=>({
                  ...prev,
                  search:e.target.value
                }))}
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          <Link to="/cart" className="hover:font-bold transition-all relative">
        <i className="fa-solid fa-cart-shopping dark:text-white"></i>
        <span className="text-red-500 absolute -top-4 right-1">{cartCount}</span>
      </Link>
          <div className="icons dark:text-white">
            {theme === "light" ? (
              <div className="icon cursor-pointer" onClick={themeHandler}>
                <i className="fa-solid fa-moon"></i>
              </div>
            ) : (
              <div className="icon cursor-pointer" onClick={themeHandler}>
                <i className="fa-solid fa-sun"></i>
              </div>
            )}
          </div>

          {profile === "loading" && ""}

          {!profile && (
            <Link to="/login" className="hover:font-bold transition-all">
              Login
            </Link>
          )}

          {profile && profile !== "loading" && (
            <>
              <div className=" pt-2">
                <div className="dropdown inline-block relative">
                  <button className="">
                    <div className="relative w-8 h-8 overflow-hidden  rounded-full dark:bg-gray-600 ">
                      <i className="fa-solid fa-user fa-lg absolute w-10 h-10 top-3.5 -left-[4.5px]"></i>
                    </div>
                    {/* <span className="mr-1">Dropdown</span> */}
                    {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
                  </button>
                  <div className="dropdown-menu absolute z-50 hidden flex-col text-gray-700  bg-white w-40">
                    <Link
                      className="hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      View Profile
                    </Link>
                    <Link
                      className="hover:bg-slate-300 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                      onClick={() => logOut()}
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mobile-view lg:hidden flex justify-end gap-5 items-center">
          <div className="icons dark:text-white mobile-view-dark-mode">
            {theme === "light" ? (
              <div className="icon cursor-pointer" onClick={themeHandler}>
                <i className="fa-solid fa-moon fa-lg"></i>
              </div>
            ) : (
              <div className="icon cursor-pointer" onClick={themeHandler}>
                <i className="fa-solid fa-sun fa-lg"></i>
              </div>
            )}
          </div>
          <div
            className="lg:hidden flex justify-end gap-5 items-center mobile-view-hamburger-menu"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark text-2xl border-2 px-2 rounded-md dark:text-white"></i>
            ) : (
              <i className="fa-solid fa-bars text-2xl border-2 px-2 rounded-md dark:text-white"></i>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white justify-center place-items-center gap-y-5 dark:bg-[#252525] dark:text-white">
          <Link
            to="/allbooks"
            className="hover:font-bold transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            All Books
          </Link>
          <Link
            to="/blogs"
            className="hover:font-bold transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:font-bold transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Contact
          </Link>

          {!profile && (
            <Link
              to="/login"
              className="hover:font-bold transition-all"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Login
            </Link>
          )}
        </div>
      )}
      <div className="md:hidden w-full fixed bottom-0 mx-auto z-50 bg-white px-4 py-5 flex items-center justify-between dark:bg-[#252525]">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping dark:text-white"></i>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-magnifying-glass dark:text-white"></i>
        </Link>
        {profile && (
          <Link to="/">
            <i className="fa-solid fa-user dark:text-white"></i>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
