import React from 'react'
import './Collections.css'

const CollectionsCard = (props) => {
  const {cover_photo , preview_photos} = props.data
  return (
    <div className='collectionsCard'>
      <div style={{display:'flex' , height :'80%' , width :'70%'}}>
        <img src={preview_photos[0].urls.raw} alt="" style={{width:'100%', objectPosition:"center" , objectFit:'fill'}}/>
        <div style={{display :'flex' , flexDirection : 'column' , height :'20%' , width :'30%'}}>
          
        </div>
      </div>
      {cover_photo.alt_description}
      </div>
  )
}

export default CollectionsCard