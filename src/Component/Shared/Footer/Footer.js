import React from 'react';
import './Footer.css';
import logoONe from '../../../resource/logo.png';

const Footer = () => {
    return (
        <div>
            <div className="footer-header">
                <div className="call-info mt-3 flex">
                <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                </div>
                <div className="contact-data">
                    <h4>(+880) 1735 006481</h4>
                    <p>Call for an appointment!</p>
                </div>
                </div>
                <div className="mail-info mt-3 flex">
                <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <div className="contact-data">
                    <h4>info@ours-clinic.com</h4>
                    <p>Feel free to message us!</p>
                </div>
                </div>
                <div className="location-info mt-3 flex">
                <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                </div>
                <div className="contact-data">
                    <h4>Visit our Location</h4>
                    <p>Gazipur,Dhaka-1216 Bangladesh</p>
                </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="time-content">
                    <div className="footer-logo flex">
                    <img src={logoONe} width="80" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                    <div>
                    <span className="logo-name">Ours-<small>Clinic</small></span>
                    <p>Health Care</p>
                    </div>
                    </div>
                    <div className="time-info">
                    <table>
                        <tr>
                            <th>Days</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Monday-Friday (Specialist)</td>
                            <td>13:00 - 20:00</td>
                        </tr>
                        <tr>
                            <td>General (Friday Off)</td>
                            <td>08:00 - 22:00</td>
                        </tr>
                        <tr>
                            <td>Emergency</td>
                            <td>24 hours</td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className="services">
                    <h3>Our Services</h3>
                    <ul>
                        <li><i class="fas fa-chevron-right"></i> Neurology</li>
                        <li><i class="fas fa-chevron-right"></i> Cardiology</li>
                        <li><i class="fas fa-chevron-right"></i> Surgery</li>
                        <li><i class="fas fa-chevron-right"></i> Dentist</li>
                        <li><i class="fas fa-chevron-right"></i> Orthopedic</li>
                        <li><i class="fas fa-chevron-right"></i> X-ray</li>
                        <li><i class="fas fa-chevron-right"></i> Dental</li>
                        <li><i class="fas fa-chevron-right"></i> Dermatologist</li>
                    </ul>
                </div>
                <div className="contact-details">
                    <h3>Contact Details</h3>
                    <p><i class="fas fa-phone-square-alt"></i> (+880) 173 5006 481</p>
                    <p><i class="far fa-envelope"></i> info@ours-clinic.com</p>
                    <p><i class="fas fa-globe"></i> website: www.google.com</p>
                    <p><i class="fas fa-map-marked-alt"></i> Dahaka-1216 Bangladesh</p>
                </div>
            </div>
            <div className="footer-end">
                <div className="social-icon">
                <i class="fab fa-facebook-f animate-bounce"></i>
                <i class="fab fa-twitter animate-bounce duration-500"></i>
                <i class="fab fa-skype animate-bounce"></i>
                <i class="fab fa-google-plus-g animate-bounce"></i>
                <i class="fab fa-linkedin-in animate-bounce"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;