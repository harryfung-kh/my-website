import React from 'react'
import Glass from '../../../Global/Glassmorphism'
import './MyPinterest.css'


function MyPinterest() {
    return (
        <div id="myPinterest_container" className="content_container">
            <div id="gallery_container" className="s_c_padding">
                <Glass id="gallery" glassColor="white">
                    <div id="testing_here">
                        <div className="block" style={{ height: '320px', order: 1 }}>
                            <div className="inner">1</div>
                        </div>
                        <div className="block" style={{ height: '430px', order: 2 }}>
                            <div className="inner">2</div>
                        </div>
                        <div className="block" style={{ height: '350px', order: 3 }}>
                            <div className="inner">3</div>
                        </div>
                        <div className="block" style={{ height: '280px', order: 1 }}>
                            <div className="inner">4</div>
                        </div>

                        <div className="block" style={{ height: '320px', order: 2 }}>
                            <div className="inner">5</div>
                        </div>
                    </div>
                </Glass>
            </div>
        </div>
    )
}
export default MyPinterest;