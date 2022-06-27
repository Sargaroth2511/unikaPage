import React from 'react'

import quadrat from '../../../Images/NavBar/quadrat.png'


const NavbarLine = ( {useHovered, isSmallScreen, location, useShowBurgermenu} ) => {
  const [showBurgermenu, setShowBurgermenu] = useShowBurgermenu;
  const [hovered, setHovered] = useHovered  

  const burgerClickHandle = () => {
    setShowBurgermenu(prev => !prev)
  }

  const addClassNames = () => {
    switch (location.pathname) {
      case '/unikaPage/Kidscare':
        return 'lightgreybackground blackcolor';
      case '/unikaPage/Cosmetologie':
        return 'mintgreenbackground';  
      case '/unikaPage/Bodyconcept':
        return 'lightocherbackground';
      case '/unikaPage/Curamedix':
        return 'babybluebackground';
      default:
        return 'coolgreybackground';
    }
  }

  return (
    <div className={"navbarline "+ (addClassNames())}>
    {!isSmallScreen&&<div className={'nav-buttons '+ (location.pathname !=='/unikaPage' ?'blackcolor' : '')}>
        <div className="shop">Shop</div>
        <div className="more">Mehr...</div>
        <div className="contact">Kontakt</div>
        <div className="about">Über uns</div>
    </div>}
    {isSmallScreen && <div className={'quadrat '+ (location.pathname ==='/unikaPage' ? 'invertfilter':'')}
     onClick={()=>burgerClickHandle()} id='burger'
        style={{backgroundImage: `url(${quadrat})`}}>
    </div>}
    {isSmallScreen && <a id='phone' href='tel:06483911611'
    className={"sociallink material-icons-outlined phone "+
     (location.pathname ==='/unikaPage' ? 'invertfilter':'')}
     >phone</a>}
</div>
  )
}

export default NavbarLine