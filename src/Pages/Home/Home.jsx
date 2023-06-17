import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Masonry , {ResponsiveMasonry} from 'react-responsive-masonry'
import HomeImages from './HomeImages'
import { SearchContext } from '../../Context/SearchContext'
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const {isSearch , startApi , searchPhotos} = useContext(SearchContext);
  const [defaultPhotos , setDefaultPhotos] = useState([])
  const [sponsor , setSponsor ] = useState([]); 
  const fetchDefaultPhotos = async () =>{
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM')
    .then((response) =>(
      setDefaultPhotos(response.data)
    ) 
  )
  }

  useEffect(()=>{
   fetchDefaultPhotos()
  } , [])
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' })   
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })

  return (
    <div className = 'pages home' style={{marginLeft : `${isMobile2? '0px' :isMobile ? '200px':'340px'}`}}>
      <h1 style={{marginLeft :'50px'}}>PhotoPicker</h1>
      <p style={{color: 'gray', marginLeft : '50px'}}>All Photos here are from Unsplash</p>
      
    <div className='grid-container' style={{margin : `${isMobile2 ? '20px 10px' : '20px'}` }}>
        <ResponsiveMasonry
                columnsCountBreakPoints={{ 300 : 1 , 500: 2, 1050: 3 , 1200 : 4}} 
            >
                <Masonry gutter='10px'> 
                  {isSearch ? searchPhotos.map((e)=>{
                    return <HomeImages data = {e}/>}) :
                    defaultPhotos.map((e)=>{
                      return <HomeImages data = {e} />  
                    })}
                </Masonry>
            </ResponsiveMasonry>
    </div>

    </div>
  )
}

export default Home