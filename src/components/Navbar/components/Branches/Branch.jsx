import React, { useState, useEffect } from 'react'

import Dropdown from '../dropdown/components/Dropdown'
import getLogoUrl from './helpers/getLogoUrl';
import informationSign from '../../../../Images/NavBar/information.png'
import getBranchDescription from './helpers/getBranchDescription';
import addClassNames from './helpers/addClassNames';


const Branch = props => {
  const { isSmallScreen, branchName, useBlured, useHovered, useFocused,
    location, contentfulData, navigate, treatmentsRef } = props;

  const [hovered, setHovered] = useHovered;
  const [focused, setFocused] = useFocused;
  const [blured, setBlured] = useBlured;

  const [showDropdown, setShowDropdown] = useState(false)
  const [treatmentClick, setTreatmentClick] = useState(false);

  const focusElement = id => {
    setFocused(id);
    blured === id && setBlured(false);
  }

  const blurElement = (id) => {
    setFocused(false);
    setBlured(id);
  }

  const classNameProps = {
    hovered: hovered,
    focused: focused,
    blured: blured,
    location: location
  }

  useEffect(() => {
    setShowDropdown(focused);
    const branches = ['Kidscare', 'Cosmetologie', 'Bodyconcept', 'Curamedix']
    if (!focused) {
      branches.includes(hovered) && setShowDropdown(hovered)
    }
    if (treatmentClick) {
      setHovered(false)
      setTreatmentClick(false)
    }
  }, [hovered, focused, treatmentClick])

  return (
    <div
      className='branch'
      onMouseLeave={() => setHovered(false)}>
      {
        isSmallScreen &&
          <div>{branchName}</div>
      }
      <div
        style={{ backgroundImage: `url(${getLogoUrl(branchName)})` }}
        id={branchName}
        alt={branchName}
        tabIndex={'0'}
        className={'branch-logo ' + (addClassNames(branchName, classNameProps))}
        onMouseEnter={(e) => setHovered(e.target.id)}
        onFocus={(e) => focusElement(e.target.id)}
        onBlur={(e) => blurElement(e.target.id)}>
        {
          isSmallScreen &&
          <div
            style={{ backgroundImage: `url(${informationSign})` }}
            className='information-sign' ></div>
        }
      </div>
      {
        !isSmallScreen ?
          <div
            onMouseEnter={() => setHovered(branchName)}
            onFocus={() => focusElement(branchName)}
            onBlur={() => blurElement(branchName)}
            tabIndex={'0'}
            className={'branch-name ' + (addClassNames(branchName, classNameProps, 'lightgrey-background black-color'))}
          >{branchName}
            <div>
              {getBranchDescription(branchName)}
            </div>
          </div>
          :
          <div>
            {getBranchDescription(branchName)}
          </div>
      }
      {
        showDropdown === branchName &&
          <Dropdown
            setFocused={setFocused}
            contentfulData={contentfulData}
            useShowDropdown={[showDropdown, setShowDropdown]}
            isSmallScreen={isSmallScreen}
            navigate={navigate}
            treatmentsRef={treatmentsRef}
            setTreatmentClick={setTreatmentClick} />
      }
    </div>
  )
}

export default Branch