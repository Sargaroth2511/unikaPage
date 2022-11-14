import React, { useState, useEffect } from 'react'

import rightarrow from './../../../../../Images/NavBar/right-arrow.png'
import OutsideAlerter from '../../../../helpers/OutsideAlerter';
import ServiceMenu from './ServiceMenu';




const Burgermenu = ( {contentfulData, useActivateBurgermenu, navigate, treatmentsRef, setHitTopOfScreen} ) => {
    const [burgerMenuActivated, setBurgerMenuActivated] = useActivateBurgermenu;
    const [activateServicemenu, setActivateServicemenu] = useState(false)
    const [showBurgerMenu, setShowBurgerMenu] = useState(false)
    const [showServicemenu, setShowServicemenu] = useState(false)

    useEffect(() => {
        !activateServicemenu && setTimeout(() => {
          setShowServicemenu(false)
        }, 200);
        activateServicemenu && setShowServicemenu(true)
      }, [activateServicemenu])



    


    const handleBurgerMenuClick = (navigateTo) => {
       setBurgerMenuActivated(false)
        setHitTopOfScreen(false)
        navigate(navigateTo)
    }


    // check animations when burgermenu is closed

    useEffect(()=> {
        if(!burgerMenuActivated){ 
            setShowServicemenu(false)
            setTimeout(() => {
                setShowBurgerMenu(false)
            }, 180);
            setActivateServicemenu(false)
        } else setShowBurgerMenu(true)    
    }, [burgerMenuActivated, activateServicemenu])

    const animateBurgermenuWrapper = () => {
        if (activateServicemenu) return 'moveright'
        if (!activateServicemenu && burgerMenuActivated) return 'moveleft'
        else if (!activateServicemenu && !burgerMenuActivated) return 'moveright'

    }

  return (
      <OutsideAlerter showMenu={setBurgerMenuActivated} exception={'burger'} >
        
            {showBurgerMenu && <>
                <div className={'burgermenuwrapper ' +(animateBurgermenuWrapper())} >
                {showServicemenu && 
            <ServiceMenu useActivateServicemenu={[activateServicemenu, setActivateServicemenu]} 
                         contentfulData={contentfulData} useActivateBurgermenu={useActivateBurgermenu} 
                         navigate={navigate} treatmentsRef={treatmentsRef}/>
            }
            <div className='overflowcontainer'>
            <div className={'burgermenu' +(burgerMenuActivated? ' animateshowburgermenu':' animateremoveburgermenu')} 
            onClick={()=>setActivateServicemenu(!activateServicemenu)}>Leistungen
                {activateServicemenu && <div onClick={()=>setActivateServicemenu(!activateServicemenu)}>
                    <img className='arrow' src={rightarrow} alt="arrow"/></div>}
            </div>
           
            <div className={'burgermenu' +(burgerMenuActivated? ' animateshowburgermenu':' animateremoveburgermenu')} 
            onClick={()=>handleBurgerMenuClick('/Contact')}>Kontakt</div>
            <div className={'burgermenu' +(burgerMenuActivated? ' animateshowburgermenu':' animateremoveburgermenu')} 
            onClick={()=>handleBurgerMenuClick('/Shop')}>Shop</div>
            <div className={'burgermenu' +(burgerMenuActivated? ' animateshowburgermenu':' animateremoveburgermenu')} 
            onClick={()=>handleBurgerMenuClick('/About')}>Über uns</div>
            </div>
                
                </div>
            </>}
            
        

      </OutsideAlerter>
    
  )
}

export default Burgermenu