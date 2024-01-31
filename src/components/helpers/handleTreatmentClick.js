import { getElementsHeight } from "./messureElements";

const handleTreatmentClick = (treatmentsRef, i) => {
  const navBarBottom = getElementsHeight('navbar-line') 
  const topScreenDistance = navBarBottom+22
  const requestedTreatment = treatmentsRef.current[i]
  const yPosition = requestedTreatment.getBoundingClientRect().top + window.pageYOffset - topScreenDistance;
  const navbarLine = document.getElementById('navbar-line');


  [...navbarLine.classList].includes('top-line') ? window.scrollTo({top: yPosition+10, behavior: 'smooth'}) :
                                                   window.scrollTo({top: yPosition-30, behavior: 'smooth'})



}

export default handleTreatmentClick;

