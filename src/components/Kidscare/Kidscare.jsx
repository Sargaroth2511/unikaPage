import React, { useState, useEffect, useRef } from 'react'



const Kidscare = ( {contentfulData, treatmentsRef, isSmallScreen} ) => {

  return (
    <div>
      <div className='contents'>
        {!isSmallScreen && contentfulData.map((treatment, i) =>(
          treatment.slideBranch === 'Kidscare' &&
          <h3 onClick={()=>treatmentsRef.current[i].scrollIntoView({behavior:'smooth'})}
           key={treatment.slideTitle}>
           {treatment.slideTitle}</h3>
        ))}
      </div>
      {contentfulData.map((treatment, i)=>(
        treatment.slideBranch === 'Kidscare' &&
        <div className='treatmentcontainer' key={`${treatment.slideTitle}container`} 
         ref={el => treatmentsRef.current[i] = el}>
          <h2>{treatment.slideTitle}</h2>
          <h4>{treatment.slideDescription}</h4>
          <div>
            <div className='imagecontainer' style={{backgroundImage: `url(${treatment.slideUrl})`}}></div>
            <div className="completedescription">{treatment.slideCompleteDescription}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Kidscare

      {/* <button onClick={()=> itemsRef.current[5].scrollIntoView({behavior:'smooth'})}>testscroll</button> */}
