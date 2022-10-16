import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import './App.css'
import Footer from './Pages/Shared/Footer';
import PageNotFound from './Pages/Shared/PageNotFound';
import Signup from './Pages/Login/Signup';
import Login from './Pages/Login/Login';

const App = () => {
  return (
    <div>

        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>

        <Footer/>

    </div>
  );
};

export default App;