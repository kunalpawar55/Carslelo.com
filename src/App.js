import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import GetCarbyId from './Component/Cars pages/GetCarbyId';
import Makebid from './Component/Cars pages/Makebid';
import AdminBidSection from './Component/Admin/AdminBidSection';
import AddCar from './Component/Admin/AddCar';
import Header from './Component/Header';
import RegistrationUser from './Component/RegistrationUser';
import Footer from './Component/Footer';


function App() {
  return (
    <><Header/>
<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/car/:id" element={<GetCarbyId />} />
        <Route path='/makebid/:id' element={<Makebid/>} />
        <Route path='/Admin' element={<AdminBidSection/>}/>
                <Route path='/AddCars' element={<AddCar/>}/>
<Route path='/registration' element={<RegistrationUser/>} />
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
