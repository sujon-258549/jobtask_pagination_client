import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CreatAuthContext } from '../Firebase/Authprovider';
import '../../Component/home.css'
import { IoMdMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { PiSignInBold } from 'react-icons/pi';
import { CiLogout } from 'react-icons/ci';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { user, signout } = useContext(CreatAuthContext)
    console.log(user)

    const handelsignout = () => {
        signout();
    }

    return (
        <section className='fixed z-50 w-full'>
            <div className='Navber bg-[#b2bcad] w-full'>
                <div className='w-[90%] mx-auto px-5'>
                    <nav className="relative">
                        <div className=" mx-auto">
                            <div className="lg:flex lg:items-center lg:justify-between ">
                                <div className="flex items-center justify-between -mb-6 lg:-mb-0">
                                    <a href="#">
                                        <img
                                            className="w-auto h-20 sm:h-20"
                                            src="https://i.ibb.co/BPrqFzn/Online-shop-button-removebg-preview.png"
                                            alt=""
                                        />
                                    </a>

                                    {/* Mobile menu button */}
                                    <div className="flex lg:hidden">
                                        <div className='lg:hidden block'>
                                            {
                                                user ? <button onClick={handelsignout} className="cssbuttons-io-button">Sing out
                                                    <div class="icon">

                                                        <CiLogout className='font-extrabold'></CiLogout>
                                                    </div>
                                                </button> : <Link to={'/singin'} className="cssbuttons-io-button">Sing In
                                                    <div class="icon">
                                                        {/* <!-- You can replace this with any SVG icon --> */}
                                                        <PiSignInBold></PiSignInBold>
                                                    </div>
                                                </Link>
                                            }
                                        </div>
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            type="button"
                                            className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                            aria-label="toggle menu"
                                        >

                                            {isOpen ? (
                                                <RxCross2 className='text-3xl rounded-sm border border-black ml-2  text-black font-bold' style={{ boxShadow: '1px 1px 10px' }}></RxCross2 >
                                            ) : (
                                                <IoMdMenu className='text-3xl rounded-sm border border-black ml-2  text-black font-bold' style={{ boxShadow: '1px 1px 10px' }}></IoMdMenu>
                                            )}
                                        </button>

                                    </div>
                                </div>

                                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                                <div
                                    className={`absolute main-menu bg-white inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                        }`}
                                >
                                    <div className="flex flex-col gap-2 ml-2 -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                        <NavLink className="button"
                                            to={'/'}>Home</NavLink>

                                        <NavLink className="button"
                                            to={'/home'}>All Product</NavLink>
                                        <NavLink className="button"
                                            to={'a'}>Area</NavLink>
                                        <NavLink to={'/contact'} className="button"
                                        >Contact</NavLink>
                                    </div>

                                </div>
                                <div className="flex items-center mt-4 lg:mt-0">
                                    {/* <button
                                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover: dark:hover:text-gray-400 focus: dark:focus:text-gray-400 focus:outline-none"
                                    aria-label="show notifications"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button> */}
                                    <div className='hidden lg:block'>
                                        {
                                            user ? <button onClick={handelsignout} className="cssbuttons-io-button">Sing out
                                                <div class="icon">

                                                    <CiLogout className='font-extrabold'></CiLogout>
                                                </div>
                                            </button> : <Link to={'/singin'} className="cssbuttons-io-button">Sing In
                                                <div class="icon">
                                                    {/* <!-- You can replace this with any SVG icon --> */}
                                                    <PiSignInBold></PiSignInBold>
                                                </div>
                                            </Link>
                                        }
                                    </div>


                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </section>
    );
}

export default Navbar;
