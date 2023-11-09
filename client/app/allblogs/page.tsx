import React from 'react';
import { Blogtags, Booking, Categories, Recentpost, Singleblog } from '@/containers';
import { FaAngleDoubleRight, FaAngleRight, FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaYoutube } from "react-icons/fa";
import blog1 from "../../../assets/images/blog-1.jpg";
import blog2 from "../../../assets/images/blog-2.jpg";
import blog3 from "../../../assets/images/blog-3.jpg";
import user from "../../../assets/images/user.jpg";
import blog from "../../../assets/images/blog-blog.jpg";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';

const blogdata = [
    {
        image: blog1,
    },
    {
        image: blog2,
    },
    {
        image: blog3,
    },
    {
        image: blog1,
    },
    {
        image: blog2,
    },
    {
        image: blog3,
    },
    {
        image: blog1,
    },
    {
        image: blog2,
    },
    {
        image: blog3,
    },
]


const Allblogs = () => {
    return (
        <div className="">
            <div className="relative">
                <Image src={bg} className='h-[40vh] w-screen' alt='' />
                <div className="absolute top-[10vh]">
                    <h3 className="text-4xl font-bold text-font-light">All Blogs</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">All Blogs</p>
                    </div>
                </div>
            </div>

            <Booking />

            <div className="container">

                <div className="grid grid-cols-12">
                    <div className="col-span-8">
                        <div className="grid grid-cols-2 gap-4">

                            {blogdata.map((item, i) => (
                                <Singleblog item={item} key={i} />
                            ))}

                            <div className="col-span-12">
                                <nav aria-label="">
                                    <ul className="">
                                        <li className="">
                                            <a className="" href="#">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className=" active"><a className="" href="#">1</a></li>
                                        <li className=""><a className="" href="#">2</a></li>
                                        <li className=""><a className="" href="#">3</a></li>
                                        <li className="">
                                            <a className="" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-4 mt-5 mt-lg-0">
                        <div className="flex text-center">
                            <Image width={100} src={user} alt="" />
                            <h3 className="text-primary-color mb-3">John Doe</h3>
                            <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                            <div className="flex justify-center">
                                <a className="text-primary-color px-2" href="">
                                    <FaFacebook className='icon' />
                                </a>
                                <a className="text-primary-color px-2" href="">
                                    <FaTwitter className='icon' />
                                </a>
                                <a className="text-primary-color px-2" href="">
                                    <FaLinkedin className='icon' />
                                </a>
                                <a className="text-primary-color px-2" href="">
                                    <FaInstagram className='icon' />
                                </a>
                                <a className="text-primary-color px-2" href="">
                                    <FaYoutube className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className="mb-5">
                            <input type="text" className="p-4" placeholder="Keyword" />
                            <div className="">
                                <span className="input-group-text bg-primary border-primary text-white"><FaSearch className='icon' /></span>
                            </div>
                        </div>

                        <Categories />

                        <Recentpost />

                        <Blogtags />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allblogs