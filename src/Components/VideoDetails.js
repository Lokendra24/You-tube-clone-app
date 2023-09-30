import React, { useContext, useEffect, useState } from "react";
import "../Css/VideoDetails.css";
import ReactPlayer from "react-player";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { abbreviateNumber } from "js-abbreviation-number";

import Sugestion from "./Sugestion";
import { useLocation } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

import { context } from "../Context/ContextApi";

import { useNavigate } from "react-router-dom";


function VideoDetails() {

  const navigate=useNavigate()

  const location = useLocation()
  // console.log(location.state)
  const data=location.state

  const {loading,setLoading}=useContext(context) 

  const [sugestedVideo,setSugestedVideo]=useState()

  useEffect(()=>{
    getSugestedData(data.videoId)
  },[data.videoId])

  const getSugestedData=(id)=>{
    setLoading(true)
    fetchDataFromApi(`related?id=${id}`).then(
      ({data})=>{
        setSugestedVideo(data)
        setLoading(false)
      }
    )
  }

  return (
    <div className="videodetails_container">
      <div className="vd_left">
        <div className="react_player">
         <ReactPlayer
          url={`https://www.youtube.com/watch?v=${data.videoId}`}
          controls
          width="100%"
          height="100%"
          style={{ backgroundColor: "#000000" }}
          playing={true}
          className="react_player"
         />
        </div>
        <h4 className="vd_title">{data?.title}</h4>
        <div className="vd_details">
          <div className="vd_details_leftdiv">
            <img src={data?.channelThumbnail?.[0]?.url} alt="imagese" />
            <div className="vd_chanel_name_subscriber">
              <span className="vd_chanel_name_verified">
                <p>{data?.channelTitle}</p>
                <CheckCircleIcon className="vd_verified_icon" />
              </span>
              <span className="vd_chanel_subscriber">{abbreviateNumber(data?.viewCount)} Subscriber</span>
            </div>
          </div>
          <div className="vd_details_rightdiv">
            <span className="like_container">
              <ThumbUpIcon className="vd_like" />
              <p>{abbreviateNumber(data?.viewCount,0)} Likes</p>
            </span>
            <p>{abbreviateNumber(data?.viewCount)} Views</p>
          </div>
        </div>
      </div>
      <div className="vd_right">
        {
          sugestedVideo?.map((element,index)=> 
          <div onClick={()=>{navigate('/videodetails',{state:element})}} key={index}>
            <Sugestion data={element} key={index} />
          </div>
            )
        }
      </div>
    </div>
  );
}

export default VideoDetails;
