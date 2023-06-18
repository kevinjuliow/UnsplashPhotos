import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CollectionsCard from './CollectionsCard';
import './Collections.css'

const Collection = () => {
  const [collections , setCollections] = useState([]);
  const [isFetch , setIsFetch] = useState(false);
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
  console.log(collections);
  return (
    <div className='pages'>
      <div className='grid-collections'>
      {collections.map((e)=>{
        return(
          <CollectionsCard data = {e} />
        )
      })}
      </div>
      
    </div>
  )
}

export default Collection