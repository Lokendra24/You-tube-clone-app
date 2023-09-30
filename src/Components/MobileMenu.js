import React, { useContext } from "react";
import "../Css/MobileMenu.css";

import { categories } from "../utils/constants";
import { Divider } from "@mui/material";

import { context } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";

function MenuForMobile() {

  const navigate=useNavigate()

  const {setSelectedCategory,setMobileMenu}=useContext(context)

  const HandleClick=(element)=>{
         if(element.name==="Home")
          setSelectedCategory("New")
        else if(element.name !== "Send feedback" && element.name !== "Help" && element.name !== "Report History" && element.name !== "Settings")
          setSelectedCategory(element.name)

     navigate('/')   
     setMobileMenu(false) 
  }

  return (
    <div className="mobile_menu_leftnav_container">
      {categories.map((element, index) => (
        <div key={index}>
          <div className="icon_name_container" onClick={()=>HandleClick(element)}>
            <div className="left_nav_icon">{element.icon}</div>
            <p className="left_nav_name">{element.name}</p>
          </div>
          {element.name==="Fashion & beauty" && <Divider  className="left_nav_divider" />}
          {element.name==="Send feedback" && <Divider  className="left_nav_divider" />}
          {element.name==="Send feedback" && <p className="copyrights" >Clone by: Mr. Lokendra</p>}
        </div>
      ))}
    </div>
  );
}

export default MenuForMobile;
