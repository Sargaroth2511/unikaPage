import React, { useEffect, useState, useCallback } from 'react'
import { client } from '../../client';
import CarouselSlide from './CarouselSlide'

const Carousel = ( { contentfulData, elementsHeight } ) => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);
    const [slideIndex, setSlideIndex] = useState(0);
    const [flipped, setFlipped] = useState(false)


    useEffect(()=> {
        if(slideIndex === contentfulData.length) setSlideIndex(0)
        if(slideIndex === -1) setSlideIndex(contentfulData.length-1)

        const slideInterval = setInterval(() => {
            if(!flipped){
                if(slideIndex <= contentfulData.length -1) setSlideIndex(slideIndex + 1)
                if(slideIndex === contentfulData.length -1) setSlideIndex(0)
            }
        }, 8000);

        return () => clearInterval(slideInterval);
    },[contentfulData, slideIndex, flipped])

  return (
    <div>
        {contentfulData.map((item, index)=> {
            if(index === slideIndex){
                const { id, slideUrl, slideTitle, slideDescription,
                        slideBranch, slideCompleteDescription } = item
                return (
                <CarouselSlide key={id} slideUrl={slideUrl} slideTitle={slideTitle} 
                slideDescription={slideDescription} slideCompleteDescription={slideCompleteDescription}
                slideBranch={slideBranch} index={index} setSlideIndex={setSlideIndex} 
                slideIndex={slideIndex} useFlipped={[flipped, setFlipped]}
                isCarouselLoading={isCarouselLoading} elementsHeight={elementsHeight}/>
            )
            }
        })}
    </div>
  )
}

export default Carousel