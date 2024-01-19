import React from "react";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems)
  return (
    <div className="header flex justify-between border-b border-gray-950 h-20 w-screen">
      <div className="logo h-16 w-16 mt-2 flex items-center">
        <img src={logo} alt="app-logo" />
        <h1 className="font-semibold">Food Hub</h1>
      </div>
      <div className="nav-items ">
        <ul className="flex items-center  text-md font-semibold">
            <li className="p-4 m-4 hover:cursor-pointer"><Link to="/">Home</Link></li>
            <li className="p-4 m-4 hover:cursor-pointer"><Link to='/about'>About Us</Link></li>
            <li className="p-4 m-4 hover:cursor-pointer"><Link to='contact'>Contact US</Link></li>
            <li className="p-4 m-4 hover:cursor-pointer"><Link to='/cart'>Cart ({cartItems.length}items)</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
