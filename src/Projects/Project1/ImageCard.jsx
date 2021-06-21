import React, { useEffect, useState } from 'react'
import { apiImage, apiImageSize } from '../../Api/ImageApi';
import { blobURL as btob } from '../../Util/ImageApiHelper';
import './ImageCard.css';

function ImageCard(props) {

    const [size, setSize] = useState({ width: 0, height: 0 });
    const [image, setImage] = useState(null);
    useEffect(
        () => {
            apiImageSize(props.id).then(res => {
                setSize(res.data)
            })

            apiImage(props.id).then(res => {
                let bimage = btob(res.data, res.headers["content-type"]);
                setImage(
                    <img src={bimage} alt="Image" className="image_card_image"></img>
                );
            })

        },
        []
    )
    return (
        <div style={size} className="image_card">
            {image}
        </div>
    );
}

export default ImageCard;