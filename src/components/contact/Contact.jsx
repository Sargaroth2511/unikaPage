import React from 'react';

import Map from './Map';


const Contact = ( {elementsHeight, isSmallScreen} ) => {
  return (
    <div className={'contactcontainer ' +(isSmallScreen? 'onecolumn' : 'threecolumns')} 
    style={{ marginTop: `${elementsHeight+10}px` }}>
        <div className="adresscontainer">
            <div>
            <a href='https://goo.gl/maps/3PsFY9dAGmZejPcv9'>
            <div>Unika Institut
                    <br /> Am Schimmbad 8
                    <br /> 65618 Selters
                </div>
            </a>
                
                <Map />
            </div>
        </div>
        <div className="phoneandemailcontainer">
            <div>Telefon: 
                <a href="tel:06483911611"> 06483/ 911611</a>
            </div>
            <div>Email:
            <a href='mailto:unika-institut@gmx.de'> unika-institut@gmx.de</a>
            </div>
        </div>
        <div className="socialmediacontainer">
            <div className='socialmediatitle'>Social Media </div>
            <div>
                <a href="https://www.instagram.com/unika_institut_selters/" 
                    className="fa fa-instagram"> unika_institut_selters</a>
            </div> 
            <div>
                <a href="https://www.instagram.com/kidscare_selters/" 
                    className="fa fa-instagram"> kidscare_selters</a>
            </div> 
            <div>
                <a href="https://www.instagram.com/cosmetologie_selters/" 
                    className="fa fa-instagram"> cosmetologie_selters</a>
            </div> 
            <div>
                <a href="https://www.instagram.com/bodyconcept_selters/" 
                    className="fa fa-instagram"> bodyconcept_selters</a>
            </div> 
            <div>
                <a href="https://www.instagram.com/curamedix_selters/" 
                    className="fa fa-instagram"> curamedix_selters</a>
            </div> 
            <div>
                <a href="https://www.facebook.com/Unika-Institut-113446341251233" 
                    className="fa fa-facebook"> Unika Institut</a>
            </div> 
        </div>
    </div>
  )
}

export default Contact