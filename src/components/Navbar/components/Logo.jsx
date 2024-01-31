import React from 'react'
import logo from '../../../Images/NavBar/UnikaLogo.png';


const Logo = ( { navigate, location } ) => {

  const handleLogoClick = () => {
    navigate('/')

  }

  return (
        <div className="logo" style={{backgroundImage:`url(${logo})`}} alt="logo"
        onClick={()=>handleLogoClick()}>
        </div>
  )
}

export default Logo