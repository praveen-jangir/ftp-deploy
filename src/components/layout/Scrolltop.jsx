import React, { useState, useEffect } from 'react'

export default function Scrolltop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  return (
    <>
        {" "}
            {showTopBtn && (
                <button className='backtoUp' onClick={goToTop}><span className='fa fa-hand-o-up'></span></button> 
        )}{" "}
        
    </>
  )
}

