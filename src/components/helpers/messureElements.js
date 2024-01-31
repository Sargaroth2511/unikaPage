export const getElementsHeight = (id) => {
    if(document.getElementById(id))
    return document.getElementById(id).clientHeight;
  }
  
  export const getElementsWidth = (id) => {
    if(document.getElementById(id))
    return document.getElementById(id).offsetWidth;
  }