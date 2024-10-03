import React from 'react';
import { Booking, Destination, Package } from '@/containers';
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';

const Tourpackage = () => {
    return (
        <div className="">
            <div className="relative">
                <Image src={bg} className='h-[40vh]' alt='' />
                <div className="absolute t-[10vh]">
                    <h3 className="text-font-light">About</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">Tour Package</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Booking />

                <Package />

                <Destination />
            </div>
        </div>
    )
}

export default Tourpackage