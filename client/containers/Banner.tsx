import React from 'react';
import Image from 'next/image';
import bg from "../../assets/images/hero-banner.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div className="bg-black">
                <Image src={bg} alt='' className='h-screen w-screen opacity-25' />
            </div>
            {/* <div className="container absolute top-[10%] left-0 text-center items-center">
                <h2 className="text-9xl font-bold text-font-light">Journey to explore world</h2>

                <p className="text-base font-normal text-font-light text-center">
                    Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit className corporis nostra rem quos
                    voluptatibus habitant?
                    Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
                </p>

                <div className="flex text-center">
                    <button className="primary-btn">Learn more</button>
                    <button className="secondary-btn">Book now</button>
                </div>
            </div> */}
        </div>
    )
}

export default Banner