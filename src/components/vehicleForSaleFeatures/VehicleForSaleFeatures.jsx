import React from 'react';
import './VehicleForSaleFeatures.css';
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

const VehicleForSaleFeatures = ({ selected, onChange }) => {

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
                <input type="checkbox" checked={selected.includes('usbCharger')} name='usbCharger' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faUsb} />
                <span>USB charger / input</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('bluetooth')} name='bluetooth' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faBluetooth} />
                <span>Bluetooth</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('keylessEntry')} name='keylessEntry' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faUnlock} />
                <span>Keyless entry</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('longTermCar')} name='longTermCar' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCalendarCheck} />
                <span>Long-term car - 30 days max</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('backupCamera')} name='backupCamera' onChange={handleCbClick} />
                <div className="vehicleBackupCamera">
                    <span><FontAwesomeIcon className="faIcons" icon={faCarRear} /></span>
                    <span className="vehicleIconWifi"><FontAwesomeIcon className="faIcons" icon={faWifi} /></span>
                </div>
                <span>Backup camera</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('collisionSensors')} name='collisionSensors' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCircleExclamation} />
                <span>Collision warning sensors</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('heatedFrontSeats')} name='heatedFrontSeats' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRulerCombined} />
                <span>Heated front seats</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('heatedRearSeats')} name='heatedRearSeats' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRulerCombined} />
                <span>Heated rear seats</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('heatedSteeringWheel')} name='heatedSteeringWheel' onChange={handleCbClick} />
                <FontAwesomeIcon className='steeringWheelIcon' icon={faCirclePause} />
                <span>Heated steering wheel</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('sunroof')} name='sunroof' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faSun} />
                <span>Sunroof</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('lane-assist')} name='lane-assist' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faLinesLeaning} />
                <span>Lane-assist</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('parking-assist')} name='parking-assist' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faSquareParking} />
                <span>Parking-assist</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('appleCarplay')} name='appleCarplay' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCirclePlay} />
                <span>Apple Carplay</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('androidAuto')} name='androidAuto' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faAndroid} />
                <span>Android Auto</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('remoteStart')} name='remoteStart' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faMobileScreenButton} />
                <span>Remote Start</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('wirelessCharging')} name='wirelessCharging' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faBatteryHalf} />
                <span>Wireless phone charging</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('21PlusToBook')} name='21PlusToBook' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={fa2} />
                <FontAwesomeIcon className='faIcons numberOneIcon' icon={fa1} />
                <FontAwesomeIcon className='faIcons plusIcon' icon={faPlus} />
                <span>Must be 21+ to book</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('blindSpotWarning')} name='blindSpotWarning' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCarOn} />
                <span>Blind spot warning</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('automaticTransmission')} name='automaticTransmission' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faA} />
                <span>Automatic Transmission</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('manualTransmission')} name='manualTransmission' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faM} />
                <span>Manual Transmission</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('rearWheelDrive')} name='rearWheelDrive' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faCarRear} />
                <span>Rear-wheel-drive</span>
            </label>
            <label className='border p-4 flex rounded-2xl gap-4 items-center cursor-pointer text-2xl'>
                <input type="checkbox" checked={selected.includes('allWheelDrive')} name='allWheelDrive' onChange={handleCbClick} />
                <FontAwesomeIcon className='faIcons' icon={faRoadCircleCheck} />
                <span>All-wheel-drive</span>
            </label>
        </>
    )
}

export default VehicleForSaleFeatures