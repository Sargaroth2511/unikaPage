import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import next from './../../Images/Carousel/next.png'

const CarouselSlide = props => {
    const { slideUrl, slideTitle, slideDescription, 
            slideIndex, setSlideIndex, slideCompleteDescription, slideBranch } = props
    const [hovered, setHovered] = useState(false)
    const [flipped, setFlipped] = useState(false)

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

    const flipCard = () => {
      setFlipped(!flipped)
    }




  return (
    <div className='slideContainer'>
      {!flipped && <div className="slideWrap" style={{backgroundImage: `url(${slideUrl})`}}
      onClick={()=>flipCard()} {...swipeHandler}>
        <div className={'textwrap ' +(addClassNames(slideBranch))}>
          <h2>{slideTitle}</h2>
          <p>{slideDescription}</p>
        </div>
        <div>
            <img src={next} alt="arrow-left"id='slideArrowLeft'
            onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}
            className={`slide-arrow-left slide-arrow ${hovered === 'slideArrowLeft' ? 'hovered-left': ''}`}
            onClick={()=>setSlideIndex(slideIndex - 1)}/>
        </div>
        <div>
            <img src={next} alt="arrow-right" id='slideArrowRight'
            className={`slide-arrow-right slide-arrow ${hovered === 'slideArrowRight' ? 'hovered-right': ''}`}
            onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}
            onClick={()=>setSlideIndex(slideIndex + 1)}/>
        </div>
      </div>}
      {flipped && <div className='slideWrap' onClick={()=>flipCard()}
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