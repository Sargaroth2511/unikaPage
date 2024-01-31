import React, { useEffect, useState } from 'react'

import ServiceMenuItem from './ServiceMenuItem'
import BurgerBranchMenu from './BurgerBranchMenu'


const ServiceMenu = ( {useActivateServicemenu, contentfulData, useActivateBurgermenu, navigate, treatmentsRef } ) => {
    const [activateServicemenu, setActivateServicemenu] = useActivateServicemenu
    const [burgerMenuActivated, setBurgerMenuActivated] = useActivateBurgermenu

    const [activateTypeMenu, setActivateTypeMenu] = useState(false)
    const [showBranchMenu, setShowBranchMenu] = useState(false)
    const [showArrow, setShowArrow] = useState(false)
    const [serviceType, setServiceType] = useState(false)


    const branchMenuProps = {useActivateServicemenu:useActivateServicemenu, contentfulData:contentfulData, setBurgerMenuActivated:setBurgerMenuActivated,
                             navigate:navigate, treatmentsRef:treatmentsRef}

    const serviceMenuProps = {activateServicemenu:activateServicemenu, useActivateTypeMenu:[activateTypeMenu, setActivateTypeMenu],
                              useShowArrow:[showArrow, setShowArrow], useShowBranchMenu:[showBranchMenu, setShowBranchMenu],
                              branchMenuProps:branchMenuProps, useServiceType:[serviceType, setServiceType]}                         

    useEffect(() => {
        !burgerMenuActivated && setActivateServicemenu(false)
        if (!activateServicemenu || !burgerMenuActivated) setShowBranchMenu(false)
        if (!activateServicemenu || !burgerMenuActivated) setShowArrow(false)
        if (!activateServicemenu || !burgerMenuActivated) setActivateTypeMenu(false)
    }, [activateServicemenu, burgerMenuActivated])

    // useEffect(()=> {
    //    if (!showArrow) 
    //    setShowBranchMenu(false);
    // }, [showArrow])


  return (
    <div className={'burgermenu-servicemenu-wrapper '+(showBranchMenu ? 'servicemenu-reduced' : 'servicemenu-expanded')}>
        {showBranchMenu && 
        <BurgerBranchMenu props={branchMenuProps} branch={showBranchMenu} type={serviceType}/>
        }
        <div className='overflow-container'>
        <ServiceMenuItem branch={'Kidscare'} serviceMenuProps={serviceMenuProps}/>
        <ServiceMenuItem branch={'Cosmetologie'} serviceMenuProps={serviceMenuProps}/>
        <ServiceMenuItem branch={'Bodyconcept'} serviceMenuProps={serviceMenuProps}/>
        <ServiceMenuItem branch={'Curamedix'} serviceMenuProps={serviceMenuProps}/>
        </div>
        
        
        {/* {showBranchMenu && 
              <BurgerBranchMenu props={branchMenuProps} branch={showBranchMenu} type={serviceType}/>}       */}
    </div>
  )
}

export default ServiceMenu