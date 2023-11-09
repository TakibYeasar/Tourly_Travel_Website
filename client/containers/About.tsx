import React from 'react';
import { FaAward, FaGlobe, FaMoneyCheckAlt } from "react-icons/fa";
import about from "../../assets/images/about.jpg";
import about1 from "../../assets/images/about-1.jpg";
import about2 from "../../assets/images/about-2.jpg";
import Image from 'next/image';

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-4 gap-4 relative items-center">
                <Image className="h-screen" src={about} alt='' />

                <div className="absolute bg-card-bg p-8">
                    <h5 className='text-primary-color uppercase'>About Us</h5>
                    <h1 className="">We Provide Best Tour Packages In Your Budget</h1>
                    <p className='text-base text-font-color'>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <div className="flex">
                        <div className="p-4">
                            <Image className="" src={about1} alt="" />
                        </div>
                        <div className="p-4">
                            <Image className="" src={about2} alt="" />
                        </div>
                    </div>
                    <a href="" className="primary-btn">Book Now</a>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-20 mb-20">
                <div className="flex items-center mb-4">
                    <a><FaMoneyCheckAlt className='text-4xl bg-primary-color text-font-light p-2 mr-4' /></a>
                    <div className="">
                        <h5 className="text-xl font-semibold">Competitive Pricing</h5>
                        <p className="text-base font-normal">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <a><FaAward className='text-4xl bg-primary-color text-font-light p-2 mr-4' /></a>
                    <div className="">
                        <h5 className="text-xl font-semibold">Best Services</h5>
                        <p className="text-base font-normal">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <a><FaGlobe className='text-4xl bg-primary-color text-font-light p-2 mr-4' /></a>
                    <div className="">
                        <h5 className="text-xl font-semibold">Worldwide Coverage</h5>
                        <p className="text-base font-normal">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About