import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import './App.css'
import Footer from './Pages/Shared/Footer';
import PageNotFound from './Pages/Shared/PageNotFound';
import Signup from './Pages/Login/Signup';
import Login from './Pages/Login/Login';
import FoodDetails from './Pages/Home/FoodDetails';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>

        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/food/:foodId' element={<FoodDetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>

        <Footer/>
        <ToastContainer />
    </div>
  );
};

export default App;