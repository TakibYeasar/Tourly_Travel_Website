import React, { useState } from 'react';
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';
import { FaAngleDoubleRight, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
// import axios from 'axios';
// import { base_url } from '../../App';
// import { Link } from "react-router-dom";


const Registrations = () => {

    // const [data, setData] = useState({
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     username: "",
    //     password1: "",
    //     password2: "",
    //     role: "",
    //     highest_qualification: "",
    //     store_name: ""
    // })

    // useEffect(() => {
    //     document.title = "SignUp | Library"
    // }, [])

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     axios.post(base_url + 'create-account/', data,
    //         { headers: { 'Content-Type': 'application/json' } }, { withCredentials: true })
    //         .then(response => {
    //             console.log(response.status)
    //             window.location.href = '/';
    //         })
    //         .catch(error => { console.log(error) });
    // }


    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setData(values => ({ ...values, [name]: value }))
    // }

    return (
        <div className="">
            <div className="relative">
                <Image src={bg} className='h-[40vh]' alt='' />
                <div className="absolute t-[10vh]">
                    <h3 className="text-font-light">About</h3>
                    <div className="flex">
                        <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                        <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                        <p className="text-base text-font-light font-medium mr-2 no-underline">Registration</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="grid bg-card-bg rounded-md p-4">
                    <div className="lg:col-span-12 md:col-span-6 sm:col-span-6">
                        <h4 className="text-4xl font-medium">Create a new account</h4>
                        <p className="font-base text-primary-color">Create your new account.</p>
                        <div className="flex">
                            <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-amber-400 text-font-light"><FaGoogle className='mr-2' /> Sign In with Google</a>
                            <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-blue-600 text-font-light"><FaFacebook className='mr-2' /> Sign In with Facebook</a>
                            <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-blue-400 text-font-light"><FaTwitter className='mr-2' /> Sign In with Twitter</a>
                        </div>
                        <div className="text-xl font-normal my-4">Or,</div>
                        <form className="" role="form">
                            <div className="mt-2 mb-2">
                                <label className="font-base mt-2 mb-2">Email Address <span>*</span></label>
                                <input type="email" className="" placeholder="email" />
                            </div>
                            <div className="mt-2 mb-2">
                                <label className="font-base mt-2 mb-2">Username <span>*</span></label>
                                <input type="email" className="" placeholder="username" />
                            </div>
                            <div className="mt-2 mb-2">
                                <label className="font-base mt-2 mb-2">Password <span>*</span></label>
                                <input type="email" className="" placeholder="password" />
                            </div>
                            <div className="mt-2 mb-2">
                                <label className="font-base mt-2 mb-2">Confirm Password <span>*</span></label>
                                {/* <input type="email" className="" placeholder="confirm_password" onChange={handleChange} /> */}
                            </div>
                            {/* <button type="submit" className="" onClick={handleSubmit}>Sign Up</button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registrations