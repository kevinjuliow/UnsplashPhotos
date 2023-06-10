import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Masonry , {ResponsiveMasonry} from 'react-responsive-masonry'
import HomeImages from './HomeImages'
import { SearchContext } from '../../Context/SearchContext'

const Home = () => {
  const {isSearch , startApi , searchPhotos} = useContext(SearchContext);
  const [defaultPhotos , setDefaultPhotos] = useState([])
  const fetchDefaultPhotos = async () =>{
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM')
    .then((response) =>(
      setDefaultPhotos(response.data)
    ) )
  }

  useEffect(()=>{
  //  fetchDefaultPhotos()
  } , [])
  return (
    <div className = 'pages home'>
      <h1 style={{marginLeft :'50px'}}>Unsplash</h1>
      <p style={{color: 'gray', marginLeft : '50px'}}>All Photos here are from Unsplash</p>
      
    <div className='grid-container'>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter='10px'> 
                  {isSearch ? searchPhotos.map((e)=>{
                    return <HomeImages data = {e}/>}) :
                    defaultPhotos.map((e)=>{
                      return <HomeImages data = {e}/>  
                    })}
                </Masonry>
            </ResponsiveMasonry>
    </div>

    </div>
  )
}

export default Home