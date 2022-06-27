import React from 'react'
import logo from '../../../Images/NavBar/UnikaLogo.png';


const Logo = ( { navigate } ) => {
  return (
        <div className="logo" style={{backgroundImage:`url(${logo})`}} alt="logo"
        onClick={()=>navigate('/unikaPage')}>
        </div>
  )
}

export default Logo