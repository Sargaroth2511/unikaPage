import React, { useEffect, useState, useCallback } from 'react'
import { client } from '../../client';
import CarouselSlide from './CarouselSlide';

const Carousel = ( { contentfulData } ) => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);
    // const [carouselSlides, setCarouselSlides] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [flipped, setFlipped] = useState(false)

// Use Contentful Data from App

    // const extractCarouselSlides = useCallback(
    //     rawData => {
    //         const extractedSlides = rawData.map((slide) => {
    //             const { sys, fields } = slide;
    //             const { id } = sys;
    //             const slideTitle = fields.title;
    //             const slideDescription = fields.description;
    //             if(!fields.image) console.log(fields.title)
    //             const slideUrl = fields.image.fields.file.url;
    //             const slideBranch = fields.branch;
    //             const slideCompleteDescription = fields.completeDescription;
    //             const updateSlide = { id, slideTitle, slideDescription, slideUrl,
    //                                   slideBranch, slideCompleteDescription };
    //             return updateSlide;
    //         })
    
    //         setCarouselSlides(extractedSlides)
    // }, [])

    // const getCarouselSlides = useCallback(async () => {
    //     setIsCarouselLoading(true);
    //     try {
    //         const response = await client.getEntries({content_type: 'carousel'})
    //         const responseData = response.items
    //         if (responseData){
    //             extractCarouselSlides(responseData)
    //         } else {
    //             setCarouselSlides([])
    //         }
    //         setIsCarouselLoading(false);
    //     } catch (error) {
    //         console.log(error)
    //         setIsCarouselLoading(false);
    //     }
    // },[extractCarouselSlides])

    // useEffect(()=> {
    //     getCarouselSlides();
    // },[getCarouselSlides])

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

    // useEffect(() => {
    //     setContentfulData(carouselSlides)
    // }, [carouselSlides])




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
                isCarouselLoading={isCarouselLoading}/>
            )
            }
        })}
    </div>
  )
}

export default Carousel