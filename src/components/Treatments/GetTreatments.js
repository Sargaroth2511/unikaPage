import { useState, useCallback, useEffect } from 'react'

import { client } from '../../client';

const GetTreatments = () => {
    const [contentfulData, setContentfulData] = useState([])
    const [isCarouselLoading, setIsCarouselLoading] = useState(true);
    const [carouselSlides, setCarouselSlides] = useState([]);

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
                const slideType = fields.type
                const updateSlide = { id, slideTitle, slideDescription, slideUrl,
                                      slideBranch, slideCompleteDescription, slideType };
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

    useEffect(() => {
        carouselSlides.sort((a,b) => a.slideTitle.localeCompare(b.slideTitle, 'de'))
        .sort((a,b) => a.slideType.localeCompare(b.slideType, 'de'))
        setContentfulData(carouselSlides)
    }, [carouselSlides])


    
    return {contentfulData:contentfulData, dataIsLoading: isCarouselLoading};
}

export default GetTreatments