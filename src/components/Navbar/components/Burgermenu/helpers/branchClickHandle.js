import checkForCourses from "./checkForCourses";

const branchClickHandle = (e, branch, useActivateTypeMenu, useShowArrow, 
                           cmsData, useShowBranchMenu, setServiceType) => {
    const [activateTypeMenu, setActivateTypeMenu] = useActivateTypeMenu
    const [showArrow, setShowArrow] = useShowArrow
    const [showBranchMenu, setShowBranchMenu] = useShowBranchMenu

    if(e.target.id.includes('treatment') || e.target.id.includes('course')) return;



    setTimeout(() => {
        setServiceType(false)
    }, 100);
    

    if(!checkForCourses(cmsData, branch)) {
        setShowBranchMenu(branch);
        setActivateTypeMenu(false);
        setShowArrow(false)

    } else {
        activateTypeMenu===branch? setActivateTypeMenu(false) : setActivateTypeMenu(branch)  
        if(showBranchMenu!==branch){
            setShowBranchMenu(false)
        } 
        if(showArrow!==branch) setTimeout(() => {
            setShowArrow(branch)     
        }, 100)
        else if (showArrow===branch) {
            setShowArrow(false)
            setShowBranchMenu(false)
        }    
    }

    
}

export default branchClickHandle;