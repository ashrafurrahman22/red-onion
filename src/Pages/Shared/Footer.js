import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear();

    return (
        <div className='bg-black text-white'>
            <footer style={{
        fontFamily:"poppins"
      }} className="footer p-10 bg-black text-white">
  <div>
    <img className='w-44' src={logo} alt="" />
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        <div className='flex justify-center pb-6'>
            <p className='text-red-600'>Copyright©{year} Online Food</p>
        </div>
        </div>
    );
};

export default Footer;