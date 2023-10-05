import React, { useContext, useEffect, useState } from 'react';
import { differenceInCalendarDays } from 'date-fns';
import axios from 'axios';
import './BookingWidget.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../userContext/UserContext';
import { DatePicker, Space } from 'antd';



const BookingWidget = ({ vehicleRental }) => {

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [redirect, setRedirect]  = useState('');
    const [totalHours, setTotalHours] = useState(0);

    const {user} = useContext(UserContext);

    const { RangePicker } = DatePicker;

    const selectDates = (values) => {
        console.log(values[0].format('MMM Do YYYY hh:mm a'));
        console.log(values[1].format('MMM Do YYYY hh:mm a'));

        setCheckIn(values[0].format('MMM Do YYYY hh:mm a'));
        setCheckOut(values[1].format('MMM Do YYYY hh:mm a'));

        setTotalHours(values[1].diff(values[0], 'hours'));
    }


    // let numOfDays = 0;

    // if (checkIn && checkOut) {
    //     numOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    // }
    

    useEffect(() => {
        if (user) {
            setName(user.firstName + ' ' + user.lastName);
            setEmail(user.email);
        }
    }, [user]);


    async function bookVehicleRental() {
        if (user) {
            const response = await axios.post('/bookings', {
                checkIn, 
                checkOut,  
                name,
                email, 
                phoneNumber, 
                vehicleRental: vehicleRental._id,
                totalHours,
                totalPrice: Math.ceil(totalHours / 24) * vehicleRental.pricePerDay
            });
    
            const bookingId = response.data._id;
            setRedirect(`/account/bookings/${bookingId}`);
        }
        else {
            alert('Create an account or login to book vehicle');
            setRedirect('/register');
        }
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }


    return (

        <div className='widgetContainer border-t border-secondary p-4 rounded-2xl bs2'>
            <div className='priceTitle font-semibold text-2xl text-center'>
                Price: ${vehicleRental.pricePerDay} / per day
            </div>
            <div className="border border-secondary rounded-2xl mt-4">
                <div className="flex font-semibold">
                    <Space direction='vertical' size={12} >
                        <RangePicker
                            showTime={{ format: 'hh:mm a' }}
                            format='MMM Do YYYY hh:mm a'
                            onChange={selectDates}
                            style={{padding: '15px', margin: '20px 10px'}}
                        />
                    </Space>
                </div>

                {totalHours > 0 && (
                    <div className='p-4 border-t border-secondary font-semibold mt-2'>
                        <label className='text-lg pr-3'>Your full name</label>
                        <input 
                            type="text" 
                            className='bg-white text-black font-bold p-2 mb-3 rounded-xl'
                            placeholder='John Doe'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className='text-lg pr-3'>Account Email</label>
                        <input 
                            type="text" 
                            className='bg-white text-black font-bold p-2 mb-3 rounded-xl'
                            placeholder='jdoe@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className='text-lg pr-2'>Phone number</label>
                        <input 
                            type="tel"
                            className='bg-white text-black font-bold p-2 rounded-xl'
                            placeholder='(123) 456-7890'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <h3 className='costBreakdown border-t border-secondary font-semibold mt-4 pt-3 text-lg'>Cost Breakdown</h3>
                        <p className='costBreakdown text-lg pt-1'>${vehicleRental.pricePerDay} / day x {Math.ceil(totalHours / 24)} days = ${Math.ceil(totalHours / 24) * vehicleRental.pricePerDay}
                        </p>
                    </div>
                    )
                }
            </div>
            <button onClick={bookVehicleRental} className='bookButton rounded-2xl w-full mt-4'>
                Book Rental Vehicle
                {totalHours > 0 && (
                    <span> | ${Math.ceil(totalHours / 24) * vehicleRental.pricePerDay}</span>
                )}
            </button>
        </div>
    )
}

export default BookingWidget