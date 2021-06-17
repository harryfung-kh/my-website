import './Section.css'
import React from 'react';
import ThreeGlass from './ThreeGlass'
import AboutMe from '../assets/about-me.png'

function Section(props) {

    function setType(props) {
        let section;
        if (props.type === 'ThreeGlass')
            section = (
                <ThreeGlass
                    className={props.main.class || 's_c_padding'}
                    cards={props.main.content}
                >
                </ThreeGlass>
            );
        return section;
    }

    const section = setType(props);

    return (
        <>
            <div id={props.id} className={`s_t_container ${props.title.background && `s_t_${props.title.background}_bg`}`}>
                <img id={props.icon.id}
                    src={AboutMe}
                    alt={props.icon.alt}
                    className={props.icon.class}
                />
                <div className={props.title.class || 's_c_padding h1_container'}>
                    <h1>{props.title.content}</h1>
                </div>
            </div>
            {section}
        </>
    );
}

export default Section;