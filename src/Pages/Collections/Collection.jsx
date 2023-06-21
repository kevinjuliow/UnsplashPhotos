import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CollectionsCard from './CollectionsCard';
import './Collections.css'
import { useMediaQuery } from 'react-responsive';
import { ResponsiveMasonry } from 'react-responsive-masonry';
import Masonry from 'react-responsive-masonry';
import { SearchContext } from '../../Context/SearchContext';

const Collection = () => {
  const [collections , setCollections] = useState([]);
  const [searchCollections , setSearchCollections] = useState([])
  const [isFetch , setIsFetch] = useState(false);
  const {query} = useContext(SearchContext);
  const fetchCollections = async () =>{
    try { 
      const response = await axios.get('https://api.unsplash.com/collections?client_id=CM-ro_y-f_t3u3zhpjbu5nU2_8ITnQHmTzauX-_V9kc')
      setCollections(response.data)
      collections != null && setIsFetch(true);
    }catch(error){
      console.error("Error fetching")
    }
  }

  const fetchSearchCollections = async () =>{
    try {
      const response = await axios.get('https://api.unsplash.com/search/collections?client_id=CM-ro_y-f_t3u3zhpjbu5nU2_8ITnQHmTzauX-_V9kc&query='+query)
      setSearchCollections(response.data)
      console.log(searchCollections)
    }
    catch(error){
      console.error("Error Fetching Collections");
    }
  }

  useEffect((e)=>{
    fetchCollections()
  } , [])
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' })   
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })

  return (
    <div className='pages colletions' style={{marginLeft : `${isMobile2? '0px' :isMobile ? '200px':'340px'}`}}>
      <div className='grid-collections' style={{margin : `${isMobile2 ? '20px 10px' : '20px'}` }}>
      <ResponsiveMasonry
                columnsCountBreakPoints={{ 300 : 1 , 1000: 2, 1200: 3}} 
            >
                <Masonry gutter='20px'> 
                {collections.map((e)=>{
        return(
          <CollectionsCard data = {e} />
        )
      })}
                </Masonry>
            </ResponsiveMasonry>
      </div>
      
    </div>
  )
}

export default Collection