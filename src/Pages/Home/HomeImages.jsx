import React from 'react'
import {TbDownload} from 'react-icons/tb'


const HomeImages = (e) => {
  const {urls , user , links} = e.data
  console.log(e);
  return (
    <>
    <img src={urls.small} />
    <div className='user-image'>
      <img src={user.profile_image.small} style={{marginRight :'5px' , borderRadius :'100px' , paddingBottom :'5px'}}/>
      <p style={{color : "white"}}>{user.name}</p>
      <a href={links.download} target='_blank' style={{color :'white' , position :'absolute' , right : '10px' , fontSize :"15px"}}><TbDownload /></a> 
    </div>
    </>
  )
}

export default HomeImages