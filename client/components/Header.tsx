import React from 'react';
import { FaBars, FaFacebook, FaPhone, FaTimes, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import logo from "../../assets/images/logo.svg";
import logo_blue from "../../assets/images/logo-blue.svg";

const Header = () => {
  return (
    <div className="container">
      <header className="absolute top-0 left-0 w-screen pt-32 z-40">

        <div className="absolute top-0 left-0 w-screen py-6 border flex justify-around">
          <a href="#" className="">
            <Image src={logo} alt="Tourly logo" />
          </a>


          <a href="tel:+01123456790" className="flex">
            <div className=""><FaPhone className="text-font-light p-2 border border-primary-color rounded-lg text-4xl m-2" /></div>
            <div className="">
              <p className="text-font-light">For Further Inquires :</p>
              <p className="text-font-light">+01 (123) 4567 90</p>
            </div>
          </a>
        </div>

        <div className="container flex justify-between">
          <ul className="flex items-center">
            <li><a href="#"><FaFacebook className="text-font-light p-2 border border-bg-color rounded-full text-4xl m-2  hover:bg-gray-400" /></a></li>
            <li><a href="#"><FaTwitter className="text-font-light p-2 border border-bg-color rounded-full text-4xl m-2  hover:bg-gray-400" /></a></li>
            <li><a href="#"><FaYoutube className="text-font-light p-2 border border-bg-color rounded-full text-4xl m-2  hover:bg-gray-400" /></a></li>
          </ul>

          <nav className="flex items-center justify-between transition ease-in duration-150">
            {/* <div className="flex justify-between items-center pt-40 pb-40 pl-15 pr-15">
              <a href="#" className="">
                <Image src={logo_blue} alt="Tourly logo" />
              </a>


              <div className="">
                <button className="" aria-label="Close Menu"><FaTimes /></button>
                <button className="" aria-label="Close Menu"><FaBars /></button>
              </div>
            </div> */}

            <ul className="flex">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/aboutus" className="nav-link">About</a></li>
              <li><a href="/all-blogs" className="nav-link">Blogs</a></li>
              <li><a href="/tour-package" className="nav-link">Packages</a></li>
              <li><a href="/register" className="nav-link">Register</a></li>
              <li><a href="/login" className="nav-link">Login</a></li>
              <li><a href="/logout" className="nav-link">Logout</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          <button className="primary-btn">Book Now</button>
        </div>

      </header>
    </div>
  )
}

export default Header