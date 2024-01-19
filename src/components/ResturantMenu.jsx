import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResturantMenu = ({ menu }) => {
  const { name, imageId, description, price } = menu;
  const dispatch=useDispatch()

  const handleAddItems=()=>{
    dispatch(addItem({ name, imageId, description, price }))
  }
  return (
    <>
      <hr />
      <div className="flex justify-between p-4">
        <div className="details w-3/4">
          <h1 className="font-bold text-xl">{name}</h1>
          <h1>{`Rs ${price / 100}`}</h1>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
        <div >
          <button className="absolute mx-6 bg-gray-700 px-2 mt-1 rounded-md text-white hover:bg-gray-800" onClick={handleAddItems}>Add +</button>
          <img src={CDN_URL + imageId} alt="" className="h-24 w-24 rounded-md"/>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ResturantMenu;
