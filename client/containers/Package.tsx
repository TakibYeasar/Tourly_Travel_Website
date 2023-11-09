import React from 'react';
import Image from 'next/image';
import package01 from "../../assets/images/packege-1.jpg";
import package02 from "../../assets/images/packege-2.jpg";
import package03 from "../../assets/images/packege-3.jpg";
import { FaLocationArrow, FaPeopleCarry, FaStar, FaTimes } from 'react-icons/fa';

const data = [
    {
        image: package01,
        title: "Experience The Great Holiday On Beach",
        text: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    },
    {
        image: package02,
        title: "Summer Holiday To The Oxolotan River",
        text: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    },
    {
        image: package03,
        title: "Santorini Island's Weekend Vacation",
        text: "Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.",
    },
]

const Package = () => {
    return (
        <div className="container text-center ">

            <div className="my-5">
                <p className="main-title">Popular Packeges</p>
                <h2 className="sub-title">Checkout Our Packeges</h2>
                <p className="text-base text-font-color">Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>

            <div className="grid gap-4">
                {data.map((item, i) => (
                    <div key={i}>
                        <div className="flex items-center h-[40vh]">
                            <figure className="">
                                <Image src={item?.image} className='' alt="" loading="lazy" />
                            </figure>
                            <div className="bg-card-bg px-4">
                                <h3 className="text-7xl font-semibold text-tertiary-color">{item?.title}</h3>
                                <p className="">{item?.text}</p>
                                <ul className="flex bg-bg-color py-2 px-4 rounded-full">
                                    <li className="flex"><FaTimes className="" /><p className="text">7D/6N</p></li>
                                    <li className="flex"><FaPeopleCarry className="" /><p className="text">pax: 10</p></li>
                                    <li className="flex"><FaLocationArrow className="" /><p className="text">Malaysia</p></li>
                                </ul>
                            </div>

                            <div className="bg-primary-color px-4 py-6 items-center">
                                <p className="text-base text-font-light">(25 reviews)</p>
                                <p className="text-2xl font-semibold text-font-light">$750<span>/ per person</span></p>
                                <button className="secondary-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <button className="primary-btn text-center">View All Packages</button>

        </div>
    )
}

export default Package