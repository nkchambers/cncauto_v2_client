import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../userContext/UserContext';
import Navbar from '../navbar/Navbar';

const Header = () => {

    const { user } = useContext(UserContext);

    return (
        
        <div className='headerContainer'>

            <header className='header'>
                
                <Navbar />

            </header>

        </div>
    )
}

export default Header;