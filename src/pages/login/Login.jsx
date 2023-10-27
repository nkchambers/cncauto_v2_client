import React, { useState, useContext } from 'react';
import './Login.css';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../userContext/UserContext';
import LoginBackground from '../../assets/login_img/LoginBackground.jpg';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    async function loginUser(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            });
            
            setUser(data);
            setRedirect(true);

        } catch (e) {
            alert('Login failed. Invalid email or password.');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (

        <div className='loginContainer'>

            <div className='imgContainer'>
                <img
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    className='login-background postion-fixed object-cover'
                    src={LoginBackground}
                    alt="sleek car background"
                />
                {/* <div className='login-logo'>
                    <div className="d-flex justify-content-center">
                        <a href="/" style={{ textDecoration: "none" }}>
                            <div className="loginBrandLogo">
                                <div className="loginChambersChung">C</div>
                                <span id="loginBrandChar">&amp;</span>
                                <div className="loginChambersChung">C</div>
                                <span id="loginBrandAuto">Auto</span>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>

            <div className='loginFormContainer'>
                <form className='login-form' onSubmit={loginUser}>
                    <h1>Login</h1>
                    <hr />
                    <input
                        type="email"
                        placeholder='your@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='loginButton btn1 mt-3 mb-3'>LOGIN</button>
                    <Link to='/register'>Not registered? Click Here to Register</Link>
                </form>
            </div>

        </div>

    )
}

export default Login