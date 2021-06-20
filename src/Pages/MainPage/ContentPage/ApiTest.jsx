import React, { useEffect, useState } from 'react'
import { apiImage } from '../../../Api/ImageApi';



function ApiTest() {

    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    const contentType = 'image/png';
    const [image, setImage] = useState(null);
    // apiImage(1)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    const q = 3;
    useEffect(
        () => {
            apiImage(1).then(res => {
                console.log(res)
                let a = Buffer.from(res.data, 'binary').toString('base64');
                console.log(a);
                const blob = b64toBlob(a, contentType);
                setImage(URL.createObjectURL(blob))
            })
        },
        [q]
    )

    return (
        <div>
            <img src={image} alt='test'>
            </img>
            Testing
        </div>
    )
}

export default ApiTest;