// const BASE_URL = "http://localhost:8000/popularBooks";

import { Link } from "react-router-dom";


const PopularBooks = ({_id,Title,Image,Author,}) => {
  return (
    <div className="post grid grid-row-2 mt-5 max-w-sm shadow-lg rounded-md">
      <div className="top-box mb-2">
        <Link to={`/bookdetails/${_id}`}>
        <img
          src={Image}
          className="min-w-fit mx-auto sm:min-w-full h-44 md:h-80 sm:rounded-t-md mb-2"
          alt="article"
          />
          </Link>
      </div>
      <div className="bottom-box sm:p-2 -mt-2">
        <div className="title min-w-fit pl-4 pr-3.5 md:h-[85px] h-[180px] sm:p-1">
          <h1 className="sm:text-lg sm:font-bold dark:text-white">
            {/* {truncateText(Title,40)} */}
            {Title}
          </h1>
        </div>
        <div className="author sm:p-1 pl-4 pr-4">
          <p className="dark:text-white pb-2">
            by<span className="text-slate-500 pl-1">{Author}</span>
          </p>
          <p>
            <span className="sm:font-semibold text-slate-500">Rs.550</span>
          </p>
        </div>
        <button className="block w-[90%] sm:w-[100%] mt-2 mx-auto sm:px-2 py-2 rounded-md bg-blue-400 hover:bg-blue-500 dark:text-white text-[11px] sm:text-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default PopularBooks;
