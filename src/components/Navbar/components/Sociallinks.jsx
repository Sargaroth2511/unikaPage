import React from 'react'

const Sociallinks = ({ isSmallScreen }) => {
  return (
      <>
        {!isSmallScreen && <div className="sociallinkwrapper">
            <a href="https://www.instagram.com/unika_institut_selters/" className="sociallink fa fa-instagram"></a>
            <a href="https://www.facebook.com/Unika-Institut-113446341251233" className="sociallink fa fa-facebook"></a>
            <a className="sociallink material-icons-outlined"
               href='mailto:unika-institut@gmx.de'>email</a>
            <a className="sociallink material-icons-outlined">phone</a>
        </div>} 
      </>
    
  )
}

export default Sociallinks