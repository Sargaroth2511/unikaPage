const animateTypeMenu = (branch, activateTypeMenu, serviceType, type, showBranchMenu) => {
    let classes = [];
    serviceType === branch+type ? classes.push('glow') : classes.push('')
    showBranchMenu ? classes.push('reduce-fontsize') : classes.push('increase-fontsize')
    activateTypeMenu === branch ? classes.push('animate-show-burgermenu') : classes.push('animate-remove-burgermenu')
    return classes.join(' ')
}

export default animateTypeMenu
