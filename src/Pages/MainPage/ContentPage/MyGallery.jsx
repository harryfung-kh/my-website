import React, { useEffect, useRef, useState } from 'react'
import Glass from '../../../Global/Glassmorphism'
import './MyGallery.css'
import ImageCard from '../../../Projects/Project1/ImageCard'

function MyGallery() {
    const widthRef = useRef(null);
    const [currentWidth, setCurrentWidth] = useState(0);
    let imageCardWidth = 240 + 20;


    let imageGallery = [];
    let columns = Math.max(Math.floor(currentWidth / imageCardWidth), 1)
    let totalImages = 20;

    for (let j = 1; j <= columns; j++) {
        let imageColumn = []
        for (let i = j; i <= totalImages; i = i + columns) {
            imageColumn.push(
                <ImageCard key={i} id={i}></ImageCard>
            )
        }

        imageGallery.push(<div key={j} className="gallery_column">{imageColumn}</div>);
    }

    useEffect(() => {
        function galleryResize() {
            if (!widthRef.current) {
                return;
            }
            let { width, padding } = getComputedStyle(widthRef.current)
            let mWidth = parseInt(width.replace(/[^\d]/g, '')) -
                parseInt(padding.replace(/[^\d]/g, '')) * 2;
            setCurrentWidth(mWidth);
        }
        galleryResize();

        window.addEventListener('resize', galleryResize, true);
        return window.removeEventListener('resize', galleryResize)
    }, [])

    return (
        <div id="myPinterest_container" className="content_container">
            <div id="gallery_container" className="s_c_padding" >
                <Glass id="gallery" glassColor="white" ref={widthRef}>
                    {imageGallery}
                </Glass>
            </div>
        </div>
    )
}
export default MyGallery;