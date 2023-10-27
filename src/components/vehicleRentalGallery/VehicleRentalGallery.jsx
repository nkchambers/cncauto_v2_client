import React, { useState } from 'react';
import './VehicleRentalGallery.css';

const VehicleRentalGallery = ({ vehicleRental }) => {

    const [showAllPhotos, setShowAllPhotos] = useState(false);


    if (showAllPhotos) {
        return (
            <div className='photoGalleryContainer text-white min-h-screen mt-32'>
                <div className='p-8 grid gap-4 bg-black'>
                    <div className='mb-8'>
                        <h2 className='text-3xl mr-24'>Photos of {vehicleRental.year} {vehicleRental.make} {vehicleRental.model}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className='closeButton right-10 top-45 gap-1 text-2xl font-semibold my-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close
                        </button>
                    </div>
                    {vehicleRental?.photos?.length > 0 && vehicleRental.photos.map(photo => (
                        <div className='flex justify-center bs2 py-8 my-3 rounded-2xl'>
                            <img
                                src={'http://localhost:5000/uploads/' + photo}
                                alt=""
                                width='900px'
                                height='auto'
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }


    return (

        <div className='relative'>
            <div className="gap-2 grid grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
                <div>
                    {vehicleRental.photos?.[0] && (
                        <div>
                            <img
                                onClick={() => setShowAllPhotos(true)}
                                className='aspect-square object-cover cursor-pointer'
                                src={'http://localhost:5000/uploads/' + vehicleRental.photos[0]} 
                                alt=""
                            />
                        </div>
                    )}
                </div>
                <div className='grid'>
                    {vehicleRental.photos?.[1] && (
                        <img
                            onClick={() => setShowAllPhotos(true)}
                            className='aspect-square object-cover cursor-pointer'
                            src={'http://localhost:5000/uploads/' + vehicleRental.photos[1]} 
                            alt=""
                        />
                    )}
                    <div className='overflow-hidden'>
                        {vehicleRental.photos?.[2] && (
                            <img
                                onClick={() => setShowAllPhotos(true)}
                                className='aspect-square object-cover cursor-pointer relative top-2'
                                src={'http://localhost:5000/uploads/' + vehicleRental.photos[2]} 
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </div>
            <button onClick={() => setShowAllPhotos(true)} className='showPhotosButton text-lg font-semibold flex gap-2 absolute bottom-2 right-2 py-2 px-3 rounded-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Show more photos
            </button>
        </div>

    )
}

export default VehicleRentalGallery