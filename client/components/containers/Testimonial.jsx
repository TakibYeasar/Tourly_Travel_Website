import React from 'react';
import Image from 'next/image';
import test1 from "../../assets/images/testimonial-1.jpg";
import test2 from "../../assets/images/testimonial-2.jpg";
import test3 from "../../assets/images/testimonial-3.jpg";
import test4 from "../../assets/images/testimonial-4.jpg";

const testdata = [
    {
        image: test1,
    },
    {
        image: test2,
    },
    {
        image: test3,
    },
    {
        image: test4,
    },
]

const Testimonial = () => {
    return (
        <div className="container my-20">
            <div className="text-center mb-5">
                <h6 className="main-title">Testimonial</h6>
                <h1 className='sub-title'>What Say Our Clients</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">

                {testdata.map((item, i) => (
                    <div className="grid items-center m-4 p-4 transition duration-500" key={i}>
                        <Image className="absolute mx-auto" src={item?.image} alt='' />
                        <div className="bg-bg-color">
                            <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </p>
                            <h5 className="">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Testimonial