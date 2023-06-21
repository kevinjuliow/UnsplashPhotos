import React from 'react'
import './Collections.css'

const CollectionsCard = (props) => {
  const {cover_photo , preview_photos , tags} = props.data
  return (
    <div className='collectionsCard'>
      <div style={{display:'flex' , height :'320px' , width :'280px'}}>
        <div>
        <img src={preview_photos[0].urls.regular} alt="" style={{ width :'280px', height :"320px",  objectPosition:"center" , objectFit:'cover'}}/>
        </div>
        <div style={{display :'flex' , flexDirection : 'column' , height :'320px' , width :'120px' , marginLeft :'10px' , rowGap :"20px" }}>
        <img src={preview_photos[1].urls.thumb} alt="" style={{ width :'120px', height :"150px",  objectPosition:"center" , objectFit:'cover'}}/>
        <img src={preview_photos[2].urls.thumb} alt="" style={{ width :'120px', height :"150px",  objectPosition:"center" , objectFit:'cover'}}/>          
        </div>  
      </div>
      <p className='collectionsTitle'>{cover_photo.alt_description}</p>
      <div>
      <p className='tags'>{tags[0].title}</p>
      <p className='tags'>{tags[1].title}</p>
      <p className='tags'>{tags[2].title}</p>
      </div>
   
      </div> 
  )
}

export default CollectionsCard