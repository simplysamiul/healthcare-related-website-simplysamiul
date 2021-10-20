import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const [details, setDetails] = useState([]);
    const [serviceDetails, setServiceDetails] = useState([]);
    const {service} = useParams();
    useEffect(()=>{
        fetch("/services.json")
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    useEffect(()=>{
        const foundDetails = details.find(fullDetails => fullDetails.service_name===service );
        setServiceDetails(foundDetails);
    },[details])
    return (
        <div className="text-center details-container">
            <img className="mx-auto" src={serviceDetails?.service_img} alt="" />
            <h1>{serviceDetails?.service_name}</h1>
            <p>{serviceDetails?.full_des}</p>
        </div>
    );
};

export default ServiceDetails;