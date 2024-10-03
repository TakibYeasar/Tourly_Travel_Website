import React from 'react';
import { FaAngleDoubleRight, FaAngleRight, FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter, FaYoutube } from 'react-icons/fa';
import blog1 from "../../../assets/images/blog-1.jpg";
import blog2 from "../../../assets/images/blog-2.jpg";
import blog3 from "../../../assets/images/blog-3.jpg";
import user from "../../../assets/images/user.jpg";
import blog from "../../../assets/images/blog-blog.jpg";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';
import { Blogtags, Booking, Categories, Recentpost } from '@/containers';

const Blogdetails = () => {
    return (
        <div className="">
            <div className="relative">
                <Image src={bg} className='h-[40vh]' alt='' />
                <div className="absolute t-[10vh]">
                    <h3 className="text-font-light">About</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">Blog Details</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <Booking />

                <div className="grid">
                    <div className="col-span-8">
                        <div className="pb-3">
                            <div className="">
                                <div className="relative">
                                    <Image width={100} src={blog1} alt="" />
                                    <div className="">
                                        <h6 className="">01</h6>
                                        <small className="text-font-lgiht uppercase">Jan</small>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-bg-color mb-3">
                                <div className="flex mb-3">
                                    <a className="text-primary-color uppercase no-underline" href="">Admin</a>
                                    <span className="text-primary-color">|</span>
                                    <a className="text-primary-color uppercase no-underline" href="">Tours & Travel</a>
                                </div>
                                <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
                                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                    magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                    amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                    sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                    sit stet no diam kasd vero.</p>
                                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                    vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                    nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                    ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                    clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                    justo dolore sit invidunt.</p>
                                <h4 className="mb-3">Est dolor lorem et ea</h4>
                                <Image width={100} src={blog2} alt="" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>
                                <h5 className="mb-3">Est dolor lorem et ea</h5>
                                <Image width={100} src={blog3} alt="" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                    aliquyam et ut.</p>
                            </div>
                        </div>

                        <div className="bg-bg-color">
                            <h4 className="uppercase mb-4">3 Comments</h4>
                            <div className="mb-4">
                                <Image width={100} src={user} alt="" />
                                <div className="">
                                    <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="">Reply</button>
                                </div>
                            </div>
                            <div className="">
                                <Image width={100} src={user} alt="" />
                                <div className="">
                                    <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="">Reply</button>
                                    <div className="media mt-4">
                                        <Image width={100} src={user} alt="" />
                                        <div className="">
                                            <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                                ipsum diam tempor consetetur at sit.</p>
                                            <button className="">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-bg-color mb-3">
                            <h4 className="uppercase mb-4">Leave a comment</h4>
                            <form>
                                <div className="">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" className="" id="name" />
                                </div>
                                <div className="">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" className="" id="email" />
                                </div>
                                <div className="">
                                    <label htmlFor="website">Website</label>
                                    <input type="url" className="" id="website" />
                                </div>

                                <div className="">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" cols={30} rows={5} className=""></textarea>
                                </div>
                                <div className=" mb-0">
                                    <input type="submit" value="Leave a comment"
                                        className="font-weight-semi-bold py-2 px-3" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-span-4">
                        <div className="flex">
                            <Image width={100} src={user} alt="" />
                            <h3 className="text-primary-color mb-3">John Doe</h3>
                            <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
                            <div className="flex items-center">
                                <a className="text-primary-color" href="">
                                    <FaFacebook className='icon' />
                                </a>
                                <a className="text-primary-color" href="">
                                    <FaTwitter className='icon' />
                                </a>
                                <a className="text-primary-color" href="">
                                    <FaLinkedin className='icon' />
                                </a>
                                <a className="text-primary-color" href="">
                                    <FaInstagram className='icon' />
                                </a>
                                <a className="text-primary-color" href="">
                                    <FaYoutube className='icon' />
                                </a>
                            </div>
                        </div>

                        <div className="mb-5">
                            <input type="text" className=" p-4" placeholder="Keyword" />
                            <span className=""><FaSearch className='icon' /></span>
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

export default Blogdetails