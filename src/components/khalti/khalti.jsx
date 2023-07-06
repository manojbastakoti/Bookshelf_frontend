import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Khalti = () => {
  const { profile } = useContext(UserContext);
console.log(profile)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const response = await axios({
        method:"post",
        url:"http://localhost:8000/khalti",
        data:{
          return_url:"https://localhost:5173/checkout",
          website_url:"https://localhost:5173",
          purchase_order_name:"test",
          purchase_order_id:"test123",
          amount:1300,
          customer_info:{
            name:profile?.name,
            email:profile?.email,
           
          }
         
        }

      });
      const { pidx, payment_url} = response.data;
      window.location.href = payment_url;
     
    } catch (error) {
      console.log(error)
      
    }

  }


  return (
    // <div className="m-11">KhaltiPayment Portal
    //     <Link to="https://test-pay.khalti.com/?pidx=McSeUHtXoy2gbV2iBaeE9i">
    //         <button className="bg-violet-900">Pay Via Khalti</button>
    //     </Link>
    // </div>


    // <div>
    // <h1>Payment Form</h1>
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label htmlFor="phone">Phone:</label>
    //     <input
    //       type="text"
    //       id="phone"
    //       value={phone}
    //       onChange={(e) => setPhone(e.target.value)}
    //       required
    //     />
    //   </div>
      <button onClick={handleSubmit} >
        Click me
      </button>
  //   </form>
  // </div>
  )
};

export default Khalti

      // <button
      //   onClick={() => checkout.show({ amount: 10000 })}
      //   style={buttonStyles}
      // >
      //   Pay Via Khalti
      // </button>



