import React from 'react';
import './About.css';
import about from '../../resource/images/about(1).jpg';

const About = () => {
    return (
        <div className="about-container">
            <img src={about} alt="" />
            <div className="about-body">
                <div className="about-info">
                    <div className="chossen-description">
                        <h3>Why Choose Us</h3>
                        <p>Our group of hospitals provide a huge range of clinical services to people in Bangladesh. Million people look to our services to provide them with the healthcare they need.Our team of doctors, advanced care providers, nurses, therapists and researchers provide the region's most advanced medicine at multiple facilities, campuses, clinics and classrooms. We offer patients convenient access to innovative treatments and advancements that improve the health and overall wellbeing of our community.</p>
                    </div>
                    <div className="chossen-cart">
                        <div className="cart-info">
                            <h4>Ambulance Service</h4>
                            <p>Ours-Clinic health center, provide emergency ambulance service in Dhaka.</p>
                        </div>
                        <div className="cart-info">
                            <h4>Laboratory &#38; Pathology Medicine</h4>
                            <p>Ours-Clinic health care Laboratory concentration on best quality patient care services.The proper &#38; timely reporting plays an important role in corroborative medical decisions for the best patient attention.</p>
                        </div>
                        <div className="cart-info">
                            <h4>Emergency Departments</h4>
                            <p>24x7 hours we are ready for you better service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;