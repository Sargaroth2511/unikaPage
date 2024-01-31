import React, { useEffect, useState } from 'react'

import checkForCourses from '../helpers/checkForCourses'
import branchClickHandle from '../helpers/branchClickHandle'
import typeClickHandle from '../helpers/typeClickHandle'
import animateTypeMenu from '../helpers/animateTypeMenu'
import animateBranchMenu from '../helpers/animateBranchMenu'
import rightarrow from './../../../../../Images/NavBar/right-arrow.png'


const ServiceMenuItem = ({branch, serviceMenuProps}) => {

  const {activateServicemenu, useActivateTypeMenu, useShowArrow, 
         useShowBranchMenu, branchMenuProps, useServiceType} = serviceMenuProps
  const {contentfulData} = branchMenuProps
  const [showArrow, setShowArrow] = useShowArrow
  const [activateTypeMenu, setActivateTypeMenu] = useActivateTypeMenu
  const [showBranchMenu, setShowBranchMenu] = useShowBranchMenu 
  const [showTypeMenu, setShowTypeMenu] = useState(false)
  const [serviceType, setServiceType] = useServiceType;

  useEffect(()=> {
    if(activateTypeMenu) setShowTypeMenu(activateTypeMenu) 
    else {
      setTimeout(() => {setShowTypeMenu(false)}, 180);
      setServiceType(false)
    }  
  },[activateTypeMenu])

// reduce animation backwards


  return (
    <>
    <div  id={'burger'+branch.toLowerCase()} 
          className={'servicemenu '+branch.toLowerCase()+'-background' + 
                    (activateServicemenu? ' show-submenu-animation ': ' remove-submenu-animation ') +
                    (animateBranchMenu(activateTypeMenu, showBranchMenu, branch))}
          onClick={(e)=>branchClickHandle(e, branch, useActivateTypeMenu, useShowArrow, contentfulData, useShowBranchMenu, setServiceType)}
          >{branch}
    </div>         
             
        {checkForCourses(contentfulData, branch) && showTypeMenu === branch && 
        <>
            

            <div className={branch.toLowerCase()+'-background servicemenu ' + 
                           (animateTypeMenu(branch, activateTypeMenu, serviceType, 'treatment', showBranchMenu))}
                 onClick={(e)=>typeClickHandle(e, branch, setShowBranchMenu, setServiceType, 'treatment')}
                 id={branch.toLowerCase()+'treatment'}>Behandlungen
              {showArrow === branch && <img id={branch.toLowerCase()+'arrowUp'} className='arrow-up' 
            src={rightarrow} alt="arrow" 
            onClick={(e)=>branchClickHandle(e, branch, useActivateTypeMenu, useShowArrow, contentfulData, useShowBranchMenu, setServiceType)}/>}
            </div>

            <div className={branch.toLowerCase()+'-background servicemenu ' + 
                           (animateTypeMenu(branch, activateTypeMenu, serviceType, 'course', showBranchMenu))}
                 onClick={(e)=>typeClickHandle(e, branch, setShowBranchMenu, setServiceType, 'course')}
                 id={branch.toLowerCase()+'course'}>Kurse
              </div>
            
        </>}
        
    </>
    
     
  )
}

export default ServiceMenuItem