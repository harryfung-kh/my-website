import React from 'react'
import Glass from '../../../Global/Glassmorphism'
import './MyGallery.css'
import ImageCard from '../../../Projects/Project1/ImageCard'

function MyGallery() {

    let imagecards = [];
    for (let i = 0; i < 20; i++) {
        imagecards.push(<ImageCard key={i} id={i}></ImageCard>)
    }

    return (
        <div id="myPinterest_container" className="content_container">
            <div id="gallery_container" className="s_c_padding">
                <Glass id="gallery" glassColor="white">
                    <div id="testing_here">
                        {imagecards}
                    </div>
                </Glass>
            </div>
        </div>
    )
}
export default MyGallery;