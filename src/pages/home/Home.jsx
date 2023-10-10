import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMapLocationDot,
    faWarehouse
} from '@fortawesome/free-solid-svg-icons';
import LightsHome1 from "../../assets/home_img/LightsHome1.gif";
import HowItWorks from '../../components/howItWorks/HowItWorks';
import ExpType from '../../components/expType/ExpType';
import CityLocation from '../../components/cityLocation/CityLocation';
import Footer from '../../components/footer/Footer';

const Home = () => {

    return (
        <div className="homeWrapper">
            <div className="homeHeaderImg">
                <img src={LightsHome1} alt="car with active headlights" />
            </div>

            <div className="missionServiceContainer text-white">
                <div>
                <hr className='my-8' />

                    <h3 className='missionTitle font-semibold'>Our Mission</h3>
                    <p className='missionDesc'>
                        Here at C&C Auto we are car enthusiasts on a mission to provide high quality rental vehicles suitable for any occassion and a thrill to drive, all at affordable daily prices. 
                        Whether you want to take a car for a test drive or need a fun car to drive while on vacation, rest assured, we have you covered!
                    </p>

                    <hr className='my-12' />
                </div>
            
                <div className='serviceLocationContainer'>
                    <div className="servicesContainer">
                        <div className="servicesTitleContainer">
                            <span className="faIcons"><FontAwesomeIcon icon={faWarehouse} size='2xl' /></span>
                            <p className='servicesTitle font-semibold'>Our Services</p>
                        </div>

                        <div className="serviceItemList">
                            <p className="serviceItems">- Vehicle Rentals</p>
                            <p className="serviceItems">- Vehicles Sales</p>
                        </div>

                        <hr className='my-12' />
                    </div>

                    <div className="locationsContainer">
                        <div className="locationsTitleContainer">
                            <span className="faIcons"><FontAwesomeIcon icon={faMapLocationDot} size='2xl' /></span>
                            <p className='locationsTitle font-semibold'>Service Locations</p>
                        </div>

                        <div className="locationItemList">
                            <p className="locationItems">- Seattle, WA</p>
                            <p className="locationItems">- New York, NY</p>
                        </div>

                        <hr className='my-12' />
                    </div>
                </div>
            </div>

            <HowItWorks />
            <ExpType />
            <CityLocation />
            <Footer />
        </div>
    )
}

export default Home