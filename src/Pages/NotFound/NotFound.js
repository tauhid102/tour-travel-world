import React from 'react';
import imagae from '../../images/pagenotFound.jpg';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='pagenotFound'>
            <img  src={imagae} alt="" />
        </div>
    );
};

export default NotFound;