import React, { useEffect, useState } from 'react';
import './VehiclesForSale.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VehiclesForSale = () => {

    const [vehiclesForSale, setVehiclesForSale] = useState([]);


    useEffect(() => {
        axios.get('/vehiclesForSale')
            .then(response => {
                setVehiclesForSale(response.data);
            });
    }, []);




    return (

        <div className='text-white py-36'>

            <h2 className='vehiclesForSaleTitle'>Vehicles | For Sale</h2>

            <div className='bg-dark rounded-2xl py-10 px-8 mt-10 gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {vehiclesForSale.length > 0 && vehiclesForSale.map(vehicleForSale => (
                    <div className='vehiclesForSaleContainer'>
                        <Link to={'/vehicles/forSale/' + vehicleForSale._id} className='text-decoration-none'>
                            <div className='bg-gray-500 mb-2 rounded-2xl'>
                                {vehicleForSale.photos?.[0] && (
                                    <img
                                        className='rounded-2xl object-cover aspect-square'
                                        src={'http://localhost:5000/uploads/' + vehicleForSale.photos?.[0]} alt=""
                                    />
                                )}
                            </div>
                            <h2 className='pt-1 text-white text-lg font-bold'>{vehicleForSale.cityAddress}</h2>
                            <h3 className='text-white text-lg'>{vehicleForSale.year} {vehicleForSale.make} {vehicleForSale.model}</h3>
                            <div className='vehiclesForSalePrice'>
                                <span className='font-bold'>${vehicleForSale.salePrice}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            
        </div>

    )
}

export default VehiclesForSale