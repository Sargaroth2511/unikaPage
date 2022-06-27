import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, showMenu, exception) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log(event.target)
      if(event.target.id !== exception){
        if (ref.current && !ref.current.contains(event.target)) {
          showMenu(false)
          // alert("You clicked outside of me!");
        }
      }
    }
    // Bind the event listener
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.showMenu, props.exception);

  return <div ref={wrapperRef}>{props.children}</div>;
}