import React, { useState } from "react";
import ResturantMenu from "./ResturantMenu";

const ResturantMenuCategory = ({ data,showItems,setShowIndex }) => {
  const menu=data.card.card.itemCards
  const [showMenu,setShowMenu]=useState(false)
  const handleClick=()=>{
    setShowIndex()
  }
  return (
    <>
      <div>
        <div className="w-3/4 mx-auto my-4 rounded-md font-semibold  items-center shadow-lg p-6 text-lg bg-gray-100 " >
          <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
          <span>{data.card.card.title}</span>
          <span>🔽</span>
          </div>
          {
            showItems && menu.map((item)=>(

              <ResturantMenu key={item.card.id} menu={item.card.info}/>
            ))
          }
        </div>
  
      </div>
    </>
  );
};

export default ResturantMenuCategory;
