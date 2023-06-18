import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import HomeImages from '../Home/HomeImages'
import Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry'
import './Random.css'
import { SearchContext } from '../../Context/SearchContext'
import { useMediaQuery } from 'react-responsive'

const Random = () => {
  const [randomPhotos , setRandomPhotos] = useState([])
  const {clickedVar } = useContext(SearchContext);
  const {randomClicked} = clickedVar
  const fetchRandom = async () =>{
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random?client_id=CM-ro_y-f_t3u3zhpjbu5nU2_8ITnQHmTzauX-_V9kc&count=30')
      setRandomPhotos(response.data)
    }catch(error) {
      console.error('Error Fetching')
    }
    
    
  }
  useEffect(()=>{
    if (randomClicked) {
      // fetchRandom()
    }
  } , [] )
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' }) 
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })

  return (
    <div className='pages random' style={{marginLeft : `${isMobile2? '0px' :isMobile ? '200px':'340px'}`}}>
       <h1 style={{marginLeft :'50px'}}>PhotoPicker</h1>
      <p style={{color: 'gray', marginLeft : '50px'}}>All Photos here are from Unsplash</p>
      
        <div className='grid-container' style={{margin : `${isMobile2 ? '20px 10px' : '20px'}` }}>
        <ResponsiveMasonry
                 columnsCountBreakPoints={{ 300 : 1 , 500: 2, 1050: 3 , 1200 : 4}} 
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