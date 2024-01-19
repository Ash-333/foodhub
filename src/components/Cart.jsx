import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ResturantMenu from "./ResturantMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch()

  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  console.log(cartItems);
  return (
    <div className="w-screen p-4 m-4">
      <h1 className="text-center text-lg font-bold">Cart Items</h1>
      <div className="mx-auto">
        <button className="bg-gray-800 p-2 rounded-md" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        {cartItems.map((item) => (
          <ResturantMenu menu={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
