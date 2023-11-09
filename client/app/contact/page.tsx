import React from 'react';
import { Booking } from '@/containers';
import { FaAngleDoubleRight } from "react-icons/fa";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="mt-20 mb-20">

            <div className="relative">
                <Image src={bg} className='h-[40vh]' alt='' />
                <div className="absolute t-[10vh]">
                    <h3 className="text-font-light">About</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">Contact Us</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Booking />

                <div className="text-center mb-5">
                    <h6 className="">Contact</h6>
                    <h1>Contact For Any Query</h1>
                </div>
                <div className="grid justify-center">
                    <div className="lg:col-span-8">
                        <div className="p-8">
                            <form name="sentMessage" noValidate>
                                <div className="flex">
                                    <div className="sm:col-span-6">
                                        <input type="text" className="p-4" id="name" placeholder="Your Name"
                                            required data-validation-required-message="Please enter your name" />
                                        <p className="text-danger"></p>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <input type="email" className="p-4" id="email" placeholder="Your Email"
                                            required data-validation-required-message="Please enter your email" />
                                        <p className="text-danger"></p>
                                    </div>
                                </div>
                                <div className="">
                                    <input type="text" className="p-4" id="subject" placeholder="Subject"
                                        required data-validation-required-message="Please enter a subject" />
                                    <p className="text-danger"></p>
                                </div>
                                <div className="">
                                    <textarea className="py-3 px-4" rows={5} id="message" placeholder="Message"
                                        required
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p className="text-danger"></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn-style py-3 px-4" type="submit" id="sendMessageButton">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact