import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div>
            <img src={props.image}/>
            <p className="first-name">{props.firstName} <span className="last-name">{props.lastName}</span></p>
        </div>
    )

}

export default Avatar;
