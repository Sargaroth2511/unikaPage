import React, { useEffect, useState, useCallback } from 'react'

import next from './../Images/Carousel/next.png'
import { getElementsWidth } from './helpers/handleTreatmentClick';



const BranchPage = ( {contentfulData, treatmentsRef, branch, 
                      elementsHeight, screenSize} ) => {

  const [pageYOffset, setPageYOffset] = useState(window.scrollY);
  const [imageWidth, setImageWidth] = useState(0);
  const [treatmentContainerRightCorner, setTreatmentContainerRightCorner] = useState(0)





  useEffect(()=> {
    const el = document.getElementsByClassName('treatment-container');


    screenSize.current <= 900 ? setImageWidth(screenSize.current*0.54)
                                :setImageWidth(900*0.54);
      if(el.length !==0)
      setTreatmentContainerRightCorner(el[0].getBoundingClientRect().right)
    

    const changeY = () => {
      setPageYOffset(window.scrollY)
    }
    const handleResize = () => {
      screenSize.current <= 900 ? setImageWidth(screenSize.current*0.54)
                                  :setImageWidth(900*0.54);
      setTreatmentContainerRightCorner(el[0].getBoundingClientRect().right)
    } 

    window.addEventListener('scroll', changeY)
    window.addEventListener('resize', handleResize)



    return () => {
      window.removeEventListener('scroll', changeY);
      window.removeEventListener('resize', handleResize);

    }

  }, [contentfulData])

  const calcImgHeight = imageWidth => {
    return imageWidth ? imageWidth/1.5 : 0;
  }

  const calcArrowPosition = treatmentContainerRightCorner => {
    return screenSize.current <= 600 ? {'right' : 0}:{'left' : treatmentContainerRightCorner-10}

  }




  return (
    <div className='branchcontainer' 
    // style={{ marginTop: `${elementsHeight+10}px` }}
    >
      { pageYOffset !== 0 && 
      <div className="to-top-arrow" style={calcArrowPosition(treatmentContainerRightCorner)}>
      <img src={next} alt="back to top" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}/>
      </div>}
      <div className='contents'>
        {/* {!isSmallScreen && contentfulData.map((treatment, i) =>(
          treatment.slideBranch === branch &&
          <h3 onClick={()=>handleTreatmentClick(treatmentsRef, i)}
          key={treatment.slideTitle}>
          {treatment.slideTitle}</h3>
        ))} */}
      </div>
      {contentfulData.map((treatment, i)=>(
        treatment.slideBranch === branch &&
        <div className='treatment-container' key={`${treatment.slideTitle}container`} 
        ref={el => treatmentsRef.current[i] = el} id={treatment.slideTitle}>
          <h2>{treatment.slideTitle}</h2>
          <h4>{treatment.slideDescription}</h4>
          <div>
            {/* <div className='imagecontainer' style={{backgroundImage: `url(${treatment.slideUrl})`}}></div> */}
            <div className="img-container" id={'treatment-img'+i}>
              <img className='treatment-img' src={treatment.slideUrl} alt={treatment.slideTitle} 
              style={{'height' : calcImgHeight(imageWidth)}}/>
            </div>
            <div className="complete-description">{treatment.slideCompleteDescription}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BranchPage