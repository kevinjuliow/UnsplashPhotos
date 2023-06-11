import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigations.css'
import { SearchContext } from '../Context/SearchContext'
import { useMediaQuery } from 'react-responsive'

const SideNav = () => {
  const { clickedVar } = useContext(SearchContext);
  const {homeClicked , setHomeClicked , usersClicked , setUserClicked , collectionsClicked , setCollectionsClicked , 
    randomClicked , setRandomClicked , clickedNav} = clickedVar
  const [click , setClick] = useState(true);
  const styles = {
    asideStyle : {
      position :'fixed' , 
      width : '340px',      height : '100%',
      display : 'flex',
      alignItems :'center',       flexDirection : 'column',      paddingTop : '40px',      borderRight : '1px solid black'
    },
    buttonStyle : {
      padding : '9px 70px', border : 'none',  
      backgroundColor : 'rgb(73, 154, 153)' , fontSize : '18px',color :'white',
      borderRadius : '100px', marginBottom : '30px'
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