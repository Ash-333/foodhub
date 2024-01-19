import React, { useEffect, useState } from 'react'
import ResturantCard,{wihtOpenStatus} from './ResturantCard'
import Shimmer from './Shimmer';
import { API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {

  const [restarauntList,setResaraunt]=useState([])
  const [filteredList,setFilteredList]=useState([])
  const [searchText,setSearchText]=useState("")
  const isOnline=useOnlineStatus()
  const ClosedResurant=wihtOpenStatus(ResturantCard)
  
  useEffect(
    ()=>{
      
      api()
      
    },[]);

    const api= async() =>{
      const data=await fetch(API_URL)
      const json=await data.json()
      const resturants=json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants

      setResaraunt(resturants)
      setFilteredList(resturants)
    }
    if(restarauntList.length===0){
      return (
        <div className='flex gap-2 flex-wrap'>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
          <Shimmer/>
        </div>
      )
    }

    if(isOnline===false){
      return <>
        <h1>Looks like you are offline</h1>
      </>
    }

  return (
    <div className='body p-4'>
        <div className="search p-4">
          <input placeholder='search'className='border px-2 mr-2 rounded' onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className='bg-blue-300 px-2 rounded' onClick={()=>{
            const list=restarauntList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            console.log(list)
            setFilteredList(list)
          }}>Search</button>
        </div>
        <div className="restaraunt flex gap-4 w-screen flex-wrap">
            {
              filteredList.map((res)=>(
                <Link key={res.info.id} to={`resutrant/${res.info.id}`}>{
                  res.info.promoted ? <ClosedResurant props={res.info}/>:<ResturantCard props={res.info}/>
                }</Link>
              ))
            }
        </div>
    </div>
  )
}

export default Body