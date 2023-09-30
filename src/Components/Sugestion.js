import React, { useContext } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../Css/Sugestion.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { abbreviateNumber } from "js-abbreviation-number";

function Sugestion({data}) {

  return (
    <div className="Sugestion_container" >
      <img src={data?.thumbnail?.[1]?.url} alt="imagess" className="sugestion_image" />
      <div className="sugestion_rightsection">
            <h4 className="sugestion_title">{data?.title} </h4>
            <p className="sugestion_channel_name">{data?.channelTitle}</p>
            <p className="sugestion_video_views" >{abbreviateNumber(data?.viewCount)}<FiberManualRecordIcon className="sugestion_dott" /><span className="sugestion_uploaded_time">{data?.publishedTimeText}</span></p>
      </div>
    </div>
  );
}

export default Sugestion;
