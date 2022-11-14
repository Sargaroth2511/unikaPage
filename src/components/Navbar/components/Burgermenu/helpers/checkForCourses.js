const checkForCourses = (cmsData, branch) => {
    return cmsData.some(data => (
        data.slideBranch === branch && data.slideType === 'Kurs'
    ))
}

export default checkForCourses