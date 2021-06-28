import React, { useEffect, useRef, useState } from 'react';
import { getLowestIndex } from '../../../Util/SetPropertyHelper';
import { apiImageSize } from '../../../Api/ImageApi';
import Glass from '../../../Global/Glassmorphism';
import './MyGallery.css';
import ImageCard from '../../../Projects/Project1/ImageCard';

function MyGallery() {
    // state for resize
    const widthRef = useRef(null);
    const [currentWidth, setCurrentWidth] = useState(0);

    // state for available Images
    const [allSize, setAllSize] = useState(null);
    const allSizeRef = React.createRef(allSize);

    // state for currently showed images
    const [renderImage, setRenderImage] = useState([]);
    const renderImageRef = React.createRef(renderImage);

    let imageCardWidth = 240 + 20;
    let columns = Math.max(Math.floor(currentWidth / imageCardWidth), 1)

    let margin = 20;
    let initImages = 27;
    let gotAll = false;

    function renderImageGallery() {
        let imageColumn = [];
        let columnHeight = [];
        for (let i = 0; i < columns; i++) {
            imageColumn.push([]);
            columnHeight.push(0)
        }
        renderImage.forEach((e) => addNewImageCard(e, imageColumn, columnHeight))

        let imageGallery = [];
        imageColumn.forEach((e, i) =>
            imageGallery.push(<div key={i} className="gallery_column">{e}</div>))
        return imageGallery;
    }

    function addNewImageCard(id, imageColumn, columnHeight) {
        if (allSize == null)
            return;
        let size = allSize[id];
        if (size == null)
            return;
        let imageHeight = parseInt(size.height.replace(/[^\d]/g, ''));
        let index = getLowestIndex(columnHeight);
        columnHeight[index] += imageHeight + margin;
        imageColumn[index].push(
            <ImageCard key={id} id={id} style={size}></ImageCard>
        );
    }

    if (allSize && renderImage && renderImage.length === Object.keys(allSize).length) {
        gotAll = true;
    }
    const imageGallery = renderImageGallery();

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

        function reachBotton() {
            let docHeight = document.documentElement.scrollHeight;
            let winHeight = document.documentElement.clientHeight;
            let current = window.scrollY
            if (allSizeRef.current != null && renderImageRef.current != null) {
                let createdImages = renderImageRef.current.length;
                let availableImages = Object.keys(allSizeRef.current).length;
                if (current > (docHeight - 2 * winHeight)
                    && createdImages < availableImages) {
                    setRenderImage(e => {
                        let n = [...e, e[e.length - 1] + 1];
                        renderImageRef.current = n
                        return n;
                    })
                }
            }
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

        function init() {
            let images = [...Array(initImages + 1).keys()].slice(1);
            renderImageRef.current = images;
            setRenderImage(images)
        }

        getAllSize()
            .then(p => {
                allSizeRef.current = p;
                setAllSize(p);
            })
        galleryResize();
        init();
        console.log('testing')
        window.addEventListener('scroll', reachBotton, true)
        window.addEventListener('resize', galleryResize, true);
        return () => {
            window.removeEventListener('resize', galleryResize);
            window.removeEventListener('scroll', reachBotton);
            setAllSize(null);
            setCurrentWidth(null);
            setRenderImage(null);
        }
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
            {
                gotAll &&
                (<div className='my_d_footer'>
                    <div className="s_c_padding h2_container ">
                        <h2>That's all we can get from the server~</h2>
                    </div>
                </div>)
            }
        </>
    )
}
export default MyGallery;