import React, { useEffect, useState } from 'react';
import handleTreatmentClick from '../../../../helpers/handleTreatmentClick';


const BurgerBranchMenu = ( { props, branch, type } ) => {
    const {useActivateServicemenu, contentfulData, setBurgerMenuActivated, navigate, treatmentsRef}= props
    const [activateServicemenu, setActivateServicemenu] = useActivateServicemenu
    const [menuLoaded, setMenuLoaded] = useState(false)

    const treatmentClickHandle = i => {
        navigate(branch)
        setTimeout(() => {
            handleTreatmentClick(treatmentsRef, i)
            setBurgerMenuActivated(false)
        }, 100);
    }

    const translateType = originalType => {
        switch (originalType) {
            case 'Kurs':
                return 'course'
            case 'Behandlung':
                return 'treatment'
            default:
                console.log(originalType, 'no Type matches')
                break;
        }
    }

    useEffect(() => {
        setMenuLoaded(true)
        return function cleanup (){
            setMenuLoaded(false)
        }
    },[])

  

    return (
        <div className={'burger-submenu-wrapper '}>
                {contentfulData.map((data, i) => {
                    const treatment = data.slideTitle
                    const serviceType = translateType(data.slideType)
                    if (data.slideBranch === branch && branch+serviceType === type || data.slideBranch === branch && !type) 
                    return (
                    <div className={'burger-branch glow ' + (data.slideBranch.toLowerCase()+'-background')} 
                    id={treatment} key={treatment} onClick={()=>treatmentClickHandle(i)}>
                    {treatment}</div>
                    ) 
                })}
        </div> 
  )
}

export default BurgerBranchMenu