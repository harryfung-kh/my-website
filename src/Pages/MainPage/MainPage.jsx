import React, { useEffect, useState, useRef } from 'react';
import './MainPage.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import BackgroundMask from '../../Global/BackgroundMask'

function MainPage() {
    const mainContainerRef = useRef(null);
    const [size, setSize] = useState({ w: 0, h: 0 })

    useEffect(() => {
        console.log('init window resize useEffect hooks')
        setSize({
            w: mainContainerRef.current.offsetWidth,
            h: mainContainerRef.current.offsetHeight
        });

        function handleResize(e) {
            setSize({
                w: mainContainerRef.current.offsetWidth,
                h: mainContainerRef.current.offsetHeight
            })
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [])

    return (
        <div id="main" className="main_grid_container" ref={mainContainerRef}>
            <Header />
            <Content />
            <Footer />
            <BackgroundMask width={size.w} height={size.h} />
        </div>
    );
}

export default MainPage