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
  const fetchRandom = async() =>{
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random' , {
        params : {
          count : 2  ,
          client_id : 'cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM' 
              }
      })
      setRandomPhotos(response.data)
    }catch(error) {
      console.error('Error Fetching')
    }
    
    
  }
  useEffect(()=>{
    if (randomClicked) {
      fetchRandom()
    }
  } , )
  

  return (
    <div className='pages random'>
      
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