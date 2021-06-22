import React, { useEffect, useState } from 'react'
import { apiImage, apiImageSize } from '../../Api/ImageApi';
import { blobURL as btob } from '../../Util/ImageApiHelper';
import './ImageCard.css';

function ImageCard(props) {
    const [shouldCreate, setShoudlCreate] = useState(true)
    const [size, setSize] = useState({ width: `${0}px`, height: `${0}px` });
    const [image, setImage] = useState(null);
    useEffect(
        () => {
            async function getSize() {
                try {
                    let res = await apiImageSize(props.id);
                    setSize(res.data);
                } catch (error) {
                    console.log(error)
                    throw error;
                }
            }

            async function getImage() {
                try {
                    let res = await apiImage(props.id);
                    let bimage = btob(res.data, res.headers["content-type"]);
                    setImage(
                        <img src={bimage} alt="Image" className="image_card_image"></img>
                    );
                } catch (error) {
                    console.log(error)
                }
            }
            getSize()
                .then(_ => getImage(),
                    _ => setShoudlCreate(false))
        },
        []
    )

    return (
        <>
            {shouldCreate &&
                <div style={size} className="image_card">
                    {image}
                </div>
            }
        </>
    );
}

export default ImageCard;