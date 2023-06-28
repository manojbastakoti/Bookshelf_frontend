import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Home_popular from "../components/Home_popular";
import Meta from "../components/Meta";
// import Login from "./Login";

const Home = () => {
  return (
    <>
    <Meta title={"Home"} />
    <div className="min-h-screen">
      <Carousel/>
      <Home_popular/>

      <Footer/>
    </div>
    </>
    
    
  )
}

export default Home