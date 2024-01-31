import React, { useEffect } from 'react'
import { useRoutes, useNavigate, useSearchParams } from "react-router-dom";


import Carousel from "./components/Slideshow/Carousel";

import BranchPage from './components/BranchPage';
import ShopTemp from './components/ShopTemp';
import Contact from './components/contact/Contact';
import About from './components/About';

const Router = ({contentfulData, dataIsLoading, isSmallScreen, treatmentsRef, 
    elementsHeight, screenSize}) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        for (const entry of searchParams.entries()) {
            const [param] = entry;
            switch (param) {
                case '/Kidscare':
                    navigate('/Kidscare', {replace: true})
                    break;
                case '/Cosmetologie':
                    navigate('/Cosmetologie', {replace: true})
                    break;
                case '/Bodyconcept':
                    navigate('/Bodyconcept', {replace: true})
                    break;
                case '/Curamedix':
                    navigate('/Curamedix', {replace: true})
                    break;
                default:
                    navigate('/')
                    break;
            }
          }
    }, [searchParams, navigate])


    let element = useRoutes([
        {path:'/', element: <Carousel contentfulData={contentfulData} elementsHeight={elementsHeight}/>},
        {path:'/Kidscare', element: <BranchPage contentfulData={contentfulData} 
        treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} branch={'Kidscare'} 
        elementsHeight={elementsHeight} screenSize={screenSize} />},
        {path:'/Cosmetologie', element: <BranchPage contentfulData={contentfulData} 
        treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} branch={'Cosmetologie'} 
        elementsHeight={elementsHeight} screenSize={screenSize} />},
        {path:'/Bodyconcept', element: <BranchPage contentfulData={contentfulData} 
        treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} branch={'Bodyconcept'} 
        elementsHeight={elementsHeight} screenSize={screenSize} />},
        {path:'/Curamedix', element: <BranchPage contentfulData={contentfulData} 
        treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} branch={'Curamedix'} 
        elementsHeight={elementsHeight} screenSize={screenSize} />},
        {path:'/Shop', element: <ShopTemp />},
        {path:'/Contact', element: <Contact elementsHeight={elementsHeight} 
        isSmallScreen={isSmallScreen} />},
        {path:'/About', element: <About elementsHeight={elementsHeight}/>},
    ])  
  return element;
   
}

export default Router;

