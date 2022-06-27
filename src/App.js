import { useMediaQuery } from 'react-responsive';


import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Kidscare from "./components/Kidscare/Kidscare";
import GetTreatments from "./components/Treatments/GetTreatments";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import Cosmetologie from "./components/Cosmetologie/Cosmetologie";
import Bodyconcept from "./components/Bodyconcept/Bodyconcept";
import Curamedix from "./components/Curamedix/Curamedix";

function App() {
  const [contentfulData, setContentfulData] = useState([])
  const treatments = GetTreatments();
  const treatmentsRef = useRef([]);
  const isSmallScreen = useMediaQuery( {maxWidth: 700} )

  useEffect(() => {
    treatmentsRef.current = treatmentsRef.current.slice(0, treatments.length);
 }, [treatments]);

  useEffect(() => {
    setContentfulData(treatments)
  }, [treatments])
  

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter basename='/unikaPage'>
          <Navbar contentfulData={contentfulData} treatmentsRef={treatmentsRef} 
           isSmallScreen={isSmallScreen} />
          <Routes>
            {/* <Route path='/' element={<App />} /> */}
            <Route path='/unikaPage' element={
              <Carousel useContentful={[contentfulData, setContentfulData]}/>}/>
            <Route path='/unikaPage/Kidscare' element={<Kidscare contentfulData={contentfulData} 
             treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} />}/>
            <Route path='/unikaPage/Cosmetologie' element={<Cosmetologie contentfulData={contentfulData} 
             treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} />}/>
            <Route path='/unikaPage/Bodyconcept' element={<Bodyconcept contentfulData={contentfulData} 
             treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} />}/>
            <Route path='/unikaPage/Curamedix' element={<Curamedix contentfulData={contentfulData} 
             treatmentsRef={treatmentsRef} isSmallScreen={isSmallScreen} />}/>
            {/* <Route index element={<Carousel/>}/> */}
          </Routes>       
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
