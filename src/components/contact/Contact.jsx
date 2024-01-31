import React from 'react';

import Map from './Map';
import Social from './Social';


const Contact = ({ elementsHeight, isSmallScreen }) => {
    return (
        <div
            className={'contact-container ' + (isSmallScreen ? 'one-column' : 'three-columns')}>
            <div
                className="adress-container">
                <div>
                    <a
                        href='https://goo.gl/maps/3PsFY9dAGmZejPcv9'>
                        <div> Unika Institut
                            <br /> Am Schimmbad 8
                            <br /> 65618 Selters
                        </div>
                    </a>
                    <Map />
                </div>
            </div>
            <div
                className="phone-email-container">
                <div> Telefon:
                    <a
                        href="tel:06483911611"> 06483/ 911611
                    </a>
                </div>
                <div> Email:
                    <a
                        href='mailto:unika-institut@gmx.de'> unika-institut@gmx.de
                    </a>
                </div>
            </div>
            <Social />
        </div>
    )
}

export default Contact