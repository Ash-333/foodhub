import React from 'react'
import { CDN_URL } from '../utils/constants'

const ResturantMenu = ({props}) => {
  const {name,cuisines,avgRating,cloudinaryImageId}=props

  return (
    <div className='container bg-slate-100 w-52 h-[22rem] p-2  hover:cursor-pointer hover:scale-105 rounded-md'>
        <img className="w-full rounded-lg h-[150px] object-cover" src={`${CDN_URL}${cloudinaryImageId}`} alt=""  />
        <h1 className='text-lg font-semibold'>{name}</h1>
        <h1 className=''>{cuisines.join(", ")}</h1>
        <h1 className=''>{`${avgRating} ⭐`}</h1>
        <h1 className=''>{`${props.sla.deliveryTime} minutes 🚚`}</h1>
    </div>
  )
}

export const wihtOpenStatus=(ResturantMenu)=>{
  return (props)=>{
    return(
      <>
      <label className='absolute bg-black text-white px-1 rounded-md z-10'>Promoted</label>
      <ResturantMenu {...props}/>
      </>
    )
  }
}

export default ResturantMenu