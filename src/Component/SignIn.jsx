import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
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
                        <div data-aos="flip-left" className="relative card shadow shrink-0 w-full md:w-[60%] lg:w-[50%]  bg-base-100 mx-auto my-10">

                            <h1 className="text-[35px] font-bold text-center pt-4">Login your account</h1>
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
                            <div className="mx-auto mb-10">
                                <button onClick={sosallogin} className="btn btn-outline  text-sm mr-3 ">
                                    <FaGoogle className="text-green-500 text-xl font-bold"></FaGoogle>
                                    Log with Google
                                </button>
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