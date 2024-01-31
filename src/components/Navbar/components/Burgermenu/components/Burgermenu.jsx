import React, { useState, useEffect } from 'react'

import rightarrow from './../../../../../Images/NavBar/right-arrow.png'
import OutsideDetector from '../../../../helpers/OutsideDetector';
import ServiceMenu from './ServiceMenu';




const Burgermenu = ( {contentfulData, useActivateBurgermenu, navigate, treatmentsRef, useHitTopOfScreen} ) => {
    const [burgerMenuActivated, setBurgerMenuActivated] = useActivateBurgermenu;
    const [hitTopOfScreen, setHitTopOfScreen] = useHitTopOfScreen
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
        window.scrollTo({top:0})
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
        if (activateServicemenu) return 'move-right'
        if (!activateServicemenu && burgerMenuActivated) return 'move-left'
        else if (!activateServicemenu && !burgerMenuActivated) return 'move-right'

    }

    return (
        <OutsideDetector 
            showMenu={setBurgerMenuActivated} 
            exception={'burger'} >
            {
            showBurgerMenu && <>
                <div className={'burgermenu-wrapper ' + (animateBurgermenuWrapper())}>
                    {
                    showServicemenu && 
                        <ServiceMenu 
                            useActivateServicemenu={[activateServicemenu, setActivateServicemenu]} 
                            contentfulData={contentfulData} 
                            useActivateBurgermenu={useActivateBurgermenu} 
                            navigate={navigate} 
                            treatmentsRef={treatmentsRef}/>
                    }
                    <div className='overflow-container'>
                        <div 
                            className={'burgermenu' +(burgerMenuActivated? ' animate-show-burgermenu':' animate-remove-burgermenu')} 
                            onClick={()=>setActivateServicemenu(!activateServicemenu)}>Leistungen
                            {
                            activateServicemenu && 
                                <div onClick={()=>setActivateServicemenu(!activateServicemenu)}>
                                    <img 
                                        className='arrow' 
                                        src={rightarrow} 
                                        alt="arrow"/>
                                </div>
                            }
                        </div>
                        <div 
                            className={'burgermenu' +(burgerMenuActivated? ' animate-show-burgermenu':' animate-remove-burgermenu')} 
                            onClick={()=>handleBurgerMenuClick('/Contact')}>Kontakt
                        </div>
                        <div 
                            className={'burgermenu' +(burgerMenuActivated? ' animate-show-burgermenu':' animate-remove-burgermenu')} 
                            onClick={()=>handleBurgerMenuClick('/Shop')}>Shop
                        </div>
                        <div 
                            className={'burgermenu' +(burgerMenuActivated? ' animate-show-burgermenu':' animate-remove-burgermenu')} 
                            onClick={()=>handleBurgerMenuClick('/About')}>Über uns
                        </div>
                    </div>
                    
                </div>
            </>
            }
        </OutsideDetector>
    )
}

export default Burgermenu