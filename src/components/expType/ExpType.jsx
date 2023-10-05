import Sedan_Honda_Civic from "../../assets/expType_img/Sedan_Honda_Civic.jpg";
import Van_Ford_Transit from '../../assets/expType_img/Van_Ford_Transit.jpg';
import Truck_Chevrolet_Colorado from "../../assets/expType_img/Truck_Chevrolet_Colorado.jpg";
import Suv_Bmw_X5 from "../../assets/expType_img/Suv_Bmw_X5.jpg";
import "./ExpType.css";
import { Link } from "react-router-dom";

const ExpType = () => {


    return (
        
        <div className="expListContainer">
            <h1 className="expListTitle">Browse by Experience</h1>

            <div className="expTypeContainer">
                <Link to={ `/vehicles/rentals/sedan` } style={{ color: "white", textDecoration: "none" }}>
                    <div className="expType">
                        <img src={ Sedan_Honda_Civic } alt="Honda Civic Sedan" />
                        <div className="expTitles">
                            <h1>Sedan Rentals</h1>
                        </div>
                    </div>
                </Link>
                <Link to={ `/vehicles/rentals/van` } style={{ color: "white", textDecoration: "none" }}>
                    <div className="expType">
                        <img src={ Van_Ford_Transit } alt="Ford Transit Van" />
                        <div className="expTitles">
                            <h1>Van Rentals</h1>
                        </div>
                    </div>
                </Link>
                <Link to={ `/vehicles/rentals/truck` } style={{ color: "white", textDecoration: "none" }}>
                    <div className="expType">
                        <img src={ Truck_Chevrolet_Colorado } alt="Chevrolet Colorado Truck" />
                        <div className="expTitles">
                            <h1>Truck Rentals</h1>
                        </div>
                    </div>
                </Link>
                <Link to={ `/vehicles/rentals/suv` } style={{ color: "white", textDecoration: "none" }}>
                    <div className="expType">
                        <img src={ Suv_Bmw_X5 } alt="BMW X5 SUV" />
                        <div className="expTitles">
                            <h1>SUV Rentals</h1>
                        </div>
                    </div>
                </Link>
            </div> 

        </div>
    )
}

export default ExpType