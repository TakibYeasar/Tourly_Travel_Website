import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import team1 from "../../assets/images/team-1.jpg";
import team2 from "../../assets/images/team-2.jpg";
import team3 from "../../assets/images/team-3.jpg";
import team4 from "../../assets/images/team-4.jpg";

const teamdata = [
    {
        image: team1,
    },
    {
        image: team2,
    },
    {
        image: team3,
    },
    {
        image: team4,
    },
]

const Guides = () => {
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h6 className="main-title">Guides</h6>
                <h1 className='sub-title'>Our Travel Guides</h1>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 gap-4">

                {teamdata.map((item, i) => (
                    <div className="" key={i}>
                        <div className="transition duration-500">
                            <div className="relative ">
                                <Image className='transition duration-500' src={item?.image} alt="" />
                                <div className="absolute flex items-center justify-center transition duration-500">
                                    <a className="" href=""><FaTwitter className='text-4xl text-primary-color border border-primary-color p-2 m-2 hover:bg-primary-color hover:text-font-light' /></a>
                                    <a className="" href=""><FaFacebook className='text-4xl text-primary-color border border-primary-color p-2 m-2 hover:bg-primary-color hover:text-font-light' /></a>
                                    <a className="" href=""><FaInstagram className='text-4xl text-primary-color border border-primary-color p-2 m-2 hover:bg-primary-color hover:text-font-light' /></a>
                                    <a className="" href=""><FaLinkedin className='text-4xl text-primary-color border border-primary-color p-2 m-2 hover:bg-primary-color hover:text-font-light' /></a>
                                </div>
                            </div>
                            <div className="bg-bg-color shadow text-center p-4">
                                <h5 className="text-truncate">Guide Name</h5>
                                <p className="m-0">Designation</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Guides