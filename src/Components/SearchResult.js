import React, { useEffect, useState } from 'react'
import LeftNav from './LeftNav'
import SearchResultCard from './SearchResultCard'
import '../Css/SearchResult.css'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'
import { useNavigate } from "react-router-dom";

function SearchResult() {

  const navigate=useNavigate()

  const [searchData,setSearchData]=useState()
  const {query}=useParams()
   
  useEffect(()=>{
    getSearchData(query)
  },[query]) 

  const getSearchData=(query)=>{
    fetchDataFromApi(`search?query=${query}`).then(
      ({data})=>{
        setSearchData(data)
      }
    )
  }

  return (
    <div className='searchresult_container'>
       <div className='sr_leftnav_visiblity'><LeftNav /></div> 
        <div className='searchresult_right_container'>
          {
             searchData?.map((element,index)=>
             <div onClick={()=>{navigate('/videodetails',{state:element})}} key={index}> 
               <SearchResultCard data={element} />
              </div>
               )
          }
        </div>
    </div>
  )
}

export default SearchResult