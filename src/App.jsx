import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Common from "./components/Common";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainwrapper bg-[#F0EEED] min-h-screen overflow-y-hidden w-screen dark:bg-[#121212]">
      <main className="max-w-screen-3xl mx-auto py-4">
        <Routes>
          <Route path="/" element={<Common />}>
            <Route index element={<Home/>} />
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Route>
        </Routes>
      </main>
    
    </div>
  );
}

export default App;
