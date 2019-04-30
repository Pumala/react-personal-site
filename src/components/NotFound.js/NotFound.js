import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>You have entered No Man's Land...</h1>
            <p>Let's get you back on <span><Link to="/">track</Link></span> </p>
        </div>
    )
};


export default NotFound;