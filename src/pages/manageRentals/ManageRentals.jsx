import React, { useEffect, useState } from 'react';
import './ManageRentals.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VehicleRentalImg from '../../components/vehicleRentalImg/VehicleRentalImg';

const ManageRentals = () => {

    const [vehicleRentals, setVehicleRentals] = useState([]);

    useEffect(() => {
        axios.get('/user-vehicleRentals')
            .then(({ data }) => {
                setVehicleRentals(data);
            });
    }, []);


    return (
    
            <div className='text-white py-36'>
                <div>
                    <Link
                        className='text-decoration-none'
                        to={'/account/vehicleRentals/new'}
                    >
                        <div className='newRentalContainer'>
                            <button className='newRentalButton w-full gap-2 max-w-sm mx-auto mb-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Add new rental
                            </button>
                        </div>
                    </Link>
                </div>
                <div className='manageRentalsContainer'>
                    {vehicleRentals.length > 0 && vehicleRentals.map(vehicleRental => (
                        <div className='rounded-2xl gap-4 mt-14 mb-8 mx-4'>
                            <Link to={'/account/vehicleRentals/' + vehicleRental._id} className='manageRentalLink bg-dark flex gap-4 rounded-2xl'>
                                <div className='flex w-52 h-52 grow shrink-0'>
                                    <VehicleRentalImg vehicleRental={vehicleRental} className='rounded-2xl object-cover' />
                                </div>
                                <div className='grow-0 shrink'>
                                    <h2 className='rentalTitle font-semibold text-2xl px-2 pt-3'>{vehicleRental.year} {vehicleRental.make} {vehicleRental.model}</h2>
                                    <p className='pricePerDay text-xl font-semibold float-right px-4 py-2 m-3'>${vehicleRental.pricePerDay} per day</p>
                                    <p className='rentalDesc text-white text-md px-2 pt-2'>{vehicleRental.description}</p>
                                </div>
                            </Link>
                            {/* <div className='items-center justify-center max-w-lg mx-auto w-50'>
                                <button className='unlistButton primary text-xl w-full' onClick={() => deletePlace(place._id)}>Delete Listing</button>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default ManageRentals