const animateTypeMenu = (branch, activateTypeMenu, serviceType, type, showBranchMenu) => {
    console.log(showBranchMenu, branch)
    let classes = [];
    serviceType === branch+type ? classes.push('glow') : classes.push('')
    showBranchMenu ? classes.push('reducefontsize') : classes.push('increasefontsize')
    activateTypeMenu === branch ? classes.push('animateshowburgermenu') : classes.push('animateremoveburgermenu')
    return classes.join(' ')
}

export default animateTypeMenu
