import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../resource/images/404.gif';

const NotFound = () => {
    return (
        <div>
            <Link to="/"><img src={notFound} alt="" /></Link>
        </div>
    );
};

export default NotFound;