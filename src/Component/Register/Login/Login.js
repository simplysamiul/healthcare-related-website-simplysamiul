import React from 'react';
import './Login.css';
import formLogo from '../../../resource/logo.png';

const Login = () => {
    return (
            <div className="login-container flex justify-center items-center">
            <div className="login-area mx-auto">
                <div className="flex justify-center items-center flex-col">
                <div className="footer-logo flex mx-auto">
                <img src={formLogo} width="80" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                <div>
                <span className="logo-name">Ours-<small>Clinic</small></span>
                <p>Health Care</p>
                </div>
            </div>
            <div className="input-area">
                <h3>Log-In</h3>
                <input type="email" name="" id="" placeholder="enter email*" />
                <input type="password" name="" id="" placeholder="enter password*"/>
                <input type="button" value="Log-In" />
                <p> ---------- or ----------</p>
                <div className="google-button flex justify-center items-center">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png"/>
                    <button>Google-logIn</button>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Login;