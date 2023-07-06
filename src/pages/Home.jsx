import { useContext } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Home_popular from "../components/Home_popular";
import Meta from "../components/Meta";
import { UserContext } from "../context/UserContext";
// import Login from "./Login";

const Home = () => {
  const { profile,setProfile } = useContext(UserContext);
  console.log(profile)
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