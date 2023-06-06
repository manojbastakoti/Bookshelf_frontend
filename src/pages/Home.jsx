import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Home_popular from "../components/Home_popular";
// import Login from "./Login";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Carousel/>
      <Home_popular/>

      <Footer/>
    </div>
    
    
  )
}

export default Home