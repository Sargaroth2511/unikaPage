import React, { useEffect, useState, useCallback, useRef } from 'react'

import quadrat from '../../../Images/NavBar/quadrat.png'
import MapsLocation from '../../../Images/NavBar/MapsLocation.png';
import { getElementsHeight } from '../../helpers/messureElements';
import Burgermenu from './Burgermenu/components/Burgermenu';
import Servicemenu from './Servicemenu';



const NavbarLine = ( {isSmallScreen, location, useActivateBurgermenu, navigate, useElementsHeight,
                      contentfulData, treatmentsRef} ) => {
  const [elementsHeight, setElementsHeight] = useElementsHeight;
  const [hitTopOfScreen, setHitTopOfScreen] = useState(false)
  const [y, setY] = useState(window.scrollY);
  const [burgerMenuActivated, setBurgerMenuActivated] = useActivateBurgermenu
  const [showServicemenuButtons, setShowServicemenuButtons] = useState(false)
  const showButtonRef = useRef(false)


  const burgerClickHandle = () => {
    setBurgerMenuActivated(!burgerMenuActivated)
  }

  useEffect(()=> {
    let upperNavbar = document.getElementById('upper-navbar')
    let upperNavbarHeight = getElementsHeight('upper-navbar')

    const handleScroll = () => {
      let upperNavbarRect = upperNavbar.getBoundingClientRect();
      if(upperNavbarRect.bottom <= 0 && upperNavbarRect.bottom >= -upperNavbarHeight) setHitTopOfScreen(true)
      else if(upperNavbarRect.top >= -upperNavbarHeight && upperNavbarRect.top< 0)setHitTopOfScreen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  useEffect(() => {
    location.pathname === '/' && setShowServicemenuButtons(false);
  }, [location])

  const addClassNames = (location) => {
    const classNames = [];

    const getBackgroundColor = () => {
      switch (location.pathname) {
        case '/Kidscare':
          return 'lightgrey-background';
        case '/Cosmetologie':
          return 'mintgreen-background';  
        case '/Bodyconcept':
          return 'lightocher-background';
        case '/Curamedix':
          return 'babyblue-background';
        default:
          return 'coolgrey-background';
      }
    }

    const backgroundColor = getBackgroundColor()
    classNames.push(backgroundColor)
    hitTopOfScreen ? classNames.push('top-line min-height-7') : classNames.push('bottom-line min-height-4')
    // hitTopOfScreen || showServicemenuButtons ? classNames.push('min-height-7') : classNames.push('min-height-4')

    return classNames.join(' ');
  }

  const handleButtonClick = button => {
    if (button === 'Services'){
 
      setShowServicemenuButtons(!showServicemenuButtons)
    } else {
      navigate('/'+button)
      setHitTopOfScreen(false)
      setShowServicemenuButtons(false)
    }
  }

  // jumps on servicemenubutton toggled while scrolled down

  return (
    <div 
      id='navbar-line' 
      className={"navbar-line "+ (addClassNames(location)) }>
      {
        !isSmallScreen && <>
          <div className={'nav-buttons '+ (location.pathname ==='/' ? 'white-color' : 'black-color' )}>
              <div 
                className='services'
                onClick={()=>handleButtonClick('Services')}
                >Leistungen</div>
              <div className="shop" onClick={()=>handleButtonClick('Shop')}>Shop</div>
              <div className="contact" onClick={()=>handleButtonClick('Contact')}>Kontakt</div>
              <div className="about" onClick={()=>handleButtonClick('About')}>Über uns</div>
            </div>
            
              <Servicemenu location={location} showServicemenuButtons={showServicemenuButtons}/>
            
        </>
          
      }
      {
      isSmallScreen && <>
        {/* <div className={'hamburger-box' + (hitTopOfScreen ? ' hamburger-top-line': ' hamburger-bottom-line')}> */}
          <div 
            className={'hamburger'} 
            onClick={()=>burgerClickHandle()} id='burger'>
            &#x2261;
          </div>
        {/* </div> */}
        <Burgermenu 
          contentfulData={contentfulData} 
          useActivateBurgermenu={useActivateBurgermenu}
          navigate={navigate} 
          treatmentsRef={treatmentsRef} 
          elementsHeight={elementsHeight}
          useHitTopOfScreen={[hitTopOfScreen, setHitTopOfScreen]} />
        </>
      }
    </div>
  )
}

export default NavbarLine