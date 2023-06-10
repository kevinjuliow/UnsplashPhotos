import axios from "axios";
import { createContext, useState } from "react";
import React from "react";

export const SearchContext = createContext(null) ;

export const ContextProvider = (props) =>{
  const [query , setQuery ] = useState('');
  const [isSearch , setIsSearch ] = useState(false); 
  const [searchPhotos , setSearchPhotos ]=  useState ([]);
  const [homeClicked , setHomeClicked ] = useState(true); 
  const [usersClicked , setUserClicked] = useState(false)
  const [collectionsClicked , setCollectionsClicked] = useState(false)
  const [randomClicked , setRandomClicked] = useState(false)

  const searchApi = async () =>{
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}` , {
      params : {
        client_id : 'cbcE4BHkUayOSBaspLsLOTte_DGYVyanMXS5nXF2NfM'
      }
    })
    setSearchPhotos(response.data.results)
  }
  const clickedNav = (setTrue , setFalse1 , setFalse2 , setFalse3) =>{
    setTrue(true)
    setFalse1(false)
    setFalse2(false)
    setFalse3(false)
  }
  const startApi = () =>{
    // searchApi()
    setIsSearch(true)
  }
  const handleText =(e)=>{
    setQuery(e.target.value);
  }

  const clickedVar = {homeClicked , setHomeClicked , usersClicked , setUserClicked , collectionsClicked , setCollectionsClicked , 
  randomClicked , setRandomClicked , clickedNav}

  const value = {query , isSearch , setIsSearch , handleText , startApi , searchPhotos , clickedVar}
  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  )
}