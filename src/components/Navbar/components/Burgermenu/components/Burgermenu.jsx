import React, { useState } from 'react'

import rightarrow from './../../../../../Images/NavBar/right-arrow.png'
import BurgerBranchMenu from './BurgerBranchMenu'
import OutsideAlerter from '../../../../helpers/OutsideAlerter'




const Burgermenu = ( {contentfulData, setShowBurgermenu, navigate, treatmentsRef} ) => {
    const [showSubmenu, setShowSubmenu] = useState(false)

    const toggleSubmenu = branch => {
        showSubmenu !== branch ? setShowSubmenu(branch) : setShowSubmenu(false);
    }

  return (
      <OutsideAlerter showMenu={setShowBurgermenu} exception={'burger'}>
        <div className={'burgermenuwrapper '+(showSubmenu ? 'moveleft':'')}>
            <div className='burgermenu'>Kidscare
                <div><img className='rightarrow' src={rightarrow} alt="arrow-right"
                onClick={()=>toggleSubmenu('Kidscare')}/>
                </div>
            {showSubmenu === 'Kidscare' && 
            <BurgerBranchMenu contentfulData={contentfulData} branch={'Kidscare'} 
            setShowBurgermenu={setShowBurgermenu} navigate={navigate} 
            treatmentsRef={treatmentsRef} />}
        </div>
        <div className='burgermenu'>Cosmetologie
                <div><img className='rightarrow' src={rightarrow} alt="arrow-right"
                onClick={()=>toggleSubmenu('Cosmetologie')}/></div>
            </div>
            {showSubmenu === 'Cosmetologie' && 
            <BurgerBranchMenu contentfulData={contentfulData} branch={'Cosmetologie'} 
            setShowBurgermenu={setShowBurgermenu} navigate={navigate} 
            treatmentsRef={treatmentsRef} />}
        
        <div className='burgermenu'>Bodyconcept
                <div><img className='rightarrow' src={rightarrow} alt="arrow-right"
                onClick={()=>toggleSubmenu('Bodyconcept')}/></div>
            </div>
            {showSubmenu === 'Bodyconcept' && 
            <BurgerBranchMenu contentfulData={contentfulData} branch={'Bodyconcept'} 
            setShowBurgermenu={setShowBurgermenu} navigate={navigate} 
            treatmentsRef={treatmentsRef} />}
       
            <div className='burgermenu'>Curamedix
                <div><img className='rightarrow' src={rightarrow} alt="arrow-right"
                onClick={()=>toggleSubmenu('Curamedix')}/></div>
            </div>
            {showSubmenu === 'Curamedix' && 
            <BurgerBranchMenu contentfulData={contentfulData} branch={'Curamedix'} 
            setShowBurgermenu={setShowBurgermenu} navigate={navigate} 
            treatmentsRef={treatmentsRef} />}
           

            <div className='burgermenu'>Kontakt</div>
            <div className='burgermenu'>Shop</div>
            <div className='burgermenu'>Über uns</div>
            <div className='burgermenu'>...mehr
                <div><img className='rightarrow' src={rightarrow} alt="arrow-right"/></div>
            </div>
        </div>

      </OutsideAlerter>
    
  )
}

export default Burgermenu