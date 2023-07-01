
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Common = () => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
        <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>
    </main>
  )
}

export default Common