import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CreatAuthContext } from '../Firebase/Authprovider';
import '../../Component/home.css'
import { IoMdMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { PiSignInBold } from 'react-icons/pi';
import { CiLogout } from 'react-icons/ci';
import './nave.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const { user, signout } = useContext(CreatAuthContext)
    console.log(user)

    const handelsignout = () => {
        signout();
    }

    return (
        <section className='fixed z-50 w-full'>
            <div className='Navber bg-[#b2bcad] w-full py-4'>
                <div className='w-[90%] mx-auto px-5'>
                    <nav className="relative">
                        <div className=" mx-auto">
                            <div className="lg:flex lg:items-center lg:justify-between ">
                                <div className="flex items-center justify-between -mb-6 lg:-mb-0">
                                    <div>
                                        <button
                                            style={{
                                                WebkitBoxReflect: "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
                                            }}
                                            className="px-10 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest relative overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
                                        >
                                            Button
                                            <p
                                                className="absolute z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
                                            >
                                                WELCOME
                                            </p>
                                            <p
                                                className="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
                                            >
                                                Every one
                                            </p>
                                            <svg
                                                className="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
                                                viewBox="0 0 2400 800"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                {/* <!-- SVG code remains unchanged --> */}
                                            </svg>
                                            <svg
                                                className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-40 fill-red-500"
                                                viewBox="0 0 1440 320"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,170.7C627.7,203,646,245,665,256C683.1,267,702,245,720,245.3C738.5,245,757,267,775,266.7C793.8,267,812,245,831,234.7C849.2,224,868,224,886,218.7C904.6,213,923,203,942,170.7C960,139,978,85,997,53.3C1015.4,21,1034,11,1052,48C1070.8,85,1089,171,1108,197.3C1126.2,224,1145,192,1163,197.3C1181.5,203,1200,245,1218,224C1236.9,203,1255,117,1274,106.7C1292.3,96,1311,160,1329,170.7C1347.7,181,1366,139,1385,128C1403.1,117,1422,139,1431,149.3L1440,160L1440,320L1430.8,320C1421.5,320,1403,320,1385,320C1366.2,320,1348,320,1329,320C1310.8,320,1292,320,1274,320C1255.4,320,1237,320,1218,320C1200,320,1182,320,1163,320C1144.6,320,1126,320,1108,320C1089.2,320,1071,320,1052,320C1033.8,320,1015,320,997,320C978.5,320,960,320,942,320C923.1,320,905,320,886,320C867.7,320,849,320,831,320C812.3,320,794,320,775,320C756.9,320,738,320,720,320C701.5,320,683,320,665,320C646.2,320,628,320,609,320C590.8,320,572,320,554,320C535.4,320,517,320,498,320C480,320,462,320,443,320C424.6,320,406,320,388,320C369.2,320,351,320,332,320C313.8,320,295,320,277,320C258.5,320,240,320,222,320C203.1,320,185,320,166,320C147.7,320,129,320,111,320C92.3,320,74,320,55,320C36.9,320,18,320,9,320L0,320Z"
                                                    fill-opacity="1"
                                                ></path>
                                            </svg>
                                        </button>


                                    </div>

                                    {/* Mobile menu button */}
                                    <div className="flex lg:hidden">
                                        <div className='lg:hidden block'>
                                            {
                                                user ? <button onClick={handelsignout} className="cssbuttons-io-button">Sing out
                                                    <div className="icon">

                                                        <CiLogout className='font-extrabold'></CiLogout>
                                                    </div>
                                                </button> : <Link to={'/singin'} className="cssbuttons-io-button">Sing In
                                                    <div className="icon">
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
                                                <div className="icon">

                                                    <CiLogout className='font-extrabold'></CiLogout>
                                                </div>
                                            </button> : <Link to={'/singin'} className="cssbuttons-io-button">Sing In
                                                <div className="icon">
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
