import React, { useEffect, useState, useCallback } from 'react'
import { client } from '../../client';
import CarouselSlide from './CarouselSlide';

const Carousel = () => {
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    console.log('test')

    const extractCarouselSlides = useCallback(
        rawData => {
            const extractedSlides = rawData.map((slide) => {
                const { sys, fields } = slide;
                const { id } = sys;
                const slideTitle = fields.title;
                const slideDescription = fields.description;
                const slideUrl = fields.image.fields.file.url;
                const updateSlide = { id, slideTitle, slideDescription, slideUrl };
                return updateSlide;
            })
    
            setCarouselSlides(extractedSlides)
    }, [])

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
        if(slideIndex === carouselSlides.length) setSlideIndex(0)
        if(slideIndex === -1) setSlideIndex(carouselSlides.length-1)

        const slideInterval = setInterval(() => {
            console.log(slideIndex, carouselSlides.length)
            if(slideIndex <= carouselSlides.length -1) setSlideIndex(slideIndex + 1)
            if(slideIndex === carouselSlides.length -1) setSlideIndex(0)
        }, 5000);

        return () => clearInterval(slideInterval);
    },[carouselSlides, slideIndex])

    // useEffect(()=> {
    //     if(slideIndex === carouselSlides.length) setSlideIndex(0)
    //     if(slideIndex === -1) setSlideIndex(carouselSlides.length-1)
    // },[slideIndex])


  return (
    <div>
        {carouselSlides.map((item, index)=> {
            if(index === slideIndex){
                const { id, slideUrl, slideTitle, slideDescription } = item
                return (
                <CarouselSlide key={id} slideUrl={slideUrl} slideTitle={slideTitle} 
                slideDescription={slideDescription} index={index} setSlideIndex={setSlideIndex} 
                slideIndex={slideIndex}/>
            )
            }
            
        })}
    </div>
  )
}

export default Carousel