import React from 'react';
import { FaAngleDoubleRight, FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import bg from "../../../assets/images/carousel-2.jpg";
import Image from 'next/image';
// import AuthContext from '../context/AuthContext';

const Authenticate = () => {

    // let { loginUser } = useContext(AuthContext)

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("")

    // useEffect(() => {
    //     document.title = "LogIn | Library"
    // }, [])


    return (
        <div className="">
            <div className="relative">
                <Image src={bg} className='h-[40vh]' alt='' />

                <div className="container">
                    <div className="absolute t-[10vh]">
                        <h3 className="text-font-light">About</h3>
                        <div className="flex">
                            <a className='text-base text-font-light font-medium mr-2 no-underline' href="">Home</a>
                            <FaAngleDoubleRight className='text-base text-font-light font-medium mr-2 no-underline' />
                            <p className="text-base text-font-light font-medium mr-2 no-underline">Registration</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex">
                    <div className="bg-card-bg rounded-md p-4">
                        <div className="grid">
                            <div className="lg:col-span-12 md:col-span-6 sm:col-span-6">
                                <h4 className="text-4xl font-medium">Sign in</h4>
                                <p className="font-base text-primary-color">Hello, Welcome to your account.</p>
                                <div className="flex">
                                    <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-amber-400 text-font-light"><FaGoogle className='mr-2' /> Sign In with Google</a>
                                    <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-blue-600 text-font-light"><FaFacebook className='mr-2' /> Sign In with Facebook</a>
                                    <a href="#" className="flex m-4 items-center text-xl font-normal p-4 rounded-md transition duration-300 ease-in no-underline bg-blue-400 text-font-light"><FaTwitter className='mr-2' /> Sign In with Twitter</a>
                                </div>
                                <div className="text-xl font-normal my-4">Or,</div>
                                <div className="mt-8 mb-8">
                                    <a href="#" className="no-underline bg-tertiary-color rounded-md text-base ml-2 mr-2 font-medium p-4 text-font-light"><FaFacebook className='icon' /> Sign In with Facebook</a>
                                    <a href="#" className="no-underline bg-tertiary-color rounded-md text-base ml-2 mr-2 font-medium p-4 text-font-light"><FaTwitter className='icon' /> Sign In with Twitter</a>
                                </div>
                                <form className="" role="form">
                                    <div className="mt-2 mb-2">
                                        <label className="font-base mt-2 mb-2" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                                        {/* <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" onChange={(e) => setUsername(e.target.value)} /> */}
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <label className="font-base mt-2 mb-2" htmlFor="exampleInputPassword1">Password <span>*</span></label>
                                        <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mt-6 mb-6 justify-evenly outer-xs">
                                        <label><input type="radio" />Remember me! </label>
                                        <a href="#" className="no-underline font-base text-font-color">Forgot your Password?</a>
                                    </div>
                                    <button type="submit" className="">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticate