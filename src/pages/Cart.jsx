import React from "react";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <>
    <div className="cart_field h-[550px] max-w-screen-xl mx-auto grid md:grid-cols-2 mt-10">
        <div className="my-auto description">
      <h1 className=" text-4xl mb-3 font-semibold dark:text-white">Your cart is empty!</h1>
      <p className="text-slate-500">
          Looks like you haven`t added anything to your cart yet. You can find
        interesting books if you look around.
      </p>
        </div>
        <div className="empty_img flex pr-10">
            <img src="./assets/Person.png" alt="emty cart"/>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
