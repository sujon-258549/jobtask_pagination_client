import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreatAuthContext } from "./Firebase/Authprovider";
import { Link, useNavigate } from "react-router-dom";



const SignIn = () => {
    const navigate = useNavigate()

    const { signInUser, logineWithGoogle } = useContext(CreatAuthContext)
    console.log(logineWithGoogle)
    const [shoandHideIcone, setShoandHideIcone] = useState(false);
    const handelSubmitLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Your login confram');
                navigate('/')
            })
            .catch((error) => {
                console.error(error);
                toast.error('Your password is Worang!');
            });
    }


    const sosallogin = () => {
        logineWithGoogle()
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                toast.error('An error occurred during login. Please try again.');
            });
        console.log('google')


    };




    return (
        <div>
            <div className="pt-20">
                <div className="py-10 mx-auto md:w-[80%] w-[90%]">

                    <div className="-top-10">
                        <div data-aos="flip-left" className="relative card  shadow shrink-0 w-full md:w-[60%] lg:w-[500px]   mx-auto my-10">

                            <div className="w-full md:w-[70%] lg:w-[50%]   mx-auto my-10 " style={{ zIndex: '999' }}>
                                <h1 className="text-[35px] font-bold text-center pt-4 text-white">Login your account</h1>
                                <form className="card-body" onSubmit={handelSubmitLogin}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Email address</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email address" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text text-xl font-semibold">Password</span>
                                        </label>
                                        <input type={shoandHideIcone ? 'text' : 'password'} name="password" placeholder="Enter your password" className="input input-bordered" required />
                                        <div className="absolute right-5 bottom-4" onClick={() => setShoandHideIcone(!shoandHideIcone)}>
                                            {
                                                shoandHideIcone ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                            }
                                        </div>
                                    </div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                    {<p className="text-xl font-medium text-green-500 text-center "></p>}
                                    <div className="form-control">
                                        <button className="btn  bg-[#CA8A04] text-white">Login</button>
                                    </div>
                                </form>
                                <div className="flex justify-center">
                              
                                    <button onClick={sosallogin} 
                                        className="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
                                    >
                                        <div
                                            className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
                                        ></div>
                                         <FaGoogle className="text-white text-xl font-bold"></FaGoogle>
                                        <div
                                            className="shrink-0 bg-border w-[1px] h-4"
                                            role="none"
                                            data-orientation="vertical"
                                        ></div>
                                        <span
                                            className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center"
                                        > Log with Google</span
                                        >
                                        <svg
                                            stroke-linecap="round"
                                            class="text-[#9c40ff]"
                                            stroke-width="1.5"
                                            aria-hidden="true"
                                            viewBox="0 0 10 10"
                                            height="11"
                                            width="11"
                                            stroke="currentColor"
                                            fill="none"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                d="M0 5h7"
                                                className="opacity-0 transition group-hover:opacity-100"
                                            ></path>
                                            <path
                                                stroke-linecap="round"
                                                d="M1 1l4 4-4 4"
                                                className="transition group-hover:translate-x-[3px]"
                                            ></path>
                                        </svg>
                                    </button>

                                </div>
                            </div>
                            {<p className="font-semibold px-5 text-center mb-5 text-red-600"></p>}
                            <p className="font-semibold text-[16px] pb-10 text-center">Dont’t Have An Account ? <Link to={'/singup'} className="text-[#F75B5F]">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;