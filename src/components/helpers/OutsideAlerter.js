import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */

function useOutsideAlerter(ref, showMenu, exception) {
  const lastTouchRef = useRef([])
  const [isSwiping, setIsSwiping] = useState(false)


  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    const getSwipe = (e) => {
      setIsSwiping(true)
    }

 

    function handleClickOutside(event) {

      if(event.target.id !== exception && !isSwiping){
        if (ref.current && !ref.current.contains(event.target)) {
          showMenu(false)


          // alert("You clicked outside of me!");
        }
      }
      setIsSwiping(false)

    }
    
    // Bind the event listener
    document.addEventListener("touchend", handleClickOutside);
    document.addEventListener('touchmove', getSwipe )

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("touchend", handleClickOutside);
      document.removeEventListener('touchmove', getSwipe )


    };
  }, [ref, isSwiping]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.showMenu, props.exception);

  return <div ref={wrapperRef}>{props.children}</div>;
}