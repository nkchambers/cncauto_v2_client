import Seattle from "../../assets/cityLocation_img/Seattle.jpeg";
import NewYork from "../../assets/cityLocation_img/NewYork.jpeg";
import { Link } from "react-router-dom";
import "./CityLocation.css";

const CityLocation = () => {

    const images = [
        Seattle,
        NewYork
    ];


    return (
        <div className="locationContainer">
            <h1 className="locationTitle">Browse by City</h1>
            
            <div className="cityContainer">
                <Link to={ `/vehicles/rentals/seattle` } style={{color: "white", textDecoration: "none" }}>
                    <div className="cityLocation">
                        <img src={ Seattle } alt="Seattle" />
                        <div className="cityTitles"> 
                            <h1>Seattle Rentals</h1>
                        </div>
                    </div>
                </Link>
                <Link to={ `/vehicles/rentals/newYork` } style={{color: "white", textDecoration: "none" }}>
                    <div className="cityLocation">
                        <img src={ NewYork } alt="New York" />
                        <div className="cityTitles"> 
                            <h1>New York Rentals</h1>
                        </div>
                    </div>
                </Link>
            </div>  
        </div>
    )
}

export default CityLocation;