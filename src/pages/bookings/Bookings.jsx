import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VehicleRentalImg from '../../components/vehicleRentalImg/VehicleRentalImg';
import { Link } from 'react-router-dom';
import './Bookings.css';
import BookingDates from '../../components/bookingDates/BookingDates';

const Bookings = () => {

    const [bookings, setBookings] = useState([]);

    // USE EFFECT to render all user bookings to profile bookings page
    useEffect(() => {
        axios.get('/bookings')
            .then(response => {
                setBookings(response.data);
            });
    }, []);

    


    return (
        <div className='text-white py-36'>
            <h2 className='bookingsTitle'>Account | Bookings</h2>
            <div className='bookingsContainer px-6'>
                {bookings?.length > 0 && bookings.map(booking => (
                    <Link to={`/account/bookings/${booking._id}`} className='bookingLink bg-dark flex gap-4 rounded-2xl overflow-hidden'>
                        <div className='flex w-52 h-52 grow shrink-0'>
                            <VehicleRentalImg vehicleRental={booking.vehicleRental} className='aspect-square object-cover' />
                        </div>
                        <div className='bookingDetails py-3 grow shrink-0'>
                            <h2 className='vehicleBookingTitle text-2xl font-semibold'>{booking.vehicleRental.year} {booking.vehicleRental.make} {booking.vehicleRental.model}</h2>
                            <div className='text-white text-lg font-semibold'>
                                <BookingDates booking={booking} className='flex flex-wrap mb-2 mt-4' />
                                <div className="flex gap-2 text-xl pt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                    </svg>
                                    <span className='text-xl'>
                                        Total price : ${booking.totalPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Bookings