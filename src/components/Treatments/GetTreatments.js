import React, { useState, useCallback, useEffect } from 'react'

import { client } from '../../client';

const GetTreatments = () => {
    const [contentfulData, setContentfulData] = useState([])
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);
    const [carouselSlides, setCarouselSlides] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    const extractCarouselSlides = useCallback(
        rawData => {
            const extractedSlides = rawData.map((slide) => {
                const { sys, fields } = slide;
                const { id } = sys;
                const slideTitle = fields.title;
                const slideDescription = fields.description;
                if(!fields.image) console.log(fields.title)
                const slideUrl = fields.image.fields.file.url;
                const slideBranch = fields.branch;
                const slideCompleteDescription = fields.completeDescription;
                const updateSlide = { id, slideTitle, slideDescription, slideUrl,
                                      slideBranch, slideCompleteDescription };
                return updateSlide;
            })
    
            setCarouselSlides(extractedSlides)
    }, [])

    const getCarouselSlides = useCallback(async () => {
        setIsCarouselLoading(true);
        try {
            const response = await client.getEntries({content_type: 'carousel'})
            const responseData = response.items
            if (responseData){
                extractCarouselSlides(responseData)
            } else {
                setCarouselSlides([])
            }
            setIsCarouselLoading(false);
        } catch (error) {
            console.log(error)
            setIsCarouselLoading(false);
        }
    },[extractCarouselSlides])

    useEffect(()=> {
        getCarouselSlides();
    },[getCarouselSlides])

    useEffect(()=> {
        if(slideIndex === carouselSlides.length) setSlideIndex(0)
        if(slideIndex === -1) setSlideIndex(carouselSlides.length-1)

        const slideInterval = setInterval(() => {
            if(slideIndex <= carouselSlides.length -1) setSlideIndex(slideIndex + 1)
            if(slideIndex === carouselSlides.length -1) setSlideIndex(0)
        }, 50000);

        return () => clearInterval(slideInterval);
    },[carouselSlides, slideIndex])

    useEffect(() => {
        setContentfulData(carouselSlides)
    }, [carouselSlides])
    
    return contentfulData;
}

export default GetTreatments