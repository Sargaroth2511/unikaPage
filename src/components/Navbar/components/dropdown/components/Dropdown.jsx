import React, { useState } from 'react'

const Dropdown = ( {useFocused, contentfulData, useShowDropdown, isSmallScreen,
                    navigate, treatmentsRef, useTreatmentClick} ) => {
  const [focused, setFocused] = useFocused;
  const [showDropdown, setShowDropdown] = useShowDropdown;
  const [treatmentClick, setTreatmentClick] = useTreatmentClick;                    

  const [hovered, setHovered] = useState(false);


  const addClassNames = (id, hoverClass, dropdownClass) => {
    let addedClassNames = [];
    if(hovered === id) addedClassNames.push(hoverClass)
    if(showDropdown === id) addedClassNames.push(dropdownClass);
    return addedClassNames.join(' ') 
  }

  const handleMouseEnter = e => {
    setHovered(e.target.id)
  }

  const treatmentClickHandle =  i => {
    navigate(`unikaPage/${showDropdown}`)
    setTimeout(() => {
      treatmentsRef.current[i].scrollIntoView({behavior:'smooth'})
      setFocused(false)
      setShowDropdown(false)
      setTreatmentClick(true)
    }, 100);
  }
 
  const branchDescription = showDropdown => {
    switch (showDropdown) {
      case 'Kidscare':
        return 'Kinder & Familie'
      case 'Cosmetologie':
          return 'Kosmetikbehandlungen'
      case 'Bodyconcept':
        return 'Körperästhetik'
      case 'Curamedix':
        return 'Prävention'        
      default:
        break;
    }
  }

  return (
    <div id={`${showDropdown}dropdown`}
    className={'dropdown ' + (addClassNames(showDropdown, '', `${showDropdown}focus`))}>
      {isSmallScreen && <div>
        <h3>{showDropdown}</h3>
        <h4>{branchDescription(showDropdown)}</h4>
      </div>}
      {contentfulData.map((data, i) => {
        const treatment = data.slideTitle
        if (data.slideBranch === showDropdown) 
        return (<li className={'treatmenttitle ' + (addClassNames(treatment, `treatmenttitlehover`))} 
        id={treatment} key={treatment} onClick={()=>treatmentClickHandle(i)}
        onMouseEnter={(e)=>handleMouseEnter(e)} onMouseLeave={()=>setHovered(false)}>
        {treatment}</li>)})}
    </div>
  )
}

export default Dropdown