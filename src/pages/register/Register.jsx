import React, { useState } from 'react';
import './Register.css';
import { Link, Navigate } from 'react-router-dom';
import LoginBackground from '../../assets/login_img/LoginBackground.jpg';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function registerUser (e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                firstName,
                lastName,
                email,
                password
            });

            console.log(firstName, lastName, email, password);
            alert('Registration successful! Now you can log in.');

            setRedirect(true);

        } catch (e) {
            alert('Registration failed. Email address already in use.');
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />
    }



    return (
        

        <div className='registerContainer'>

            <div className='imgContainer'>
                <img
                    data-aos='slide-left'
                    data-aos-duration='1500'
                    className='register-background'
                    src={LoginBackground}
                    alt="sleek car background"
                />
                {/* <div className='register-logo'>
                    <div className="d-flex justify-content-center">
                        <a href="/" style={{ textDecoration: "none" }}>
                            <div className="registerBrandLogo">
                                <div className="loginChambersChung">C</div>
                                <span id="registerBrandChar">&amp;</span>
                                <div className="loginChambersChung">C</div>
                                <span id="registerBrandAuto">Auto</span>
                            </div>
                        </a>
                    </div>
                </div> */}
            </div>

            <div className='registerFormContainer'>
                <form className='register-form' onSubmit={registerUser}>
                    <h1>Register</h1>
                    <hr />
                    <input 
                        type="text" 
                        placeholder='First Name' 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder='Last Name' 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input 
                        type="email" 
                        placeholder='your@email.com' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='registerButton btn1 mt-3 mb-3'>REGISTER</button>
                    <Link to='/login'>Already a member? Click Here to Login</Link>
                </form>
            </div>

        </div>

    )
}

export default Register