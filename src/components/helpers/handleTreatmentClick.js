export const getElementsHeight = (id) => {
  if(document.getElementById(id))
  return document.getElementById(id).clientHeight;
}

export const getElementsWidth = (id) => {
  if(document.getElementById(id))
  return document.getElementById(id).offsetWidth;
}

const handleTreatmentClick = (treatmentsRef, i) => {
  const height = getElementsHeight('navbarline') 
    const element = treatmentsRef.current[i]
    const y = element.getBoundingClientRect().top + window.pageYOffset - (height+30);

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  export default handleTreatmentClick;