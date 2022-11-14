import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import next from './../../Images/Carousel/next.png'
import spinnner from '../../Images/Carousel/Spinner-5.gif'


const CarouselSlide = props => {
    const { slideUrl, slideTitle, slideDescription, 
            slideIndex, setSlideIndex, slideCompleteDescription, 
            slideBranch, useFlipped, isCarouselLoading } = props
    const [hovered, setHovered] = useState(false)
    const [flipped, setFlipped] = useFlipped;

    const swipeHandler = useSwipeable(
      {onSwipedLeft: ()=>setSlideIndex(slideIndex - 1), preventScrollOnSwipe: true ,
      onSwipedRight: ()=>setSlideIndex(slideIndex + 1), preventScrollOnSwipe: true}
      )

    const addClassNames = slideBranch => {
      switch (slideBranch) {
        case 'Kidscare':
          return 'Kidscarefocus'
        case 'Cosmetologie':
            return 'Cosmetologiefocus'
        case 'Bodyconcept':
          return 'Bodyconceptfocus'
        case 'Curamedix':
          return 'Curamedixfocus'        
        default:
          break;
      }
    }

    const flipCard = e => {
      const arrowIDs = ['slideArrowLeft', 'slideArrowRight']
      !arrowIDs.includes(e.target.id) && setFlipped(!flipped);
    }

    const arrowClickHandler = (e, factor) => {
      console.log(e.target.id)
      setSlideIndex(slideIndex + (1*factor))
    }






  return (
    <div className='slideContainer'>
      {!flipped && <div className="slideWrap" style={{backgroundImage: `url(${slideUrl})`}}
      onClick={(e)=>flipCard(e)} {...swipeHandler}>
        <div className={'textwrap ' +(addClassNames(slideBranch))}>
          <h2>{slideTitle}</h2>
          <p>{slideDescription}</p>
        </div>
        <div>
            <img src={next} alt="arrow-left"id='slideArrowLeft'
            onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}
            className={`slide-arrow-left slide-arrow ${hovered === 'slideArrowLeft' ? 'hovered-left': ''}`}
            onClick={(e)=>arrowClickHandler(e, -1)}/>
        </div>
        <div>
            <img src={next} alt="arrow-right" id='slideArrowRight'
            className={`slide-arrow-right slide-arrow ${hovered === 'slideArrowRight' ? 'hovered-right': ''}`}
            onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}
            onClick={(e)=>arrowClickHandler(e, 1)}/>
        </div>
      </div>}
      {flipped && <div className='slideWrap' onClick={(e)=>flipCard(e)}
        style={{backgroundImage: `url(${slideUrl})`}}>
          <div className="slideback">
            <h2>{slideTitle}</h2>
            <h3>{slideDescription}</h3>
            <p>{slideCompleteDescription}</p>
          </div>
      </div>}
    </div>
    
  )
}

export default CarouselSlide