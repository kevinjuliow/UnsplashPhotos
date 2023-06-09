import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export const SearchContext = createContext(null) ;

export const ContextProvider = (props) =>{
  const [query , setQuery ] = useState('');
  const [isSearch , setIsSearch ] = useState(false); 
  const [searchPhotos , setSearchPhotos ]=  useState ([]);

  const searchApi = async () =>{
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}` , {
      params : {
        client_id : 'cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM'
      }
    })
    setSearchPhotos(response.data.results)
  }
  const startApi = () =>{
    // searchApi()
    setIsSearch(true)
  }
  const handleText =(e)=>{
    setQuery(e.target.value);
  }

  const value = {query , isSearch , setIsSearch , handleText , startApi , searchPhotos}
  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}