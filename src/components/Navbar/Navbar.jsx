import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from './components/Logo';
import Sociallinks from './components/Sociallinks';
import Branches from './components/Branches';
import NavbarLine from './components/NavbarLine';
import Burgermenu from './components/Burgermenu/components/Burgermenu';



const Navbar = ( {contentfulData, treatmentsRef, isSmallScreen} ) => {
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [blured, setBlured] = useState(false)
    const [showBurgermenu, setShowBurgermenu] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();


  return (
    <div>
        <div className="navbarwrapper">
            <Logo navigate={navigate} location={location} />
            <Sociallinks isSmallScreen={isSmallScreen} />
            <Branches useHovered={ [hovered, setHovered] } isSmallScreen={isSmallScreen}
             useFocused={ [focused, setFocused] } useBlured={ [blured, setBlured] }
             contentfulData={contentfulData} navigate={navigate} treatmentsRef={treatmentsRef}
             location={location}/>
            <NavbarLine useHovered={ [hovered, setHovered] } isSmallScreen={isSmallScreen}
             location={location} useShowBurgermenu={ [showBurgermenu, setShowBurgermenu] }/>
            {showBurgermenu && 
            <Burgermenu contentfulData={contentfulData} setShowBurgermenu={setShowBurgermenu}
             navigate={navigate} treatmentsRef={treatmentsRef} />} 
        
        </div>
    </div>
  )
}

export default Navbar