import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("mernTheme") ?? "light"
  );
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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="Nav bg-white shadow-md px-4 py-3 flex items-center justify-between rounded-md  dark:bg-[#252525] dark:border-1 dark:border-[#757677]">
        {/* <img className="h-[80px] mr-3" src="./assets/bookshelf.png"/> */}
        <div className="flex logo items-center gap-5  dark:text-white">
          <Link className="text-3xl font-Cherry" to="/">
            Bookshelf
          </Link>
          <div className="hidden lg:flex justify-center items-center gap-5">
            <Link to="/" >All Books</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="links hidden lg:flex justify-end gap-5 items-center  dark:text-white">
          <form className="flex items-center">
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

          <Link to="/login" className="hover:font-bold transition-all">
            Login
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
          <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-10 h-10 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mobile-view lg:hidden flex justify-end gap-5 items-center">
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

            <div className="icons dark:text-white mobile-view-dark-mode">
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
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden flex flex-col bg-white justify-center place-items-center gap-y-5 dark:bg-[#252525] dark:text-white"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link to="/allbooks" className="hover:font-bold transition-all">All Books</Link>
          <Link to="/blogs" className="hover:font-bold transition-all">Blogs</Link>
          <Link to="/contact" className="hover:font-bold transition-all">Contact</Link>
          <Link to="/login" className="hover:font-bold transition-all">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
