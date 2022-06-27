import React, { useState, useEffect } from 'react'
import Dropdown from './dropdown/components/Dropdown';

import kidscarelogo from '../../../Images/NavBar/KidsCareLogo.png';
import cosmetologielogo from '../../../Images/NavBar/CosmetologieLogo.png';
import bodyconceptlogo from '../../../Images/NavBar/BodyConceptLogo.png';
import curamedixlogo from '../../../Images/NavBar/CuramedixLogo.png';
import informationSign from '../../../Images/NavBar/information.png'

const Branches = ( { useHovered, isSmallScreen, useFocused, useBlured, 
                     contentfulData, navigate, treatmentsRef, location } ) => {
    const [hovered, setHovered] = useHovered;
    const [focused, setFocused] = useFocused;
    const [blured, setBlured] = useBlured;

    const [showDropdown, setShowDropdown] = useState(false)
    const [treatmentClick, setTreatmentClick] = useState(false);

    const addClassNames = (id, hoverClass, focusClass, locationClass) => {
        let addedClassNames = [];
        if(hovered === id) addedClassNames.push(hoverClass);
        if(focused === id) addedClassNames.push(focusClass);
        if(blured === id) addedClassNames.push('faded')
        if(location.pathname === `/unikaPage/${id}`) addedClassNames.push(locationClass)
        return addedClassNames.join(' ') 
    }

    const blurElement = (id) => {
        setFocused(false);
        setBlured(id);
    }

    const focusElement = (id) => {
        console.log(id)
        setFocused(id);
        if(blured ===id){
            setBlured(false);
        }
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    useEffect(()=> {
        setShowDropdown(focused);
        const branches = ['Kidscare', 'Cosmetologie', 'Bodyconcept', 'Curamedix']
        if(!focused){
            branches.includes(hovered) && setShowDropdown(hovered)
        }
        if(treatmentClick){
            setHovered(false)
            setTreatmentClick(false)
        }
    }, [hovered, focused, treatmentClick])



  return (
    <div className="branchwrapper">
        <div className='branch' onMouseLeave={()=>handleMouseLeave()}>
            {isSmallScreen && <div>KIDSCARE</div>}

            <div style={{backgroundImage: `url(${kidscarelogo})`}}
            id='Kidscare' alt="kidscare" tabIndex={'0'}
            className={'branchlogo ' + (addClassNames('Kidscare', 'glowgrey', 'glowgrey focusbranch'))} 
            onMouseEnter={(e)=>setHovered(e.target.id)} 
            onFocus={(e)=>focusElement(e.target.id)} onBlur={(e)=>blurElement(e.target.id)}>
                {isSmallScreen && <div style={{backgroundImage: `url(${informationSign})`}}
                 className = 'informationsign' ></div>}
            </div>

            {!isSmallScreen ? 
            <div onMouseEnter={()=>setHovered('Kidscare')}
            onFocus={()=>focusElement('Kidscare')} onBlur={()=>blurElement('Kidscare')} 
            className={'branchname ' + 
            (addClassNames('Kidscare', 'branchnamehover', '', 'lightgreybackground blackcolor'))}
            tabIndex={'0'}>KIDSCARE
                <div>Kinder & Familie</div>
            </div>
            : <div>Kinder & Familie</div>}
            { showDropdown === 'Kidscare' && 
            <Dropdown useFocused={useFocused} contentfulData={contentfulData} 
            useShowDropdown={ [showDropdown, setShowDropdown] } isSmallScreen={isSmallScreen}
            navigate={navigate} treatmentsRef={treatmentsRef} 
            useTreatmentClick={ [treatmentClick, setTreatmentClick] }/>}    
        </div>

        <div className='branch' onMouseLeave={()=>handleMouseLeave()}>
            {isSmallScreen && <div>COSMETOLOGIE</div>}

            <div style={{backgroundImage: `url(${cosmetologielogo})`}}
            id='Cosmetologie' alt="Cosmetologie" tabIndex={'0'}
            className={'branchlogo ' + (addClassNames('Cosmetologie', 'glowgreen', 'glowgreen focusbranch'))}
             onMouseEnter={(e)=>setHovered(e.target.id)} 
             onFocus={(e)=>focusElement(e.target.id)} onBlur={(e)=>blurElement(e.target.id)}>
                  {isSmallScreen && <div style={{backgroundImage: `url(${informationSign})`}}
                 className = 'informationsign' ></div>}
            </div>
            {!isSmallScreen ? 
            <div onMouseEnter={()=>setHovered('Cosmetologie')}
            onFocus={()=>focusElement('Cosmetologie')} onBlur={()=>blurElement('Cosmetologie')}  
            className={'branchname ' + 
            (addClassNames('Cosmetologie', 'branchnamehover', '', 'mintgreenbackground blackcolor'))}
            tabIndex={'0'}>COSMETOLOGIE
                <div>Kosmetik</div>
            </div>
            : <div>Kosmetik</div>}
            { showDropdown === 'Cosmetologie' && 
            <Dropdown useFocused={useFocused} contentfulData={contentfulData} 
            useShowDropdown={ [showDropdown, setShowDropdown] } isSmallScreen={isSmallScreen}
            navigate={navigate} treatmentsRef={treatmentsRef}
            useTreatmentClick={ [treatmentClick, setTreatmentClick] }/>}    
        </div>
        <div className='branch' onMouseLeave={()=>handleMouseLeave()}>
        {isSmallScreen && <div>BODYCONCEPT</div>}

        <div style={{backgroundImage: `url(${bodyconceptlogo})`}}
            id='Bodyconcept' alt="Bodyconcept" tabIndex={'0'}
            className={'branchlogo ' + (addClassNames('Bodyconcept', 'glowocher', 'focusbranch glowocher'))} 
             onMouseEnter={(e)=>setHovered(e.target.id)} 
             onFocus={(e)=>focusElement(e.target.id)} onBlur={(e)=>blurElement(e.target.id)}>
                   {isSmallScreen && <div style={{backgroundImage: `url(${informationSign})`}}
                 className = 'informationsign' ></div>}
            </div>
            {!isSmallScreen ? 
            <div onMouseEnter={()=>setHovered('Bodyconcept')} 
            onFocus={()=>focusElement('Bodyconcept')} onBlur={()=>blurElement('Bodyconcept')} 
            className={"branchname " + 
            (addClassNames('Bodyconcept', 'branchnamehover', '', 'lightocherbackground blackcolor'))}
            tabIndex={'0'}>BODYCONCEPT
                <div>Körperästhetik</div>
            </div>
            : <div>Körperästhetik</div>}
            { showDropdown === 'Bodyconcept' && 
            <Dropdown useFocused={useFocused} contentfulData={contentfulData} 
            useShowDropdown={ [showDropdown, setShowDropdown] } isSmallScreen={isSmallScreen}
            navigate={navigate} treatmentsRef={treatmentsRef}
            useTreatmentClick={ [treatmentClick, setTreatmentClick] }/>}    
        </div>
        <div className='branch' onMouseLeave={()=>handleMouseLeave()}>
        {isSmallScreen && <div>CURAMEDIX</div>}

        <div style={{backgroundImage: `url(${curamedixlogo})`}}
            id='Curamedix' alt="Curamedix" tabIndex={'0'}
            className={'branchlogo ' + (addClassNames('Curamedix', 'glowblue', 'glowblue focusbranch'))}
            onMouseEnter={(e)=>setHovered(e.target.id)} 
            onFocus={(e)=>focusElement(e.target.id)} onBlur={(e)=>blurElement(e.target.id)}>
                  {isSmallScreen && <div style={{backgroundImage: `url(${informationSign})`}}
                 className = 'informationsign' ></div>}
            </div>
            {!isSmallScreen ?
            <div onMouseEnter={()=>setHovered('Curamedix')} 
            onFocus={()=>focusElement('Curamedix')} onBlur={()=>blurElement('Curamedix')} 
            className={"branchname " + 
            (addClassNames('Curamedix', 'branchnamehover', '', 'babybluebackground blackcolor'))}
            tabIndex={'0'}>CURAMEDIX
                <div>Prävention</div>
            </div>
            :<div>Prävention</div>}
            { showDropdown === 'Curamedix' &&
            <Dropdown useFocused={useFocused} contentfulData={contentfulData} 
            useShowDropdown={ [showDropdown, setShowDropdown] } isSmallScreen={isSmallScreen}
            navigate={navigate} treatmentsRef={treatmentsRef}
            useTreatmentClick={ [treatmentClick, setTreatmentClick] }/>}    
        </div>
    </div>
  )
}

export default Branches