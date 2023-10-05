import React from 'react';

const VehicleForSaleImg = ({vehicleForSale, index = 0, className = null}) => {

    if (!vehicleForSale.photos?.length) {
        return '';
    }

    if (!className) {
        className = 'object-cover';
    }

    return (
        <img className={className} src={'http://localhost:5000/uploads/' + vehicleForSale.photos[index]} alt="" />
    )
}

export default VehicleForSaleImg