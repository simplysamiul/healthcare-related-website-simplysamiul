import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../resource/logo.png';
import './Menubar.css';

const Menubar = () => {
    return (
        <Navbar expand="lg" className="navbar-container" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width="60" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"
                /><span className="logo-name">Ours-<small>Clinic</small> </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="menu-items">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/doctors">Doctors</NavLink>
                    <NavLink to="/login">Log-In</NavLink>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;