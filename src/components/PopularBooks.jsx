const PopularBooks = () => {
  return (
    <div className="post grid grid-row-2 mt-5 max-w-sm bg-white dark:bg-[#252525] shadow-md rounded-md">
      <div className="top-box mb-2 md:mb-0">
        <img
          src="./assets/Book1.jpg"
          className="min-w-full h-80 md:h-96 rounded-t-md"
          alt="article"
        />
      </div>
      <div className="bottom-box p-4">
        <div className="title">
          <h1 className="text-lg font-bold dark:text-white">
            Where The CRAWDADS SING
          </h1>
        </div>
        <div className="author pt-1">
          <p className="dark:text-white pb-2">
            by<span className="text-slate-500 pl-2">Delia Owens</span>
          </p>
          <p>
            <span className="font-semibold text-slate-500">Rs.550</span>
          </p>
        </div>
        <button className="block w-[100%] mt-3 mx-auto px-3 py-3 rounded-md bg-blue-400 hover:bg-blue-500 hover:font-semibold dark:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PopularBooks;
