import React, { useEffect, useState } from 'react';
import VehicleRentalFeatures from '../vehicleRentalFeatures/VehicleRentalFeatures.jsx';
import PhotosUploader from '../photosUploader/PhotosUploader';
import axios from 'axios';
import './VehicleForSaleForm.css';
import { Navigate, useParams } from 'react-router-dom';

const VehicleForSaleForm = () => {

    const { id } = useParams();

    const [year, setYear] = useState(2010);
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [mileage, setMileage] = useState(5);
    const [avgMPG, setAvgMPG] = useState(25);
    const [doors, setDoors] = useState(4);
    const [fuelType, setFuelType] = useState('');
    const [seats, setSeats] = useState(5);
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState([]);
    const [cityAddress, setCityAddress] = useState('');
    const [mapLocation, setMapLocation] = useState('');
    const [mapImage, setMapImage] = useState('');
    const [salePrice, setSalePrice] = useState(3000);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/vehiclesForSale/' + id)
            .then(response => {
                const { data } = response;
                setYear(data.year);
                setMake(data.make);
                setModel(data.model);
                setAddedPhotos(data.photos);
                setMileage(data.mileage);
                setAvgMPG(data.avgMPG);
                setDoors(data.doors);
                setFuelType(data.fuelType);
                setSeats(data.seats);
                setDescription(data.description);
                setFeatures(data.features);
                setCityAddress(data.cityAddress);
                setMapLocation(data.mapLocation);
                setMapImage(data.mapImage);
                setSalePrice(data.salePrice);
            });

    }, [id]);


    function inputHeader(text) {
        return (
            <h2 className='text-3xl pt-4'>{text}</h2>
        );
    }

    function inputDescription(text) {
        return (
            <p className='text-xl pb-2 pt-1'>{text}</p>
        );
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function saveVehicleForSale(e) {
        e.preventDefault();
        const vehicleForSaleData = {
            year,
            make,
            model,
            addedPhotos,
            mileage,
            avgMPG,
            doors,
            fuelType,
            seats,
            description,
            features,
            cityAddress,
            mapLocation,
            mapImage,
            salePrice
        };

        if (id) {
            // update
            await axios.put('/vehiclesForSale', {
                id, ...vehicleForSaleData
            });
            setRedirect(true);

        } else {
            // new place
            await axios.post('/vehiclesForSale', vehicleForSaleData);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/vehicles/forSale'} />
    }



    return (

        <div>

            <h2 className='formTitle'>Vehicle For Sale Form</h2>
            <div className='forSaleFormContainer rounded-2xl'>
                <form onSubmit={saveVehicleForSale}>
                    {preInput('Year', 'Vehicle Year')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder='example: 2010'
                    />

                    {preInput('Make', 'Vehicle Make')}
                    <input
                        className='bg-dark mb-3'
                        type="text"
                        value={make}
                        onChange={(e) => setMake(e.target.value)}
                        placeholder='example: Honda'
                    />

                    {preInput('Model', 'Vehicle Model')}
                    <input
                        className='bg-dark mb-3'
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder='example: Civic EX'
                    />

                    {preInput('Photos', 'more = better')}
                    <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

                    {preInput('Mileage', 'Vehicle Mileage')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                        placeholder='example: 50000'
                    />

                    {preInput('AvgMPG', 'Vehicle AvgMPG')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={avgMPG}
                        onChange={(e) => setAvgMPG(e.target.value)}
                        placeholder='example: 24'
                    />

                    {preInput('Number of Doors', 'Total number of vehicle doors')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={doors}
                        onChange={(e) => setDoors(e.target.value)}
                        placeholder='example: 4'
                    />

                    {preInput('Fuel Type', 'Vehicle Fuel Type')}
                    <input
                        className='bg-dark mb-3'
                        type="text"
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        placeholder='example: Regular'
                    />

                    {preInput('Number of Seats including driver', 'Total number of seats including driver (all must have working seatbelts)')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                        placeholder='example: 5'
                    />

                    {preInput('Description', 'Description of the vehicle')}
                    <textarea
                        className='bg-dark mb-3 w-full'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Describe the vehicle, its top features and driving experience.'
                    />

                    {preInput('Features', 'Select all vehicle features that apply')}
                    <div className='grid mt-2 gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-3'>
                        <VehicleRentalFeatures
                            selected={features}
                            onChange={setFeatures}
                        />
                    </div>

                    {preInput('City Address ( City, State )', 'Vehicle City Address')}
                    <input
                        className='bg-dark w-50 mb-3'
                        type="text"
                        value={cityAddress}
                        onChange={(e) => setCityAddress(e.target.value)}
                        placeholder='example: New York, NY'
                    />

                    {preInput('Map Location ( City, State Zip Code )', 'Vehicle Map Location')}
                    <input
                        className='bg-dark w-50 mb-3'
                        type="text"
                        value={mapLocation}
                        onChange={(e) => setMapLocation(e.target.value)}
                        placeholder='example: New York, NY 10001'
                    />

                    {preInput('Map Image', 'Vehicle Map Image')}
                    <input
                        className='bg-dark w-50 mb-3'
                        type="text"
                        value={mapImage}
                        onChange={(e) => setMapImage(e.target.value)}
                        placeholder='google maps img url to New York, NY 10001'
                    />

                    {preInput('Vehicle Sale Price', 'Vehicle Sale Price')}
                    <input
                        className='bg-dark mb-3'
                        type="number"
                        value={salePrice}
                        onChange={(e) => setSalePrice(e.target.value)}
                        placeholder='example: 10000'
                    />
                    <br/>
                    
                    <button className='saveButton rounded-2xl w-full'>Save Vehicle</button>
                </form>
            </div>
        </div>
    )
}

export default VehicleForSaleForm