const typeClickHandle = (e, branch, setShowBranchMenu, setServiceType, type) => {
    if(e.target.id.includes('arrowUp')) return;
    setServiceType(branch+type)
    setShowBranchMenu(branch)
}

export default typeClickHandle;