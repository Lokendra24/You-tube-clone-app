import React, { useContext, useState } from 'react'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
import '../Css/Feed.css'

import { useNavigate } from "react-router-dom";

import {context} from '../Context/ContextApi'

function Feed() {

  const navigate=useNavigate()

  const {searchResult, loading}=useContext(context)

  return (
    <div className='feed_container'>
      <LeftNav />
      <div className='videos_container'>
        {
          !loading && searchResult?.map((element,index)=> 
            <div onClick={()=>{navigate('/videodetails',{state:element})}} key={index}> 
              <VideoCard data={element} />
            </div>  
              )
        }
      </div>
    </div>
  )
}

export default Feed