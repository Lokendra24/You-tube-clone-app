import React from 'react'
import '../Css/SearchResultCard.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { abbreviateNumber } from "js-abbreviation-number";

function SearchResultCard({data}) {

  return (
    <div className='sr_container' >
     <div className="sr_videocard_image" >
        <img src={data?.thumbnail?.[1]?.url} alt="imagess" />
        <p className="sr_video_lenght">{data?.lengthText}</p>
     </div>
      <div className="sr_rightsection">
        <h4 className="sr_title">{data?.title}</h4>
        <p className='discription_container'>{data?.description}</p>
        <div className='profile_name_subscriber_container' >
          <img src={data?.channelThumbnail?.[0]?.url} alt="imagese" className="channel_icon"/>
          <div >
           <div className="sr_name_or_badge">
             <p className="sr_channel_name">{data?.channelTitle}</p>
             <CheckCircleIcon className="verified_channel" />
           </div>
           <p className="sr_video_views" >{abbreviateNumber(data?.viewCount)}<FiberManualRecordIcon className="dott" /><span className="uploaded_time">{data?.publishedText}</span></p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResultCard