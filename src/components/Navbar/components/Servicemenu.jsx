import React from 'react'

const Servicemenu = ( {location, showServicemenuButtons} ) => {
  return (
    <div className={'servicemenu-wrapper ' + 
                   (location.pathname ==='/' ? 'white-color ' : 'black-color ') +
                   (showServicemenuButtons ? 'font-size-1rem' : 'font-size-0')}>
        <div>Kidscare</div>
        <div>Cosmetologie</div>
        <div>Bodyconcept</div>
        <div>Curamedix</div>
    </div>
  )
}

export default Servicemenu