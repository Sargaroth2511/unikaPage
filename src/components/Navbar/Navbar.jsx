import React, { useState } from 'react'
import logo from '../../Images/NavBar/UnikaLogo.png';
import kidscarelogo from '../../Images/NavBar/KidsCareLogo.png';
import cosmetologielogo from '../../Images/NavBar/CosmetologieLogo.png';
import bodyconceptlogo from '../../Images/NavBar/BodyConceptLogo.png';
import curamedixlogo from '../../Images/NavBar/CuramedixLogo.png';

const Navbar = () => {
    const [hovered, setHovered] = useState(false)
    

  return (
    <div>
        <div className="navbarwrapper">
            <div className="logo" style={{backgroundImage:`url(${logo})`}} alt="logo"></div>
            <div className="sociallinkwrapper">
                <a href="#" className="sociallink fa fa-instagram"></a>
                <a href="#" className="sociallink fa fa-facebook"></a>
                <a className="sociallink material-icons-outlined">email</a>
                <a className="sociallink material-icons-outlined">phone</a>
            </div>
            <div className="branchwrapper">
                <div className='branch'>
                    <div style={{backgroundImage: `url(${kidscarelogo})`}}
                    id='kidsCareLogo' className={hovered==='kidsCareLogo' ? 'kidscarelogo branchlogo': 'branchlogo'} 
                    alt="kidscare" onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}>
                    </div>    
                    <div className="branchname">
                        KIDSCARE
                    </div>
                </div>
                <div className='branch'>
                    <div style={{backgroundImage: `url(${cosmetologielogo})`}}
                    id='cosmetologieLogo' className={hovered==='cosmetologieLogo' ? 'cosmetologielogo branchlogo': 'branchlogo'}
                    alt="cosmetologie" onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}>
                    </div>
                    <div className="branchname">
                        COSMETOLOGIE
                    </div>
                </div>
                <div className='branch'>
                <div style={{backgroundImage: `url(${bodyconceptlogo})`}}
                    id='bodyConceptLogo' className={hovered==='bodyConceptLogo' ? 'bodyconceptlogo branchlogo': 'branchlogo'} 
                    alt="bodyconcept" onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}>
                    </div>
                    <div className="branchname">
                        BODYCONCEPT
                    </div>
                </div>
                <div className='branch'>
                <div style={{backgroundImage: `url(${curamedixlogo})`}}
                    id='curamedixLogo' className={hovered==='curamedixLogo' ? 'curamedixlogo branchlogo': 'branchlogo'}
                    alt="curamedix" onMouseEnter={(e)=>setHovered(e.target.id)} onMouseLeave={()=>setHovered(false)}>
                    </div>
                    <div className="branchname">
                        CURAMEDIX
                    </div>
                </div>
            </div>
            <div className="navbarline"></div>
        </div>
    </div>
  )
}

export default Navbar