import React, { useEffect, useState } from 'react'


const BurgerBranchMenu = ( {contentfulData, branch, setShowBurgermenu, navigate, treatmentsRef } ) => {
    
    const [menuLoaded, setMenuLoaded] = useState(false)

    const treatmentClickHandle = i => {
        navigate(`unikaPage/${branch}`)
        setTimeout(() => {
            treatmentsRef.current[i].scrollIntoView({behavior:'smooth'})
            setShowBurgermenu(false)
        }, 100);
    }

    useEffect(() => {
        setMenuLoaded(true)
        return function cleanup (){
            setMenuLoaded(false)
        }
    },[])

    const addClassNames = () => {
        return menuLoaded ? 'expand' : '';
    }

    return (
        <div className={'burgersubmenuwrapper ' + (addClassNames())}>
            <div>
                {contentfulData.map((data, i) => {
                    const treatment = data.slideTitle
                    if (data.slideBranch === branch) 
                    return (
                    <div className={'burgerbranch'} 
                    id={treatment} key={treatment} onClick={()=>treatmentClickHandle(i)}>
                    {treatment}</div>
                    )
                })}
            </div>
        </div> 
  )
}

export default BurgerBranchMenu