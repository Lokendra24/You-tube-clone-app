import React, { useContext, useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Css/VideoCard.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { abbreviateNumber } from "js-abbreviation-number";

import { context } from "../Context/ContextApi";

function VideoCard({data}) {

  const {setMenuForVideoDetails}=useContext(context)
  // console.log(abbreviateNumber(data?.viewCount))

  return (
    <div className="videocard_container" >
      <img src={data?.thumbnail?.[1]?.url} alt="imagess" className="videocard_image" />
      <p className="video_lenght">{data?.lengthText}</p>
      <div className="videocard_lowersection">
        <img src={data?.channelThumbnail?.[0]?.url} alt="imagese" className="channel_icon"/>
        <div >
          <h4 className="videocard_title">{data?.title} </h4>
           <div className="channel_name_or_badge">
            <p className="videocard_channel_name">{data?.channelTitle}</p>
            <CheckCircleIcon className="verified_channel" />
           </div>
           <p className="video_views" >{abbreviateNumber(data?.viewCount)}<FiberManualRecordIcon className="dott" /><span className="uploaded_time">{data?.publishedText}</span></p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
