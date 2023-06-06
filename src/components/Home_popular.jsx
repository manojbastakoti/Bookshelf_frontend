
import { Link } from 'react-router-dom'
import PopularBooks from './PopularBooks'


const Home_popular = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-5 mt-5">
    <div className="popular flex justify-between items-center">

  <h1 className="text-3xl dark:text-white ">Popular Books
  </h1>
  <Link to="/popularbooks" className="text-slate-400  font-semibold pr-2 ">Show All</Link>

    </div>
  <hr className="my-4 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-2" />
  <div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-4 gap-10">
    <PopularBooks/>
    <PopularBooks/>
    <PopularBooks/>
    <PopularBooks/>
    </div>
</div>
  )
}

export default Home_popular