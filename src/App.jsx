import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Blog from "./components/Blog";
import Common from "./components/Common";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import PopularBooksLanding from "./pages/PopularBooksLanding";
import Cart from "./pages/Cart";
import { UserContextProvider } from "./context/UserContext";
import CreateBlog from "./pages/CreateBlog";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainwrapper bg-[#F0EEED] h-screen w-screen dark:bg-[#121212]">
      <main className="max-w-screen-3xl mx-auto py-4">
        <UserContextProvider>

        <Routes>
          <Route path="/" element={<Common />}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />

            <Route path="/blogs" element={<Blog/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/popularbooks" element={<PopularBooksLanding/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/create-blog" element={<CreateBlog/>}/>

          </Route>
        </Routes>
        </UserContextProvider>
      </main>
    
    </div>
  );
}

export default App;
