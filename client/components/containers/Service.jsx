import React from 'react';
import { FaHotel, FaRoute, FaTicketAlt } from "react-icons/fa";

const servicedata = [
    {
        title: "Travel Guide",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
    {
        title: "Ticket Booking",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
    {
        title: "Hotel Booking",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
    {
        title: "Travel Guide",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
    {
        title: "Ticket Booking",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
    {
        title: "Hotel Booking",
        text: "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore",
    },
]

const Service = () => {
    return (
        <div className="container">
            <div className="text-center mb-5">
                <h6 className="main-title">Services</h6>
                <h1 className='sub-title'>Tours & Travel Services</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
 
                {servicedata.map((item, i) => (
                    <div className="" key={i}>
                        <div className="transition duration-500 bg-card-bg p-8 m-4 text-center">
                            <FaRoute className='p-4 flex items-center justify-center bg-font-light text-primary-color transition duration-500' />
                            <h5 className="mb-2">{item?.title}</h5>
                            <p className="m-0">{item?.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Service