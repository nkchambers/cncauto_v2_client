import React, { useEffect, useState } from 'react';
import './VehicleRentals.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VehicleRentals = () => {

    const [vehicleRentals, setVehicleRentals] = useState([]);


    useEffect(() => {
        axios.get('/vehicleRentals')
            .then(response => {
                setVehicleRentals(response.data);
            });
    }, []);




    return (

        <div className='text-white py-36'>

            <h2 className='vehicleRentalsTitle'>Vehicles | Rentals</h2>

            <div className='bg-dark rounded-2xl py-10 px-8 mt-10 gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {vehicleRentals.length > 0 && vehicleRentals.map(vehicleRental => (
                    <div className='vehicleRentalContainer'>
                        <Link to={'/vehicles/rentals/' + vehicleRental._id} className='text-decoration-none'>
                            <div className='bg-gray-500 mb-2 rounded-2xl'>
                                {vehicleRental.photos?.[0] && (
                                    <img
                                        className='rounded-2xl object-cover aspect-square'
                                        src={'http://localhost:5000/uploads/' + vehicleRental.photos?.[0]} alt=""
                                    />
                                )}
                            </div>
                            <h2 className='pt-1 text-white text-lg font-bold'>{vehicleRental.cityAddress}</h2>
                            <h3 className='text-white text-lg'>{vehicleRental.year} {vehicleRental.make} {vehicleRental.model}</h3>
                            <div className='vehicleRentalPrice'>
                                <span className='font-bold'>${vehicleRental.pricePerDay} per day</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>

    )
}

export default VehicleRentals