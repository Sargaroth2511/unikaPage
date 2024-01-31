import React, { useState } from 'react'
import handleTreatmentClick from '../../../../helpers/handleTreatmentClick';
import getBranchDescription from '../../Branches/helpers/getBranchDescription';

const Dropdown = ({ setFocused, contentfulData, useShowDropdown, isSmallScreen,
  navigate, treatmentsRef, setTreatmentClick }) => {

  const [showDropdown, setShowDropdown] = useShowDropdown;
  const [hovered, setHovered] = useState(false);

  const addClassNames = (id, hoverClass, dropdownClass) => {
    let addedClassNames = [];
    if (hovered === id) addedClassNames.push(hoverClass)
    if (showDropdown === id) addedClassNames.push(dropdownClass);
    return addedClassNames.join(' ')
  };

  const treatmentClickHandle = i => {
    navigate(`/${showDropdown}`)
    setTimeout(() => {
      handleTreatmentClick(treatmentsRef, i)
      setFocused(false)
      setShowDropdown(false)
      setTreatmentClick(true)
    }, 100);
  }


  return (
    <div
      id={`${showDropdown}dropdown`}
      className={'dropdown ' + (addClassNames(showDropdown, '', `${showDropdown.toLowerCase()}-focused`))}>
      {
        isSmallScreen &&
        <div>
          <h3>
            {showDropdown}
          </h3>
          <h4>
            {getBranchDescription(showDropdown)}
          </h4>
        </div>
      }

      {
        contentfulData.map((data, i) => {
          const treatment = data.slideTitle
          if (data.slideBranch === showDropdown)
            return (
              <li
                className={'treatment-title ' + (addClassNames(treatment, `treatment-titlehover`))}
                id={treatment}
                key={treatment}
                onClick={() => treatmentClickHandle(i)}
                onMouseEnter={(e) => setHovered(e.target.id)}
                onMouseLeave={() => setHovered(false)}>{treatment}
              </li>
            )
        })
      }
    </div>
  )
}

export default Dropdown