import React, { useEffect, useRef, useState } from 'react'
import { apiImageSize } from '../../../Api/ImageApi';
import Glass from '../../../Global/Glassmorphism'
import './MyGallery.css'
import ImageCard from '../../../Projects/Project1/ImageCard'

function MyGallery() {
    const widthRef = useRef(null);
    const [currentWidth, setCurrentWidth] = useState(0);
    const [allSize, setAllSize] = useState(null);

    let imageCardWidth = 240 + 20;
    let columns = Math.max(Math.floor(currentWidth / imageCardWidth), 1)

    let imageGallery = [];
    let imageColumn = [];
    let height = []
    let totalImages = 27;
    let margin = 20;

    for (let i = 0; i < columns; i++) {
        imageColumn.push([]);
        height.push(0)
    }

    function getLowestIndex(arr) {
        let lowest = 9999;
        let index = 0;
        arr.forEach((e, i) => {
            if (e < lowest) {
                lowest = e;
                index = i;
            }
        })
        return index;
    }

    function addNewImageCard(id) {
        let size = allSize[id];
        let imageHeight = parseInt(size.height.replace(/[^\d]/g, ''));
        let index = getLowestIndex(height);
        height[index] += imageHeight + margin;
        imageColumn[index].push(
            <ImageCard key={id} id={id} style={size}></ImageCard>
        );
    }

    if (allSize != null) {
        for (let i = 1; i <= totalImages; i++) {
            addNewImageCard(i)
        }
        for (let i = 0; i < columns; i++) {
            imageGallery.push(<div key={i} className="gallery_column">{imageColumn[i]}</div>);
        }
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

        async function getAllSize() {
            try {
                let res = await apiImageSize();
                return res.data
            } catch (error) {
                console.log(error)
                throw error;
            }
        }

        getAllSize()
            .then(p => setAllSize(p))

        galleryResize();

        window.addEventListener('resize', galleryResize, true);
        return window.removeEventListener('resize', galleryResize)
    }, [])

    return (
        <>
            <div id='myGallery_description' className='my_d_container s_t_default_bg'>
                <div className='s_c_padding h1_container'>
                    <h1>My Gallery</h1>
                </div>
                <div className='s_c_padding h2_container'>
                    <h2>This project is trying to fetch Images dynamically from ExpressJs Backend, through RESTful API.
                        <br /><br />Waiting list of items to be integrated in this project:
                        <br /><br />Progressive Image Loading, Image Upload Function,
                        <br />Integrate and Upgrade Search Engine developed in my University Project to this Project, etc.
                    </h2>
                </div>
            </div>
            <div id="myGallery_container" className="content_container">
                <div id="gallery_container" className="s_c_padding" >
                    <Glass id="gallery" glassColor="white" ref={widthRef}>
                        {imageGallery}
                    </Glass>
                </div>
            </div>
        </>
    )
}
export default MyGallery;