'use client'
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
                in place of 'smooth' */
        });
    };

    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', toggleVisible);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', toggleVisible);
            }
        };
    }, []);

    return (
        <button onClick={scrollToTop} className='fixed z-50 flex items-center justify-center rounded-full bg-b2 hover:bg-b1 bottom-10 right-10' style={{ display: visible ? 'inline' : 'none' }}>
            <svg className='p-1' viewBox="0 0 24 24" height={40} width={40} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 14L12 10L8 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </button>
    );
}

export default ScrollToTopButton; 
