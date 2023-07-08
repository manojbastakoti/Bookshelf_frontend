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
import BlogView from "./pages/BlogView";
import EditBlog from "./pages/EditBlog";
import { GoogleOAuthProvider } from "@react-oauth/google";
import BooksDetails from "./pages/BooksDetails";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import AllBooks from "./pages/AllBooks";
import AddBooks from "./pages/AddBooks";
import AllBooksDetails from "./pages/allbooksdetails";
import { CartCountProvider } from "./context/CartCountContext";
import { CartProvider } from "./context/CartContext";
// import Khalti from "./components/khalti/khalti";




// import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainwrapper bg-[#F0EEED] h-screen w-screen dark:bg-[#121212]">
      <main className="max-w-screen-3xl py-4">
        {console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)}
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <UserContextProvider>
        <CartProvider>

        <CartCountProvider>

        <Routes>
          
            {/* <Route path="/payment" element={<Khalti/>} /> */}
          <Route path="/" element={<Common />}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />

            <Route path="/blogs" element={<Blog/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/popularbooks" element={<PopularBooksLanding/>} />
            <Route path="/allbooks" element={<AllBooks/>} />
            <Route path="/addbooks" element={<AddBooks/>} />

            <Route path="/allbookdetails/:id" element={<AllBooksDetails/>} />

            <Route path="/bookdetails/:id" element={<BooksDetails/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/checkout" element={<Checkout/>} />


            <Route path="/cart" element={<Cart/>} />
            <Route path="/create-blog" element={<CreateBlog/>}/>
            <Route path="/blog/:id" element={<BlogView/>} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />

          </Route>
        </Routes>
        </CartCountProvider>
        </CartProvider>
        </UserContextProvider>
        </GoogleOAuthProvider>
      </main>
    
    </div>
  );
}

export default App;
