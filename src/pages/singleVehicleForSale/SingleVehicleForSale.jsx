import axios from 'axios';
import './SingleVehicleForSale.css';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
import VehicleForSaleGallery from '../../components/vehicleForSaleGallery/VehicleForSaleGallery';
import AddressLink from '../../components/addressLink/AddressLink';

const SingleVehicleForSale = () => {

    const { id } = useParams();
    const [vehicleForSale, setVehicleForSale] = useState(null);


    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/vehiclesForSale/${id}`)
            .then(response => {
                setVehicleForSale(response.data);
            });
    }, [id]);



    if (!vehicleForSale) {
        return '';
    }



    return (

        <div className='text-white px-4 py-12 mt-24'>
            <h1 className='vehicleForSaleTitle text-3xl'>{vehicleForSale.year} {vehicleForSale.make} {vehicleForSale.model}</h1>
            <div className='vehicleForSaleAddress text-2xl'>
                <AddressLink>{vehicleForSale.cityAddress}</AddressLink>
            </div>
            <VehicleForSaleGallery vehicleForSale={vehicleForSale} />
            <hr className='my-5' />
            <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] mb-16 gap-8'>
                <div className='text-lg'>
                    <h2 className='vehicleForSaleDescTitle font-semibold text-3xl py-2'>Description</h2>
                    <p className='vehicleForSaleDesc text-xl'>{vehicleForSale.description}</p>
                </div>
                <div className='vehicleForSaleNote bg-dark rounded-2xl p-4 text-center border-t border-secondary'>
                    <h3 className='noteTitle text-2xl font-semibold'>NUMBERS TO NOTE</h3>
                    <p className='pt-4 vehicleForSalePrice text-xl'>Price | ${vehicleForSale.salePrice}</p>
                    <p className='pt-2 vehicleForSaleMileage text-xl'>Mileage | {vehicleForSale.mileage} miles</p>
                </div>
            </div>
            <hr className='py-2' />
            <div className='rentalBasicFContainer'>
                <h3 className='rentalInfoTitle font-semibold'>Vehicle Features</h3>
                <div className="rentalBasicFeatures mt-5">
                    <div className="leftCol">
                        <div className="rentalEconFeature">
                            <span><FontAwesomeIcon className="faIcons" icon={faLeaf} /></span>
                            <p>Avg {vehicleForSale.avgMPG} MPG</p>
                        </div>
                        <div className="rentalNumDoors">
                            <span><FontAwesomeIcon className="faDoorIcon" icon={faSdCard} /></span>
                            <p>{vehicleForSale.doors} Doors</p>
                        </div>
                    </div>
                    <div className="rightCol">
                        <div className="rentalGasType">
                            <span><FontAwesomeIcon className="faIcons" icon={faGasPump} /></span>
                            <p>Gas ({vehicleForSale.fuelType})</p>
                        </div>
                        <div className="rentalNumSeats">
                            <span><FontAwesomeIcon className="faIcons" icon={faUsers} /></span>
                            <p>{vehicleForSale.seats} Seats</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark my-14 rounded-2xl px-8 py-8 border-t border-secondary'>
                <h2 className='featuresInfoTitle font-semibold text-3xl pl-2'>Extras</h2>

                <div className='text-lg p-2 border border-secondary rounded-xl my-4'>
                    {vehicleForSale.features.length > 0 && vehicleForSale.features.map(feature => (
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
                    <h3 className='benefitsTitle font-semibold'>For Sale Info</h3>
                    <div className="cancellation">
                        <span className="faIcons"><FontAwesomeIcon icon={faThumbsUp} /></span>
                        <p className='text-2xl'>Clean Title</p>
                    </div>
                    <div className="listItems">
                        <p className="benefitItems">- 2nd Owner, clean title and carfax report in hand</p>
                    </div>
                </div>
                <div className="distanceIncluded">
                    <div className="distanceTop">
                        <span className="faIcons"><FontAwesomeIcon icon={faRoad} /></span>
                        <p className='text-2xl'>Interested? Contact Us</p>
                    </div>
                    <div className="listItems">
                        <p className="benefitItems">- Contact us about test driving this car or make us an offer</p>
                        <Link to={'/contact'}><button className="forSaleContactButton">Contact</button></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="pickupReturn pt-8">
                <div className="homeLocation d-flex align-items-center gap-4 text-3xl p-2">
                    <span><FontAwesomeIcon className='locationDotIcon' icon={faMapLocationDot} size='lg' /></span>
                    <h1 className='pickupLocationTitle font-semibold'>Vehicle Location</h1>
                </div>
                <p className='mapLocation pl-20 pb-4 m-2 text-2xl'>- {vehicleForSale.mapLocation}</p>
                <iframe
                    width='100%'
                    height="600"
                    loading="lazy"
                    allowfullscreen
                    src={vehicleForSale.mapImage}>
                </iframe>
            </div>
        </div>

    )
}

export default SingleVehicleForSale