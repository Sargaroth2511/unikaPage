import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from './components/Logo';
import Sociallinks from './components/Sociallinks';
import Branches from './components/Branches/Branches';
import NavbarLine from './components/NavbarLine';
import Burgermenu from './components/Burgermenu/components/Burgermenu';



const Navbar = ( {contentfulData, treatmentsRef, isSmallScreen, useElementsHeight} ) => {
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [blured, setBlured] = useState(false)
    const [burgerMenuActivated, setBurgerMenuActivated] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const [elementsHeight, setElementsHeight] = useElementsHeight;


  return (
        <div className="navbar-wrapper" id='navbar'>
            <div id='upper-navbar'>
              <Logo navigate={navigate} location={location} />
              {/* <Sociallinks isSmallScreen={isSmallScreen} /> */}
              <Branches useHovered={ [hovered, setHovered] } isSmallScreen={isSmallScreen}
              useFocused={ [focused, setFocused] } useBlured={ [blured, setBlured] }
              contentfulData={contentfulData} navigate={navigate} treatmentsRef={treatmentsRef}
              location={location}/>
            </div>
            <NavbarLine useHovered={ [hovered, setHovered] } isSmallScreen={isSmallScreen}
             location={location} useActivateBurgermenu={[burgerMenuActivated, setBurgerMenuActivated]} navigate={navigate}
             useElementsHeight={useElementsHeight} contentfulData={contentfulData} treatmentsRef={treatmentsRef}/>
            {/* {burgerMenuActivated && 
            <Burgermenu contentfulData={contentfulData} setBurgerMenuActivated={setBurgerMenuActivated}
             navigate={navigate} treatmentsRef={treatmentsRef} elementsHeight={elementsHeight} />}  */}
             {/* <div className="scrollunderline"></div> */}
        
        </div>
  )
}

export default Navbar