import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../resource/logo.png';
import './Menubar.css';

const Menubar = () => {
    const {user, logOut} = useAuth();
    console.log(user);
    return (
        <Navbar expand="lg" className="navbar-container" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width="60" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"
                /><span className="logo-name">Ours-<small>Clinic</small> </span></Navbar.Brand>
                <div className="renponsive-user">
                {
                        user.photoURL && <img className="user-img" src={user.photoURL} alt="" title={user.displayName} />
                    }
                    {
                        user.displayName && <p className="user-name">{user.displayName}</p>
                    }
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="menu-items flex items-start">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/doctors">Doctors</NavLink>
                    {
                        user.email?<button onClick={logOut}>Log-Out</button>
                        :<NavLink to="/login">Log-In</NavLink>
                    }
                   <div className="regular-img flex items-center justify-center">
                   {
                        user.photoURL && <img className="user-img" src={user.photoURL} alt="" title={user.displayName} />
                    }
                    {
                        user.displayName && <p className="user-name">{user.displayName}</p>
                    }
                   </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;