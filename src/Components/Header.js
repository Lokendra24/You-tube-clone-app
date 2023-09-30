import React, { useContext, useEffect, useState } from 'react'
import '../Css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import MenuForMobile from './MobileMenu'

import { context } from '../Context/ContextApi';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate=useNavigate()

  const {mobileMenu,setMobileMenu}=useContext(context)

  const [SearchIconn,setSearchIcon]=useState(false)


  const HandleCancleIcone=()=>{
      if(mobileMenu)
       setMobileMenu(false)
      else
       setMobileMenu(true)
  }

  const HandleChange=(event)=>{
       let searchValue=event.target.value
       if(event.key==="Enter")
        {
          console.log(searchValue)
          navigate(`/SearchResult/${searchValue}`)
        }
  }

 useEffect(()=>{
  document.getElementById('0').addEventListener('click', function(e) {
    if (e.target.id !== '2')
      setSearchIcon(false)
  });
 }) 

//  console.log(mobileMenu)

  return (
    <div className='header_main_container'>
    <div className='header_container' id='0' >
       { !mobileMenu && <div onClick={HandleCancleIcone} className='menu_icon'><MenuIcon /></div>}
       {/* { menuForVideoDetails && <div onClick={HandleCancleIcone} className='menu_icon_for_videodetails'><MenuIcon /></div>} */}
       {mobileMenu && <div onClick={HandleCancleIcone}><CancelIcon className='close_icon' /></div>}
      <div  id='1' className='logo_style' onClick={()=>navigate('/')} />
      <div className='middle_section' id='2'>
        {SearchIconn && <span className={SearchIconn && "searchicon_before_click"}><SearchIcon /></span> }
        <input type='text' placeholder='Search' onKeyUp={HandleChange} onClick={()=>setSearchIcon(true)} className={!SearchIconn ? "input_css_before_click": "input_css_on_click"}/>
        <button><SearchIcon /></button>
      </div>
      <div className='right_section' id='3' >
        <VideoCallIcon className='video_icon' />
        <NotificationsNoneIcon  className='bell_icon'/>
        <img src={require('../images/empty-cart.jpg')} alt='imagess' />
      </div>
    </div>
      {mobileMenu && <div className='mobile_menu'><MenuForMobile /> </div>}
    </div>
  )
}

export default Header