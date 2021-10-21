import { useForm } from "react-hook-form";
import logoTwo from '../../../resource/logo.png';
import { useLocation, useHistory, Link } from 'react-router-dom';
import './SignUp.css';
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const SignUp = () => {
    const { googleLogIn, createAccount } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const location = useLocation();
    const history = useHistory();
    // const redirect_url = location.state?.from || "/home";
    const handelGoogleLogIn = () =>{
        googleLogIn()
        .then(() => {
            history.push('/home');
        })
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setEmail(data.email);
        setPassword(data.password);

    };
    return (
        <div className="register-arrea">
          <div className="login-area">
          <div className="registration-container flex justify-center items-center">
           <div className="footer-logo flex mx-auto animate-pulse">
                <img src={logoTwo} width="100" height="60" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                <div>
                <span className="logo-name">Ours-<small>Clinic</small></span>
                <p>Health Care</p>
                </div>
                </div>
                <div>
                <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Create Account</h3>
                <input {...register("firstName")} placeholder="First name" required/>
                <input {...register("lastName")} placeholder="Last name" required/>
                <input {...register("email", {pattern:/\S+@\S+\.\S+/})} placeholder="enter email" required/>
                <input type="password" {...register("password", {pattern:/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/})} placeholder="enter password" required/>
                <p> <small style={{color:"red"}}>password must be:</small> (two uppercase letters,one special case letter,two digits,three lowercase letters)</p>
                <input  className="signIn-button" type="submit" value="Submit"/>
            </form>
            <div className="already-login">
            <p> Already Registered? <Link to="/login">Log-In</Link> </p>
            <p> ---------- or ----------</p>
            </div>
            <div onClick={handelGoogleLogIn} className="google-button flex justify-center items-center">
            <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt=""/>
                <p>Google-Sign-Up</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
                             
};

export default SignUp;