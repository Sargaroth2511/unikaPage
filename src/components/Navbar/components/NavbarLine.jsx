import React, { useEffect, useState, useCallback } from 'react'

import quadrat from '../../../Images/NavBar/quadrat.png'
import MapsLocation from '../../../Images/NavBar/MapsLocation.png';
import { getElementsHeight } from '../../helpers/handleTreatmentClick';
import Burgermenu from './Burgermenu/components/Burgermenu';



const NavbarLine = ( {isSmallScreen, location, useActivateBurgermenu, navigate, elementsHeight,
                      contentfulData, treatmentsRef} ) => {
  const [hitTopOfScreen, setHitTopOfScreen] = useState(false)
  const [y, setY] = useState(window.scrollY);
  const [burgerMenuActivated, setBurgerMenuActivated] = useActivateBurgermenu


  


  const burgerClickHandle = () => {
    setBurgerMenuActivated(!burgerMenuActivated)
  }

  useEffect(()=> {
    let upperNavbarHeight = getElementsHeight('uppernavbar')
    let upperNavbar = document.getElementById('uppernavbar')

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


  const addClassNames = () => {
    switch (location.pathname) {
      case '/Kidscare':
        return 'lightgreybackground blackcolor';
      case '/Cosmetologie':
        return 'mintgreenbackground';  
      case '/Bodyconcept':
        return 'lightocherbackground';
      case '/Curamedix':
        return 'babybluebackground';
      default:
        return 'coolgreybackground';
    }
  }

  return (
    <div id='navbarline' className={"navbarline "+ (addClassNames())
    +(hitTopOfScreen ? ' topline': ' bottomline')}>
    {!isSmallScreen&&<div className={'nav-buttons '+ (location.pathname !=='/unikaPage' ?'blackcolor' : '')}>
        <div className="shop" onClick={()=>navigate('/Shop')}>Shop</div>
        <div className="contact" onClick={()=>navigate('/Contact')}>Kontakt</div>
        <div className="about" onClick={()=>navigate('/About')}>Über uns</div>
    </div>}
    {/* {isSmallScreen && <div className={'quadrat '+ (location.pathname ==='/unikaPage' ? 'invertfilter':'')}
     onClick={()=>burgerClickHandle()} id='burger'
        style={{backgroundImage: `url(${quadrat})`}}>
    </div>} */}
    {isSmallScreen && 
      <div className={'hamburger-box' + 
      (hitTopOfScreen ? ' hamburger-topline': ' hamburger-bottomline')}>
        <div className={'hamburger'} 
        onClick={()=>burgerClickHandle()} id='burger'>
          &#x2261;</div>
      </div>
    }
         
            <Burgermenu contentfulData={contentfulData} useActivateBurgermenu={useActivateBurgermenu}
             navigate={navigate} treatmentsRef={treatmentsRef} elementsHeight={elementsHeight}
             setHitTopOfScreen={setHitTopOfScreen} />
    {/* {isSmallScreen && (
      <div className='wrapper'>
        <a href='https://goo.gl/maps/3PsFY9dAGmZejPcv9' className='location'
         style={{backgroundImage:`url(${MapsLocation})`}} alt="location"></a>  
        <a id='phone' href='tel:06483911611' className={"sociallink material-icons-outlined phone "+
         (location.pathname ==='/unikaPage' ? 'invertfilter':'')}>phone</a>
      </div>
     )} */}

</div>
  )
}

export default NavbarLine