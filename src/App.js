import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import './App.css'
import Footer from './Pages/Shared/Footer';

const App = () => {
  return (
    <div>

        <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>

        <Footer/>

    </div>
  );
};

export default App;