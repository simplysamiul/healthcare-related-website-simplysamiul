import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className = "services-area">
            <h1 className="section-title">Our <span>Services</span></h1>
            <div className="services-container">
                {
                    services.map(service => <Service 
                        service={service} 
                        key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;