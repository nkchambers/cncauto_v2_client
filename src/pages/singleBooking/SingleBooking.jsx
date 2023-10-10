import axios from 'axios';
import './SingleBooking.css';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCircleCheck, 
    faMapLocationDot, 
    faLeaf, 
    faSdCard, 
    faGasPump, 
    faUsers,
    faThumbsUp,
    faRoad,
    faUmbrella
} from '@fortawesome/free-solid-svg-icons';
import AddressLink from '../../components/addressLink/AddressLink';
import VehicleRentalGallery from '../../components/vehicleRentalGallery/VehicleRentalGallery';
import BookingDates from '../../components/bookingDates/BookingDates';

const SingleBooking = () => {

    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        if (id) {
            axios.get('/bookings')
                .then(response => {
                const foundBooking = response.data.find(({ _id }) => _id === id);
                if (foundBooking) {
                    setBooking(foundBooking);
                }
            });
        }
    }, [id]);
    
    
    if (!booking) {
        return '';
    }

    // DELETE Booking function
    const deleteBooking = (deleteId) => {

        // Make axios call to server to instruct db to delete
        axios.delete(`/bookings/delete/${deleteId}`)
            .then(response => {
                console.log(response.data);
                console.log('Booking Canceled');

                // Remove booking from DOM after delete success
                setBookings(bookings.filter((booking) => booking._id !== deleteId))
                setRedirect(true);
            })
    }


    if (redirect) {
        return <Navigate to={'/account/bookings/'} />
    }




    return (
        <div className='bookingContainer mt-24 py-16 px-auto text-white'>
                <h1 className='bookingTitle text-4xl'>{booking.vehicleRental.year} {booking.vehicleRental.make} {booking.vehicleRental.model}</h1>
                <AddressLink className='bookingAddress gap-2 my-2 block text-2xl'>{booking.vehicleRental.cityAddress}</AddressLink>
                <div className='bookingInfo bg-dark p-4 my-8 rounded-2xl flex items-center justify-between border-t border-secondary'>
                    <div>
                        <h2 className='text-2xl mb-4'>Your booking information</h2>
                        <BookingDates booking={booking} className='text-lg items-center' />
                    </div>
                    <div className='bookingPrice p-6 rounded-2xl font-semibold'>
                        <div className='text-white text-2xl'>Total price</div>
                        <div className='text-3xl'>${booking.totalPrice}</div>
                    </div>
                </div>
                <div className='my-12'>
                    <VehicleRentalGallery vehicleRental={booking.vehicleRental} />
                </div>
            <hr />
                <div className='gap-8 d-flex'>
                    <div className='bookingDesc'>
                        <div className='my-4 text-lg'>
                            <h2 className='vehicleRentalDescTitle font-semibold text-3xl py-4'>Description</h2>
                            <p className='vehicleRentalDesc text-xl'>{booking.vehicleRental.description}</p>
                        </div>
                    </div>
                    <div className='bookingBasicFContainer'>
                        <h3 className='basicFeaturesTitle font-semibold'>Vehicle Rental Features</h3>
                        <div className="bookingBasicFeatures">
                            <div className="bookingLeftCol">
                                <div className="econFeature">
                                    <span><FontAwesomeIcon className="faIcons" icon={faLeaf} /></span>
                                    <p>Avg {booking.vehicleRental.avgMPG} MPG</p>
                                </div>
                                <div className="numDoors">
                                    <span><FontAwesomeIcon className="faBookingDoorIcon" icon={faSdCard} /></span>
                                    <p>{booking.vehicleRental.doors} Doors</p>
                                </div>
                            </div>
                            <div className="bookingRightCol">
                                <div className="gasType">
                                    <span><FontAwesomeIcon className="faIcons" icon={faGasPump} /></span>
                                    <p>Gas ({booking.vehicleRental.fuelType})</p>
                                </div>
                                <div className="numSeats">
                                    <span><FontAwesomeIcon className="faIcons" icon={faUsers} /></span>
                                    <p>{booking.vehicleRental.seats} Seats</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr className='mt-5' />
                <div className='bg-dark my-14 rounded-2xl px-8 py-8 border-t border-secondary'>
                    <h2 className='featuresInfoTitle font-semibold text-3xl pl-2'>Extras</h2>

                    <div className='text-lg p-2 border border-secondary rounded-xl my-4'>
                        {booking.vehicleRental.features.length > 0 && booking.vehicleRental.features.map(feature => (
                            <div className='featuresContainer text-2xl'>
                                <ul className='featureItemContainer p-2'>
                                    <li className='featureItem p-1 mb-1 d-flex justify-content-between align-items-center'>
                                        <div className='feature'>
                                            {feature}
                                        </div>
                                        <div className='iconContainer'>
                                            <FontAwesomeIcon className='circleCheckIcon p-1' icon={faCircleCheck} size='xl' />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            <hr />
                <div className="vehicleBenefits">
                    <div className='cancelBooking'>
                        <h3 className='bookingBenefitsTitle font-semibold'>Rental Benefits</h3>
                        <div className="cancellation">
                            <span className="faIcons"><FontAwesomeIcon icon={faThumbsUp} /></span>
                            <p className='text-2xl'>Free Cancellation</p>
                        </div>
                        <div className="listItems">
                            <p className="benefitItems">- Free cancellation up to 24 hours prior to booking start time</p>
                        </div>
                    </div>
                    <div className="distanceIncluded">
                        <div className="distanceTop">
                            <span className="faIcons"><FontAwesomeIcon icon={faRoad} /></span>
                            <p className='text-2xl'>Distance Included</p>
                        </div>
                        <div className="listItems">
                            <p className="benefitItems">- 250 Miles / Day</p>
                            <p className="benefitItems">- Daily price/daily distance included = additional distance fee/mile</p>
                        </div>
                    </div>
                    {/* <div className="insuranceCoverage">
                        <div className="insuranceTop">
                            <span className="faIcons"><FontAwesomeIcon icon={faUmbrella} /></span>
                            <p>Insurance Coverage</p>
                        </div>
                        <div className="listItems">
                            <p className="benefitItems">- Insurance provided via Travelers</p>
                        </div>
                    </div> */}
                </div>
            <hr />
                <div className="pickupReturn pt-8">
                    <div className="homeLocation d-flex align-items-center gap-4 text-3xl px-3">
                        <span><FontAwesomeIcon className='locationDotIcon' icon={faMapLocationDot} size='lg' /></span>
                        <h3 className='bookingLocationTitle font-semibold'>Pickup / Return Location</h3>
                    </div>
                    <p className='mapLocation pl-20 m-2 text-2xl'>- {booking.vehicleRental.mapLocation}</p>
                    <iframe
                        width='100%'
                        height="600"
                        loading="lazy"
                        allowFullScreen
                        src={booking.vehicleRental.mapImage}>
                    </iframe>
                </div>
            <hr className='mt-14' />
                <div>
                    <button className='cancelButton rounded-2xl w-full mt-12' onClick={() => deleteBooking(booking._id)}>Cancel Booking</button>
                </div>
        </div>
    );
}

export default SingleBooking