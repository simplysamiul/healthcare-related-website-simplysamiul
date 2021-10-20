import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {service_name, service_img, short_des, btn_name} = props.service;
    return (
        <div className="cart-body shadow-2xl">
            <div className="cart-img">
                <Link to={`/details/${btn_name}`}><img src={service_img} alt="" /></Link>
            </div>
            <div className="cart-details">
                <div className="cart-content">
                    <h2>{service_name}</h2>
                    <p>{short_des}</p>
                </div>
                <div className="cart-button">
                <Link to={`/details/${btn_name}`}>{btn_name}</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Service;