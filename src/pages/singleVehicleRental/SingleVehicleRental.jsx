import axios from 'axios';
import './SingleVehicleRental.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
import BookingWidget from '../../components/bookingWidget/BookingWidget';
import VehicleRentalGallery from '../../components/vehicleRentalGallery/VehicleRentalGallery';
import AddressLink from '../../components/addressLink/AddressLink';


const SingleVehicleRental = () => {

    const { id } = useParams();
    const [vehicleRental, setVehicleRental] = useState(null);


    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/vehicleRentals/${id}`)
            .then(response => {
                setVehicleRental(response.data);
            });
    }, [id]);



    if (!vehicleRental) {
        return '';
    }



    return (

        <div className='text-white px-4 py-12 mt-24'>
            <h1 className='vehicleRentalTitle text-3xl'>{vehicleRental.year} {vehicleRental.make} {vehicleRental.model}</h1>
            <div className='vehicleRentalAddress text-2xl'>
                <AddressLink>{vehicleRental.cityAddress}</AddressLink>
            </div>
            <VehicleRentalGallery vehicleRental={vehicleRental} />
            <hr className='my-5' />
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] mt-12 mb-16 gap-12'>
                <div>
                    <div className=' my-4 text-lg'>
                        <h2 className='vehicleRentalDescTitle font-semibold py-3'>Description</h2>
                        <p className='vehicleRentalDesc text-xl'>{vehicleRental.description}</p>
                    </div>
                </div>
                <div className='dateRangePicker mt-5'>
                    <BookingWidget vehicleRental={vehicleRental} />
                </div>
            </div>
            <hr />
            <div className='rentalBasicFContainer'>
                <h3 className='rentalInfoTitle font-semibold'>Vehicle Rental Features</h3>
                <div className="rentalBasicFeatures mt-5">
                    <div className="leftCol">
                        <div className="rentalEconFeature">
                            <span><FontAwesomeIcon className="faIcons" icon={faLeaf} /></span>
                            <p>Avg {vehicleRental.avgMPG} MPG</p>
                        </div>
                        <div className="rentalNumDoors">
                            <span><FontAwesomeIcon className="faDoorIcon" icon={faSdCard} /></span>
                            <p>{vehicleRental.doors} Doors</p>
                        </div>
                    </div>
                    <div className="rightCol">
                        <div className="rentalGasType">
                            <span><FontAwesomeIcon className="faIcons" icon={faGasPump} /></span>
                            <p>Gas ({vehicleRental.fuelType})</p>
                        </div>
                        <div className="rentalNumSeats">
                            <span><FontAwesomeIcon className="faIcons" icon={faUsers} /></span>
                            <p>{vehicleRental.seats} Seats</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark my-14 rounded-2xl px-8 py-8 border-t border-secondary'>
                <h2 className='featuresInfoTitle font-semibold text-3xl pl-2'>Extras</h2>

                <div className='text-lg p-2 border border-secondary rounded-xl my-4'>
                    {vehicleRental.features.length > 0 && vehicleRental.features.map(feature => (
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
                    <h3 className='benefitsTitle font-semibold'>Rental Benefits</h3>
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
                <div className="homeLocation d-flex align-items-center gap-4 text-3xl p-2">
                    <span><FontAwesomeIcon className='locationDotIcon' icon={faMapLocationDot} size='lg' /></span>
                    <h1 className='pickupLocationTitle font-semibold'>Pickup / Return Location</h1>
                </div>
                <p className='mapLocation pl-20 pb-4 m-2 text-2xl'>- {vehicleRental.mapLocation}</p>
                <iframe
                    width='100%'
                    height="600"
                    loading="lazy"
                    allowfullscreen
                    src={vehicleRental.mapImage}>
                </iframe>
            </div>
        </div>

    )
}

export default SingleVehicleRental