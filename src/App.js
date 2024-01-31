import { useMediaQuery } from 'react-responsive';


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GetTreatments from "./components/Treatments/GetTreatments";
import { getElementsHeight } from './components/helpers/messureElements';

import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';


import Router from './routes';

function App() {
  const [contentfulData, setContentfulData] = useState([]);
  const [elementsHeight, setElementsHeight] = useState(0);
  const treatments = GetTreatments().contentfulData;
  const dataIsLoading = GetTreatments().dataIsLoading;
  const treatmentsRef = useRef([]);
  // const isSmallScreen = useMediaQuery( {maxWidth: 800} );
  const screenSize = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {

    const setScreenSize = () => {
      screenSize.current = window.innerWidth;
      setElementsHeight(getElementsHeight('navbar'));
      screenSize.current <= 800 ? setIsSmallScreen(true) : setIsSmallScreen(false);
    };

    console.log(elementsHeight)

    screenSize.current = window.innerWidth;
    screenSize.current <= 800 ? setIsSmallScreen(true) : setIsSmallScreen(false)
    let initHeight = getElementsHeight('navbar');
    setElementsHeight(initHeight);

    window.addEventListener("resize", setScreenSize)
    return () => {
      window.removeEventListener("resize", setScreenSize)
    };
  }, []);


  useEffect(() => {
    treatmentsRef.current = treatmentsRef.current.slice(0, treatments.length);
 }, [treatments]);

  useEffect(() => {
    setContentfulData(treatments)
  }, [treatments])

  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter basename='/unikaPage'>
          <Navbar contentfulData={contentfulData} treatmentsRef={treatmentsRef} 
           isSmallScreen={isSmallScreen} useElementsHeight={[elementsHeight, setElementsHeight]} />
          <Router contentfulData={contentfulData} 
            treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} 
            elementsHeight={elementsHeight} dataIsLoading={dataIsLoading} 
            screenSize={screenSize} />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
