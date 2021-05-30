import React from 'react';
import './Card.css'

function Card({ id, icon, header, langHeader, langArr }) {
    let languages = [];
    langArr.forEach(e => languages.push(<p key={e}>{e}</p>));
    return (
        <div id={id} className="my_card">
            <img src={icon} alt={header} />
            <h2>{header}</h2>
            <h3>{langHeader}</h3>
            {languages}
        </div>
    )
}

export default Card;