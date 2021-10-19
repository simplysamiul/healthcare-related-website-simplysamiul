import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sliderOne from '../../../resource/images/slide1.png';
import sliderTwo from '../../../resource/images/slide2.png';
import sliderThree from '../../../resource/images/slide3.png';
import './Header.css'; 

const Header = () => {
    return (
        <Carousel fade className="slider-container">
            <Carousel.Item>
                <img className="d-block w-100" src={sliderOne}
                alt="First slide"/>
                <Carousel.Caption className="header-info">
                <h3>Health is a positive concept emphasizing social and personal resources, as well as physical capacities.</h3>
                <Link to="/about"><button className="header-button animate-bounce">Visit-Us</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={sliderTwo} alt="Second slide"/>
                <Carousel.Caption className="header-info
                ">
                <h3>Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity.</h3>
                <Link to="/booking"><button className="header-button animate-bounce">Online-Booking</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"src={sliderThree}
                alt="Third slide"/>
                <Carousel.Caption className="header-info">
                <h3>The achievement of any State in the promotion and protection of health is of value to all.</h3>
                <Link to="/doctors"><button className="header-button animate-bounce">Our-Doctors</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;