import React from 'react';

const VehicleRentalImg = ({vehicleRental, index = 0, className = null}) => {

    if (!vehicleRental.photos?.length) {
        return '';
    }

    if (!className) {
        className = 'object-cover';
    }

    return (
        <img className={className} src={'http://localhost:5000/uploads/' + vehicleRental.photos[index]} alt="" />
    )
}

export default VehicleRentalImg