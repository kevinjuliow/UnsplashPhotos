import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import CollectionsCard from './CollectionsCard';
import './Collections.css'
import { ResponsiveMasonry } from 'react-responsive-masonry';
import Masonry from 'react-responsive-masonry';
import { SearchContext } from '../../Context/SearchContext';
import CollectionsSearchPhotos from './CollectionsSearchPhotos';
import { useMediaQuery } from 'react-responsive';


const Collection = () => {
  const [collections , setCollections] = useState([]);
  const [isFetch , setIsFetch] = useState(false);
  const {query , isSearch , searchCollections , collectionsClicked , fetchSearchCollections} = useContext(SearchContext);


  const isMobile = useMediaQuery({ query: '(max-width: 780px)' })   
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })

  const fetchCollections = async () =>{
    try { 
      const response = await axios.get('https://api.unsplash.com/collections?client_id=CM-ro_y-f_t3u3zhpjbu5nU2_8ITnQHmTzauX-_V9kc')
      setCollections(response.data)
      collections != null && setIsFetch(true);
    }catch(error){
      console.error("Error fetching")
    }
  }
    useEffect((e)=>{
      fetchCollections()
    } , [])

    if (collectionsClicked && isSearch){fetchSearchCollections()}
  return (
    <div className='pages colletions' style={{marginLeft : `${isMobile2? '0px' :isMobile ? '200px':'340px'}`}}>
      <div className='grid-collections' style={{margin : `${isMobile2 ? '20px 10px' : '20px'}` }}>
      <ResponsiveMasonry
                columnsCountBreakPoints={{ 300 : 1 , 1000: 2, 1200: 3}} 
            >
                <Masonry gutter='20px'> 
                { (isSearch && collectionsClicked)? 
                searchCollections.map((e)=>{
                  return (
                    <CollectionsSearchPhotos data = {e} />
                  )
                })
                :collections.map((e)=>{
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