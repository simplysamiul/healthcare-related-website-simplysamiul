import { useForm } from "react-hook-form";
import logoTwo from '../../../resource/logo.png';
import { useLocation, useHistory, Link } from 'react-router-dom';
import './SignUp.css';
import useAuth from "../../../hooks/useAuth";

const SignUp = () => {
    const { googleLogIn } = useAuth();
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
    const onSubmit = (data) => console.log(data);
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
                <input {...register("firstName")} placeholder="First name" />
                <input {...register("lastName")} placeholder="Last name" />
                <input {...register("email")} placeholder="enter email" />
                <input {...register("password")} placeholder="enter password" />
                <input className="signIn-button" type="submit" value="Submit"/>
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