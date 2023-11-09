import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaAngleRight, FaMapMarker, FaPhone, FaEnvelope } from "react-icons/fa";
import Image from 'next/image';
import logo from "../../assets/images/logo.svg";


const Footer = () => {
  return (
    <div className="bg-primary-color py-20">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">

          <div className="">
            <a href="/"><Image src={logo} className='my-4' alt="Tourly logo" /></a>
            <p className='text-base font-medium text-font-light'>Sed ipsum clita tempor ipsum ipsum amet sit ipsum <br/> lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
            <h6 className="secondary-btn w-52">Follow Us</h6>
            <div className="flex">
              <a className='no-underline' href="#"><FaTwitter className='text-4xl text-font-light border border-font-light p-2 m-2' /></a>
              <a className='no-underline' href="#"><FaFacebook className='text-4xl text-font-light border border-font-light p-2 m-2' /></a>
              <a className='no-underline' href="#"><FaLinkedin className='text-4xl text-font-light border border-font-light p-2 m-2' /></a>
              <a className='no-underline' href="#"><FaInstagram className='text-4xl text-font-light border border-font-light p-2 m-2' /></a>
            </div>
          </div>

          <div className=" grid justify-start">
            <h5 className="main-title text-font-light">Our Service</h5>
            <div className="grid justify-start">
              <a className='flex nav-link' href="#"><FaAngleRight className='text-xl font-semibold mr-2' />About</a>
              <a className='flex nav-link' href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Destination</a>
              <a className='flex nav-link' href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Packages</a>
              <a className='flex nav-link' href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Guides</a>
              <a className='flex nav-link' href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Testimonial</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Blog</a>
            </div>
          </div>

          <div className=" flex-column justify-start">
            <h5 className=" main-title text-font-light">Usefull Links</h5>
            <div className="grid justify-start">
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />About</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Destination</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Packages</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Guides</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Testimonial</a>
              <a className="flex nav-link" href="#"><FaAngleRight className='text-xl font-semibold mr-2' />Blog</a>
            </div>
          </div>

          <div className=" flex-column justify-start">
            <h5 className="main-title text-font-light">Contact Us</h5>
            <p className="flex nav-link"><FaMapMarker className='text-xl font-semibold mr-2' />123 Street, New York, USA</p>
            <p className="flex nav-link"><FaPhone className='text-xl font-semibold mr-2' />+012 345 67890</p>
            <p className="flex nav-link"><FaEnvelope className='text-xl font-semibold mr-2' />info@example.com</p>
            <h6 className="text-font-light font-base font-medium uppercase mt-4 mb-3">Newsletter</h6>
            <div className="relative">
              <input type="text" className='p-4 w-full rounded-md' placeholder="Your Email" />
              <button className="absolute primary-btn left-[57.5%]">Sign Up</button>
            </div>
          </div>
        </div>


        <div className="grid">
          <div className="col-span-6 text-center">
            <p className='text-base font-normal text-font-light my-4'>Copyright &copy; <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer