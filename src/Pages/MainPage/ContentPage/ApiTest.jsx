import React, { useEffect, useState } from 'react'
import { apiImage } from '../../../Api/ImageApi';
import { blobURL as btob } from '../../../Util/ImageApiHelper';
import ImageCard from '../../../Projects/Project1/ImageCard';

function ApiTest() {

    const [image, setImage] = useState(null);
    useEffect(
        () => {
            apiImage(1).then(res => {
                console.log(res);
                setImage(btob(res.data, res.headers["content-type"]));
            })
        },
        []
    )

    return (
        <div>
            <ImageCard id="9" />
            <img src={image} alt='test'>
            </img>
            Testing
        </div>
    )
}

export default ApiTest;