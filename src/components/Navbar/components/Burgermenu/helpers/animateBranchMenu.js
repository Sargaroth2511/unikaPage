const animateBranchMenu = (activateTypeMenu, showBranchMenu, branch) => {
    if(!activateTypeMenu) return showBranchMenu === branch ? 'glow' : ''
    else return activateTypeMenu === branch ? 'glow' : ''
}

export default animateBranchMenu