import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResturant from "../utils/useResturant";
import ResturantMenuCategory from "./ResturantMenuCategory";

const ResturantDetail = () => {
  const id = useParams();
  const {restarauntInfo,menu}=useResturant(id.resId)
  const categories=menu.filter(c=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  const [showIndex,setShowIndex]=useState(null)

  return (
    <>
      <div className="p-12 ">
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-xl font-bold">{restarauntInfo.name}</h1>
            <h1 className="text-gray-600 font-semibold">{restarauntInfo.cuisines}</h1>
            <h1 className="text-gray-600 font-semibold">{restarauntInfo.areaName}</h1>
          </div>
          <h1>⭐ {restarauntInfo.avgRating}</h1>
        </div>
      </div>
      <hr />
      <h1 className="text-2xl font-semibold m-9 text-center">Our menu</h1>
      <div className="px-12 mt-12">
        {
          categories.map((category,index)=>
          (
          <ResturantMenuCategory
           key={category.card.card.title}
           data={category}
           showItems={index===showIndex?true:false}
           setShowIndex={()=>setShowIndex(index)}
           />
          ))
        }
      </div>
    </>
  );
};

export default ResturantDetail;

//data.cards[0].card.card.info

//data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info

//data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
//groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards 
