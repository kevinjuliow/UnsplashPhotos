import React, { createContext, useContext, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { SearchContext } from '../Context/SearchContext'
import { useMediaQuery } from 'react-responsive'
import {GiHamburgerMenu} from 'react-icons/gi'


const TopNav = () => {
  const {handleText , startApi , handleHambMenu} = useContext(SearchContext);
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' })
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })

  const styles = {
    headerStyle : {
      marginLeft : isMobile2? '0' : isMobile ? '200px' : isTablet? '300px' : '320px',height : '100px', width :'100%', 
      display:'flex', alignItems : 'center', position : 'fixed' , zIndex :'10', backgroundColor : 'white' , borderBottom : '1px solid lightgray'
    }
    ,searchBox : {
      padding : '8px 10px ',  paddingRight : '100px' ,border : 'none' , 
      outline : 'none' , fontSize :'12px'
    },
    searchBox_container : {
      padding : '4px 10px ',  marginLeft : '40px',borderRadius : '1000px',
      border : '2px solid rgb(73, 154, 153)',display : 'flex' , alignItems : 'center'
    } , 
    hambMenu : {
      color : 'black' , 
      marginLeft : '10px' , 
      fontSize :"25px", 
      display : isMobile2 ? 'block' :'none',
      cursor : 'pointer'
    }
  }


  return (
    <header style={styles.headerStyle}>
      <GiHamburgerMenu style={styles.hambMenu} onClick={handleHambMenu}/>
      <div style={styles.searchBox_container}> 
      <input type="text" style={styles.searchBox} placeholder='Search...' onChange={handleText}/> 
      <BsSearch style={{fontSize : '20px' , cursor : 'pointer'}} onClick={startApi}/>
      </div>
    </header>
  )
}

export default TopNav