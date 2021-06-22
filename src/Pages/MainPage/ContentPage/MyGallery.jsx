import React from 'react'
import Glass from '../../../Global/Glassmorphism'
import './MyGallery.css'
import ImageCard from '../../../Projects/Project1/ImageCard'

function MyGallery() {

    let imageCardsOdd = [];
    let imageCardsEven = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 == 0)
            imageCardsEven.push(<ImageCard key={i} id={i}></ImageCard>)
        else
            imageCardsOdd.push(<ImageCard key={i} id={i}></ImageCard>)
    }

    return (
        <div id="myPinterest_container" className="content_container">
            <div id="gallery_container" className="s_c_padding">
                <Glass id="gallery" glassColor="white">
                    <div class="gallery_column">
                        {imageCardsOdd}
                    </div>
                    <div class="gallery_column">
                        {imageCardsEven}
                    </div>
                    <div class="gallery_column">
                        {imageCardsOdd}
                    </div>
                </Glass>
            </div>
        </div>
    )
}
export default MyGallery;