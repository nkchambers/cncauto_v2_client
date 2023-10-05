import './App.css';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { UserContextProvider } from './userContext/UserContext';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import UserProfile from './pages/userProfile/UserProfile';
import VehicleRentals from './pages/vehicleRentals/VehicleRentals';
import SedanRentals from './pages/sedanRentals/SedanRentals';
import VanRentals from './pages/vanRentals/VanRentals';
import TruckRentals from './pages/truckRentals/TruckRentals';
import SuvRentals from './pages/suvRentals/SuvRentals';
import SeattleRentals from './pages/seattleRentals/SeattleRentals';
import NewYorkRentals from './pages/newYorkRentals/NewYorkRentals';
import SingleVehicleRental from './pages/singleVehicleRental/SingleVehicleRental';
import VehiclesForSale from './pages/vehiclesForSale/VehiclesForSale';
import SingleVehicleForSale from './pages/singleVehicleForSale/SingleVehicleForSale';
import VehicleRentalForm from './components/vehicleRentalForm/VehicleRentalForm';
import VehicleForSaleForm from './components/vehicleForSaleForm/VehicleForSaleForm';
import ManageRentals from './pages/manageRentals/ManageRentals';
import ManageForSale from './pages/manageForSale/ManageForSale';
import Bookings from './pages/bookings/Bookings';
import SingleBooking from './pages/singleBooking/SingleBooking';



axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000';  

function App() {

  return (
    
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/account/profile' element={<UserProfile />} />
          <Route path='/account/vehicles/rentals' element={<ManageRentals />} />
          <Route path='/account/vehicles/forSale' element={<ManageForSale />} />
          <Route path='/account/vehicleRentals/new' element={<VehicleRentalForm />} />
          <Route path='/account/vehicleRentals/:id' element={<VehicleRentalForm />} />
          <Route path='/account/vehiclesForSale/new' element={<VehicleForSaleForm />} />
          <Route path='/account/vehiclesForSale/:id' element={<VehicleForSaleForm />} />
          <Route path='/account/bookings' element={<Bookings />} />
          <Route path='/account/bookings/:id' element={<SingleBooking />} />
          <Route path='/vehicles/rentals' element={<VehicleRentals />} />
          <Route path='/vehicles/rentals/sedan' element={<SedanRentals />} />
          <Route path='/vehicles/rentals/van' element={<VanRentals />} />
          <Route path='/vehicles/rentals/truck' element={<TruckRentals />} />
          <Route path='/vehicles/rentals/suv' element={<SuvRentals />} />
          <Route path='/vehicles/rentals/seattle' element={<SeattleRentals />} />
          <Route path='/vehicles/rentals/newYork' element={<NewYorkRentals />} />
          <Route path='/vehicles/rentals/:id' element={<SingleVehicleRental />} />
          <Route path='/vehicles/forSale/:id' element={<SingleVehicleForSale />} />
          <Route path='/vehicles/forSale' element={<VehiclesForSale />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>

  )
}

export default App
