import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeImages from '../Home/HomeImages'
import Masonry ,{ResponsiveMasonry} from 'react-responsive-masonry'
import './Random.css'

const Random = () => {
  const [randomPhotos , setRandomPhotos] = useState([])
  const fetchRandom = async() =>{
    try {
      const response = await axios.get('https://api.unsplash.com/photos/random' , {
        params : {
          client_id : 'cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM' , 
          count : 10
        }
      })
      setRandomPhotos(response.data)
    }catch(error) {
      console.error('Error Fetching')
    }
    
    
  }

  useEffect(()=>{
  //  fetchRandom()
  })
  return (
    <div className='random-page'>
      asd
        <>
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
        
        </>
    </div>
  )
}

export default Random