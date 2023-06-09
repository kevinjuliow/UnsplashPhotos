import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigations.css'

const SideNav = () => {
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
  const clickUsers = () =>{
    setClick(false)
  }
  const clickHome = () =>{
    setClick(true)
  }
  return (
    <aside style={styles.asideStyle}>
      <button style={styles.buttonStyle}>UnSplash</button>
      <p style={styles.pStyling}>MENU</p>
      <ul style={styles.ul_container}>
        <li style={{backgroundColor : `${click ? 'rgba(0, 156, 190, 0.352)' : 'white'}` , color : `${click ? 'rgb(3, 83, 83)' : 'black'}`}}><Link onClick={clickHome}  to={'/'}>Home</Link></li>
        <li><Link onClick={clickUsers} to={'/users'}>Users</Link></li>
        <li><Link to={'/collections'}>Collections</Link></li>
        <li><Link to={'/random'}>Random</Link></li>
      </ul>
    </aside>
  )

  
}

export default SideNav