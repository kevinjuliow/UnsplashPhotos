import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigations.css'
import { SearchContext } from '../Context/SearchContext'
import { useMediaQuery } from 'react-responsive'

const SideNav = () => {
  const { clickedVar  , hambMenu} = useContext(SearchContext);
  const {homeClicked , setHomeClicked , usersClicked , setUserClicked , collectionsClicked , setCollectionsClicked , 
    randomClicked , setRandomClicked , clickedNav} = clickedVar
  const [click , setClick] = useState(true);
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' })
  const isMobile2 = useMediaQuery({ query: '(max-width: 612px)' })
  const styles = {
    asideStyle : {
      backgroundColor :"white",
      zIndex : '10',
      position :'fixed' , 
      width :  isMobile2? '89%' :isMobile ? '200px' : isTablet? '300px':'320px',      
      height : '100%',
      display : isMobile2 ? 'none' : 'flex',
      alignItems :'center',       flexDirection : 'column',  paddingTop : '40px',      borderRight : '1px solid lightgray'
    },
    buttonStyle : {
      padding : isMobile ? '9px 45px' : '9px 70px', 
      border : 'none',  
      backgroundColor : 'rgb(73, 154, 153)' , fontSize : '18px',color :'white',
      borderRadius : isMobile? '5px': '100px', marginBottom : '30px'
    },pStyling : {
      fontWeight : 'bold',     
      marginBottom : '10px',      fontSize : '16px'
    }, 
    ul_container : {
      textAlign : 'center', 
      fontSize : '14px', 
    }
  }
  const liStyles = (x) =>{
    if(x){
      return {
        backgroundColor : 'rgba(0, 156, 190, 0.352)' ,
        color : 'rgb(3, 83, 83)'
      }
     
    }
    else {
      return {
        backgroundColor : 'white',
        color : 'black'
      }
    }
  }
  
  const clickUsers = () =>{
    setClick(false)
  }
  const clickHome = () =>{
    setClick(true)
  }
  if (hambMenu) {
    styles.asideStyle.display = 'flex';
  }
  return (
    <aside style={styles.asideStyle}>
      <button style={styles.buttonStyle}>PhotoPicker</button>
      <p style={styles.pStyling}>MENU</p>
      <ul style={styles.ul_container}>
        <li style={liStyles(homeClicked)}><Link onClick={()=>clickedNav(setHomeClicked , setUserClicked , setCollectionsClicked, setRandomClicked )}  
        to={'/'}>Home</Link></li>
        <li style={liStyles(usersClicked)}><Link onClick={()=>clickedNav( setUserClicked ,setHomeClicked , setCollectionsClicked, setRandomClicked )} 
        to={'/users'}>Users</Link></li>
        <li style={liStyles(collectionsClicked)}><Link onClick={()=>clickedNav(  setCollectionsClicked , setUserClicked ,setHomeClicked, setRandomClicked )} 
        to={'/collections'}>Collections</Link></li>
        <li style={liStyles(randomClicked)}><Link onClick={()=>clickedNav(  setRandomClicked , setUserClicked ,setHomeClicked,setCollectionsClicked  )} 
        to={'/random'}>Random</Link></li>
      </ul>
    </aside>
  )

  
}

export default SideNav