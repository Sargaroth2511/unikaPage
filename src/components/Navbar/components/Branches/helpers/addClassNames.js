const addClassNames = (id, {hovered, focused, blured, location} ,locationClass) => {
    let classNames = {};    
    switch (id) {
      case 'Kidscare':
        classNames.hoverClass = 'glowgrey';
        classNames.focusClass = 'glowgrey focusbranch';
        break;
      case 'Cosmetologie':
        classNames.hoverClass = 'glowgreen';
        classNames.focusClass = 'glowgreen focusbranch';
        break;
      case 'Bodyconcept':
        classNames.hoverClass = 'glowocher';
        classNames.focusClass = 'glowocher focusbranch';
        break;
      case 'Curamedix':
        classNames.hoverClass = 'glowblue';
        classNames.focusClass = 'glowblue focusbranch';
        break;
      default:
        console.log('ClassName Error')
        break;
    } 

    let addedClassNames = [];
    if(hovered === id) addedClassNames.push(classNames.hoverClass);
    if(focused === id) addedClassNames.push(classNames.focusClass);
    if(blured === id) addedClassNames.push('faded')
    if(location.pathname === `/unikaPage/${id}`) addedClassNames.push(locationClass)
    return addedClassNames.join(' ') 
}

export default addClassNames