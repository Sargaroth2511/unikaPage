import React from 'react'

import Branch from './Branch';

const Branches = ( { useHovered, isSmallScreen, useFocused, useBlured, 
                     contentfulData, navigate, treatmentsRef, location } ) => {

    const branches = ['Kidscare', 'Cosmetologie', 'Bodyconcept', 'Curamedix']



  return (
    <div className="branch-wrapper">
        {
        branches.map(branchName => (
            <Branch key={branchName} isSmallScreen={isSmallScreen} branchName={branchName} useBlured={useBlured}
            useHovered={useHovered} useFocused={useFocused} location={location}
            contentfulData={contentfulData} navigate={navigate} treatmentsRef={treatmentsRef} />
        ))
        }
    </div>
  )
}

export default Branches;