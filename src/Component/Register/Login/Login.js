import React from 'react';
import './Login.css';
import formLogo from '../../../resource/logo.png';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory, Link } from 'react-router-dom';

const Login = () => {
    const { googleLogIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";
    console.log( "come form",location.state?.from);
    const handelGoogleLogIn = () =>{
        googleLogIn()
        .then(result => {
            history.push(redirect_url);
        })
    }
    return (
            <div className="login-container flex justify-center items-center">
                <div className="login-area">
                    <div className="form-container flex justify-center items-center ">
                        <div className="footer-logo flex mx-auto animate-pulse">
                        <img src={formLogo} width="80" height="40" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                        <div>
                        <span className="logo-name">Ours-<small>Clinic</small></span>
                        <p>Health Care</p>
                        </div>
                        </div>
                        <div className="input-area mx-auto">
                        <h3>Log-In</h3>
                        <input type="email" name="" id="" placeholder="enter email*" />
                        <input type="password" name="" id="" placeholder="enter password*"/>
                        <input className="login-button" type="button" value="Log-In" />
                        <p>Are You New ? <Link to="/register">Create account</Link> </p>
                        <p> ---------- or ----------</p>
                        <div onClick={handelGoogleLogIn} className="google-button flex justify-center items-center">
                        <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt=""/>
                            <p>Google-logIn</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;