import React from 'react';
import { About, Booking, Guides, } from '@/containers';
import { FaAngleDoubleRight } from "react-icons/fa";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';

const Aboutus = () => {
    return (
        <div className="">

            <div className="relative">
                <Image src={bg} className='h-[40vh] w-screen' alt='' />
                <div className="absolute top-[10vh]">
                    <h3 className="text-4xl font-bold text-font-light">About Us</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">About</p>
                    </div>
                </div>
            </div>

            <Booking />

            <About />

            <Guides />
        </div>
    )
}

export default Aboutus