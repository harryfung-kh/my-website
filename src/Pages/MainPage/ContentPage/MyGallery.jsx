import React, { useEffect, useRef } from 'react'
import Glass from '../../../Global/Glassmorphism'
import './MyGallery.css'
import ImageCard from '../../../Projects/Project1/ImageCard'

function MyGallery() {
    const widthRef = React.createRef();
    const [currentWidth, setCurrentWidth] = useState(0);

    let imageCardsOdd = [];
    let imageCardsEven = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 == 0)
            imageCardsEven.push(<ImageCard key={i} id={i}></ImageCard>)
        else
            imageCardsOdd.push(<ImageCard key={i} id={i}></ImageCard>)
    }

    useEffect(() => {
        function galleryResize() {
            let { width, padding } = getComputedStyle(widthRef.current)
            let mWidth = parseInt(width.replace(/[^\d]/g, '')) -
                parseInt(padding.replace(/[^\d]/g, '')) * 2;
            setCurrentWidth(mWidth);
            console.log('test1')
        }
        galleryResize();

        window.addEventListener('resize', galleryResize);
        return window.removeEventListener('resize', galleryResize)
    }, [])

    return (
        <div id="myPinterest_container" className="content_container">
            <div id="gallery_container" className="s_c_padding" >
                <Glass id="gallery" glassColor="white" ref={widthRef}>
                    <div className="gallery_column">
                        {imageCardsOdd}
                    </div>
                    <div className="gallery_column">
                        {imageCardsEven}
                    </div>
                    <div className="gallery_column">
                        {imageCardsOdd}
                    </div>
                </Glass>
            </div>
        </div>
    )
}
export default MyGallery;