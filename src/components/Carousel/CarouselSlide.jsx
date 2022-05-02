import React, { useState } from 'react'
import next from './../../Images/Carousel/next.png'

const CarouselSlide = props => {
    const { slideUrl, slideTitle, slideDescription, slideIndex, setSlideIndex } = props
    const [hovered, setHovered] = useState(false)


  return (
    <div className="slideWrap" style={{backgroundImage: `url(${slideUrl})`}}>
        <div className="textwrap"></div>
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
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
    </div>
  )
}

export default CarouselSlide