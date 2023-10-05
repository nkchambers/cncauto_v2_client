import React from 'react';
import './VehicleRentalFeatures.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluetooth, faUsb, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faCirclePause } from '@fortawesome/free-regular-svg-icons';
import {
    faLeaf,
    faGasPump,
    faSdCard,
    faUsers,
    faDollarSign,
    faThumbsUp,
    faRoad,
    faUmbrella,
    faCarRear,
    faWifi,
    faUnlock,
    faCarSide,
    faTruckPickup,
    faMotorcycle,
    faVanShuttle,
    fa1,
    fa2,
    faPlus,
    faLocationDot,
    faCalendarCheck,
    faCircleExclamation,
    faRulerCombined,
    faSun,
    faLinesLeaning,
    faMobileScreenButton,
    faSquareParking,
    faCirclePlay,
    faBatteryHalf,
    faCarOn,
    faA,
    faRoadCircleCheck,
    faM
} from "@fortawesome/free-solid-svg-icons";

const VehicleRentalFeatures = ({ selected, onChange }) => {

    function handleCbClick(e) {
        const { checked, name } = e.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }

    return (
        <>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('USB Charger')} name='USB Charger' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faUsb} />
                <span>USB charger / input</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Bluetooth')} name='Bluetooth' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faBluetooth} />
                <span>Bluetooth</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Keyless Entry')} name='Keyless Entry' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faUnlock} />
                <span>Keyless entry</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Long-Term Car')} name='Long-Term Car' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCalendarCheck} />
                <span>Long-term car - 30 days max</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Backup Camera')} name='Backup Camera' onChange={handleCbClick} />
                <div className="vehicleBackupCamera">
                    <span><FontAwesomeIcon className="faIcons" icon={faCarRear} /></span>
                    <span className="vehicleIconWifi"><FontAwesomeIcon className="faIcons" icon={faWifi} /></span>
                </div>
                <span>Backup camera</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Collision Sensors')} name='Collision Sensors' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCircleExclamation} />
                <span>Collision warning sensors</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Heated Front Seats')} name='Heated Front Seats' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRulerCombined} />
                <span>Heated front seats</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Heated Rear Seats')} name='Heated Rear Seats' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRulerCombined} />
                <span>Heated rear seats</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Heated Steering Wheel')} name='Heated Steering Wheel' onChange={handleCbClick} />
                <FontAwesomeIcon className='steeringWheelIcon' icon={faCirclePause} />
                <span>Heated steering wheel</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Sunroof')} name='Sunroof' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faSun} />
                <span>Sunroof</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Lane-assist')} name='Lane-assist' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faLinesLeaning} />
                <span>Lane-assist</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Parking-assist')} name='Parking-assist' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faSquareParking} />
                <span>Parking-assist</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Apple Carplay')} name='Apple Carplay' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCirclePlay} />
                <span>Apple Carplay</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Android Auto')} name='Android Auto' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faAndroid} />
                <span>Android Auto</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Remote Start')} name='Remote Start' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faMobileScreenButton} />
                <span>Remote Start</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Wireless Charging')} name='Wireless Charging' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faBatteryHalf} />
                <span>Wireless phone charging</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Must be 21+ to Book')} name='Must be 21+ to Book' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={fa2} />
                <FontAwesomeIcon className='faIcons numberOneIcon' icon={fa1} />
                <FontAwesomeIcon className='faIcons plusIcon' icon={faPlus} />
                <span>Must be 21+ to book</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Blind Spot Warning')} name='Blind Spot Warning' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCarOn} />
                <span>Blind spot warning</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Automatic Transmission')} name='Automatic Transmission' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faA} />
                <span>Automatic Transmission</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Manual Transmission')} name='Manual Transmission' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faM} />
                <span>Manual Transmission</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('Rear-Wheel Drive')} name='Rear-Wheel Drive' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCarRear} />
                <span>Rear-wheel-drive</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('All-Wheel-Drive')} name='All-Wheel-Drive' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRoadCircleCheck} />
                <span>All-wheel-drive</span>
            </label>
        </>
    )
}

export default VehicleRentalFeatures