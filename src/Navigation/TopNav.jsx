import React, { createContext, useContext, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { SearchContext } from '../Context/SearchContext'



const TopNav = () => {
  const {handleText , startApi} = useContext(SearchContext);

  const styles = {
    headerStyle : {
      marginLeft : '340px', borderBottom : '1px solid black',height : '100px', width :'100%', 
      display:'flex', alignItems : 'center', position : 'fixed' , zIndex :'10', backgroundColor : 'white'
    }
    ,searchBox : {
      padding : '8px 10px ',  paddingRight : '100px' ,border : 'none' , 
      outline : 'none' , fontSize :'12px'
    },
    searchBox_container : {
      padding : '4px 10px ',  marginLeft : '40px',borderRadius : '1000px',
      border : '2px solid rgb(73, 154, 153)',display : 'flex' , alignItems : 'center'
    }
  }

  return (
    <header style={styles.headerStyle}>
      <div style={styles.searchBox_container}> 
      <input type="text" style={styles.searchBox} placeholder='Search...' onChange={handleText}/> 
      <BsSearch style={{fontSize : '20px' , cursor : 'pointer'}} onClick={startApi}/>
      </div>
    </header>
  )
}

export default TopNav