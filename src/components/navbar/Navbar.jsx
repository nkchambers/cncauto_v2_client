import React, { useState, useContext } from 'react';
import './Navbar.css';
import axios from 'axios';
import { Navigate, useLocation, Link } from 'react-router-dom';
import { UserContext } from '../../userContext/UserContext';

const Navbar = () => {

    const { user, setUser } = useContext(UserContext);


    async function logout() {
        await axios.post('/logout');
        setUser(null);
    }


    return (
        <div>

            {/* ------------------ Offcanvas Navbar component ------------------------ */}
            <nav class="navbar navbar-dark fixed-top bs1">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <div class="d-flex justify-content-between">
                            <div class="brandLogo">
                                <div class="ChambersChung">C</div>
                                <span id="brandChar">&amp;</span>
                                <div class="ChambersChung">C</div>
                                <span id="brandAuto">Auto</span>
                            </div>
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" data-bs-scroll="true" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel offcanvasWithBothOptionsLabel">Menu</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {user ?
                                    (
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href='#' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div class='menuItem gap-2'>
                                                    <div class="userProfile overflow-hidden">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8 relative top-1"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    {user.firstName + ' ' + user.lastName}
                                                </div>
                                            </a>
                                            { user.isAdmin ?
                                                (
                                                    <ul class="dropdown-menu dropdown-menu-dark">
                                                        <li><a class="dropdown-item" href='/account/profile'>Profile</a></li>
                                                        <li>
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li><a class="dropdown-item" href='/account/vehicles/rentals'>Manage Rentals</a></li>
                                                        <li><a class="dropdown-item" href='/account/vehicles/forSale'>Manage For Sale</a></li>
                                                        <li>
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a href='/login'>
                                                                <button className='logoutButton' class="dropdown-item" id='logoutItem' onClick={logout}>Logout</button>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )
                                                :
                                                (
                                                    <ul class="dropdown-menu dropdown-menu-dark">
                                                        <li><a class="dropdown-item" href='/account/profile'>Profile</a></li>
                                                        <li><a class="dropdown-item" href='/account/bookings'>Bookings</a></li>
                                                        <li>
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li>
                                                            <a href='/login'>
                                                                <button className='logoutButton' class="dropdown-item" id='logoutItem' onClick={logout}>Logout</button>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    )
                                    :
                                    (
                                        <li class="nav-item">
                                            <a class="nav-link" href='/login' aria-current="page">
                                                <div className='menuItem pr-3'>
                                                    <div className="userProfile overflow-hidden">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-8 h-8 relative top-1"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                Account Login
                                            </a>
                                        </li>
                                    )
                                }

                                <li class="nav-item">
                                    <a class="nav-link" href='/' aria-current="page">
                                        <div className='menuItem pr-3'>
                                            <div className="userProfile overflow-hidden">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                                </svg>
                                            </div>
                                        </div>
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className='menuItem pr-3'>
                                            <div className="userProfile overflow-hidden">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-8 h-8"
                                                >
                                                    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                                                    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                                                    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        Vehicles
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark">
                                        <li><a class="dropdown-item" href='/vehicles/rentals'>Rentals</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href='/vehicles/forSale'>For Sale</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='/contact' aria-current="page">
                                        <div className='menuItem pr-3'>
                                            <div className="userProfile overflow-hidden">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-8 h-8"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            {/* <form class="mt-5" role="search">
                                <p className='searchTitle mb-3'>Search rental vehicles</p>
                                <input class="form-control text-lg" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn w-full mt-2" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default Navbar