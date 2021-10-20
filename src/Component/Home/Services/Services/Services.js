import React, { useEffect } from 'react';
import './Services.css';

const Services = () => {
    useEffect(()=>{
        fetch("https://simplysamiul.github.io/medical_service/services.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className = "services-area">
            <h1 className="section-title">Our <span>Services</span></h1>
        </div>
    );
};

export default Services;