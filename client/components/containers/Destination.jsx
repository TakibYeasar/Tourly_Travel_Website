import React from 'react';
import Image from 'next/image';
import popular01 from "../../assets/images/popular-1.jpg";
import popular02 from "../../assets/images/popular-2.jpg";
import popular03 from "../../assets/images/popular-3.jpg";
import { FaStar } from 'react-icons/fa';


const data = [
    {
        image: popular01,
        title: "Italy",
        subtitle: "San miguel",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
    },
    {
        image: popular02,
        title: "Dubai",
        subtitle: "Burj khalifa",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
    },
    {
        image: popular03,
        title: "Japan",
        subtitle: "Kyoto temple",
        text: "Fusce hic augue velit wisi ips quibusdam pariatur, iusto.",
    },
]

const Destination = () => {
    return (
        <div className="container text-center">
            <div className="my-4">
                <p className="sub-title">Uncover place</p>
                <h2 className="main-title">Popular destination</h2>
                <p className="text-xl font-normal">Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.Sit ornare mollitia tenetur, aptent.</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {data.map((item, i) => (
                    <div className='' key={i}>
                        <div className="relative">
                            <figure className="">
                                <Image src={item?.image} className='h-[45vh] rounded-lg' alt="" loading="lazy" />
                            </figure>

                            <div className="absolute top-0 items-start bg-bg-color p-4 rounded-lg">
                                <p className="text-xl font-normal text-primary-color uppercase"><a href="#">{item?.subtitle}</a></p>
                                <h3 className="text-4xl font-semibold text-tertiary-color uppercase my-2"><a href="#">{item?.title}</a></h3>
                                <p className="text-base font-normal">{item?.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="primary-btn">More destintion</button>

        </div>
    )
}

export default Destination