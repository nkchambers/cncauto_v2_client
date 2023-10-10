import { Navigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../userContext/UserContext';
import './UserProfile.css';


const UserProfile = () => {


    const [redirect, setRedirect] = useState(null);
    const { ready, user, setUser } = useContext(UserContext);
    let { subpage } = useParams();

    if (subpage === undefined) {
        subpage = 'profile';
    }

    
    if (!ready) {
        return 'Loading.....';
    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }


    if (redirect) {
        return <Navigate to={redirect} />
    }


    return (

        <div className='profileContainer py-24 mt-12'>
            <h2 className='profileTitle'>Account | Profile</h2>

            {subpage === 'profile' && (
                <div className='userInfoContainer text-2xl'>
                    <p>
                        Logged in as {user.firstName} {user.lastName} 
                        <br /> 
                        ({user.email})
                    </p>
                </div>
            )}

        </div>
    )
}

export default UserProfile