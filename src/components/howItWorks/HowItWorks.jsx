import React from 'react';
import {
    faCarSide,
    faTruckPickup,
    faVanShuttle,
    faMotorcycle,
    faTruck,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    faCreditCard,
    faTableList,
    faEye
} from "@fortawesome/free-solid-svg-icons";
import {
    faCalendarDays,
    faCalendarCheck
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HowItWorks.css'

const HowItWorks = () => {
    return (

        <div className="howItWorks">
            <div className="howItWorksTitle">
                <h1>How</h1>
                <div className="brandLogo">
                    <div className="ChambersChung">C</div>
                    <span id="brandChar">&amp;</span>
                    <div className="ChambersChung">C</div>
                </div>
                <h1>Works</h1>
            </div>
            <div className="howItWorksDesc">
                <div className="stepDesc">
                    <span className="numIcons"><FontAwesomeIcon icon={fa1} /></span>
                    <p>Browse Rental Vehicles</p>
                    <span className="stepDescIcons"><FontAwesomeIcon icon={faTableList} /></span>
                </div>
                <div className="stepDesc">
                    <span className="numIcons"><FontAwesomeIcon icon={fa2} /></span>
                    <p>Select Vehicle to View Rental Details</p>
                    <span className="stepDescIcons"><FontAwesomeIcon icon={faEye} /></span>
                </div>
                <div className="stepDesc">
                    <span className="numIcons"><FontAwesomeIcon icon={fa3} /></span>
                    <p> Select Dates & Enter Phone Number</p>
                    <span className="stepDescIcons"><FontAwesomeIcon icon={faCalendarDays} /></span>
                </div>
                <div className="stepDesc">
                    <span className="numIcons"><FontAwesomeIcon icon={fa4} /></span>
                    <p>Select Book Rental Vehicle</p>
                    <span className="stepDescIcons"><FontAwesomeIcon icon={faCalendarCheck} /></span>
                </div>
                <div className="stepDesc">
                    <span className="numIcons"><FontAwesomeIcon icon={fa5} /></span>
                    <p>Enter Payment Info & Drive!</p>
                    <span className="stepDescIcons"><FontAwesomeIcon icon={faCreditCard} /></span>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks