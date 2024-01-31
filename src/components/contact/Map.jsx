import React from 'react';


const Map = () => {
  return (
    <div
      className='googlemap'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.0989543938592!2d8.23348083478618!3d50.33373468594512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bdb54894568729%3A0x45a805ffbd65f583!2sUnika%20Institut!5e0!3m2!1sde!2sde!4v1659333286457!5m2!1sde!2sde"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Map