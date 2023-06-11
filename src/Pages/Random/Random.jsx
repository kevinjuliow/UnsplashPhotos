import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import HomeImages from '../Home/HomeImages'
import Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry'
import './Random.css'
import { SearchContext } from '../../Context/SearchContext'

const Random = () => {
  const [randomPhotos , setRandomPhotos] = useState([])
  const {clickedVar } = useContext(SearchContext);
  const {randomClicked} = clickedVar
  const fetchRandom = async () =>{
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random?client_id=CM-ro_y-f_t3u3zhpjbu5nU2_8ITnQHmTzauX-_V9kc&count=10')
      setRandomPhotos(response.data)
    }catch(error) {
      console.error('Error Fetching')
    }
    
    
  }
  useEffect(()=>{
    if (randomClicked) {
      fetchRandom()
    }
  } , [] )
  

  return (
    <div className='pages random'>
       <h1 style={{marginLeft :'50px'}}>PhotoPicker</h1>
      <p style={{color: 'gray', marginLeft : '50px'}}>All Photos here are from Unsplash</p>
      
        <div className='grid-container'>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'> 
                {randomPhotos.map((e)=>{
                      return (
                  <HomeImages data = {e} />
                    )
                        })}
                </Masonry>
            </ResponsiveMasonry>
        
        </div>
    </div>
  )
}

export default Random