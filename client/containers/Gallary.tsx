import React from 'react';
import Image from 'next/image';
import gallary01 from "../../assets/images/gallery-1.jpg";
import gallary02 from "../../assets/images/gallery-2.jpg";
import gallary03 from "../../assets/images/gallery-3.jpg";
import gallary04 from "../../assets/images/gallery-4.jpg";
import gallary05 from "../../assets/images/gallery-5.jpg";

const gallary_right = [
    {
        image: gallary01,
    },
    {
        image: gallary02,
    },
]
const main_image = [
    {
        image: gallary03,
    },
]
const gallary_left = [
    {
        image: gallary04,
    },
    {
        image: gallary05,
    },
]

const Gallary = () => {
    return (
        <div className="container">

            <div className="text-center mb-5">
                <h6 className="main-title">Photo Gallery</h6>
                <h1 className='sub-title'>Photo's From Travellers</h1>
                <p className="text-base text-font-color"> Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </div>

            <div className="flex">
                <div className="grid grid-rows-2 gap-4">

                    {gallary_left.map((item, i) => (
                        <div className="" key={i}>
                            <figure className="">
                                <Image src={item?.image} className='h-40 w-40' alt="Gallery image" />
                            </figure>
                        </div>
                    ))}

                </div>
                <div className="grid grid-rows-2 gap-4">

                    {main_image.map((item, i) => (
                        <div className="" key={i}>
                            <figure className="">
                                <Image src={item?.image} alt="Gallery image" />
                            </figure>
                        </div>
                    ))}

                </div>
                <div className="grid grid-rows-2 gap-4">

                    {gallary_right.map((item, i) => (
                        <div className="" key={i}>
                            <figure className="">
                                <Image src={item?.image} className='h-40 w-40' alt="Gallery image" />
                            </figure>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Gallary