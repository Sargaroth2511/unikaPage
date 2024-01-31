const addClassNames = (id, {hovered, focused, blured, location} ,locationClass) => {
    let classNames = {};    
    switch (id) {
      case 'Kidscare':
        classNames.hoverClass = 'glow-grey';
        classNames.focusClass = 'glow-grey branch-focused';
        break;
      case 'Cosmetologie':
        classNames.hoverClass = 'glow-green';
        classNames.focusClass = 'glow-green branch-focused';
        break;
      case 'Bodyconcept':
        classNames.hoverClass = 'glow-ocher';
        classNames.focusClass = 'glow-ocher branch-focused';
        break;
      case 'Curamedix':
        classNames.hoverClass = 'glow-blue';
        classNames.focusClass = 'glow-blue branch-focused';
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