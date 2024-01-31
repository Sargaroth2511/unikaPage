import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that closes Menu onTouchend outside of the passed ref
 */

const useOutsideDetector = (ref, showMenu, exception) => {
  const [isSwiping, setIsSwiping] = useState(false)

  useEffect(() => {
    const throttleFunction = (delay, fn) => {
      let lastCall = 0;
      return (...args) => {
        const now = (new Date).getTime();
        if ( now - lastCall < delay) return;
        lastCall = now;
        return fn(...args);
      }
    }
    const confirmSwipe = () => {
      console.log(isSwiping)
      setIsSwiping(true)
    }

    const throttledConfirm = throttleFunction(300, confirmSwipe)

    const handleOutsideTouch = (e) => {
      setIsSwiping(false)
      if(e.target.id === exception || isSwiping) return;
        if (ref.current && !ref.current.contains(e.target)) {
          showMenu(false)
        }
    }
    
    document.addEventListener('touchend', handleOutsideTouch);
    document.addEventListener('touchmove', throttledConfirm )

    return () => {
      document.removeEventListener('touchend', handleOutsideTouch);
      document.removeEventListener('touchmove', throttledConfirm )
    };
  }, [ref, isSwiping]);
}

/**
 * Component closes Menu onTouchend outside of it
 */
export default function OutsideDetector(props) {
  const wrapperRef = useRef(null);
  useOutsideDetector(wrapperRef, props.showMenu, props.exception);

  return <div ref={wrapperRef}>{props.children}</div>;
}