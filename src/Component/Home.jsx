import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './home.css';
import { HiSearch } from 'react-icons/hi';

const Home = () => {
    const [allproducts, setAllproducts] = useState([]);
    const { count } = useLoaderData();
    const [totalparpage, setTotalperpage] = useState(12);
    const [carentpage, setCarrentPage] = useState(0);
    const numberofpage = Math.ceil(count / totalparpage);
    const pages = [...Array(numberofpage).keys()];
    const [priceShort, setPriceShort] = useState('');
    const [categorys, setCategorys] = useState('')
    const [serch, setserch] = useState('')

    console.log(allproducts)

    const handelDainamicpage = (e) => {
        const inputValue = parseInt(e.target.value);
        setTotalperpage(inputValue);
        setCarrentPage(0);
    };

    const handelprevious = () => {
        if (carentpage > 0) {
            setCarrentPage(carentpage - 1);
        }
    };

    const handelNext = () => {
        if (carentpage < pages.length - 1) {
            setCarrentPage(carentpage + 1);
        }
    };

    const handelPeiceShort = (e) => {
        setPriceShort(e.target.value);
    };

    // category short
    const handelCategory = (e) => {
        setCategorys(e.target.value)
        setCarrentPage(0)
    }

    const handelsearch = (e) => {
        e.preventDefault()
        setserch(e.target.secarch.value)

    }

    useEffect(() => {
        axios.get(`https://jobtask-servire.vercel.app/productes?page=${carentpage}&size=${totalparpage}&categorys=${categorys}&serch=${serch}&priceShort=${priceShort}`)
            .then(data => {
                let sortedData = data.data;

                sortedData = [...sortedData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                if (priceShort === "hi") {
                    sortedData = [...sortedData].sort((a, b) => parseInt(b.price) - parseInt(a.price));
                } else if (priceShort === "low") {
                    sortedData = [...sortedData].sort((a, b) => parseInt(a.price) - parseInt(b.price));
                }
                setAllproducts(sortedData);


            })
    }, [carentpage, totalparpage, categorys, serch, priceShort]);

    return (
        <section className='w-[90%] mx-auto px-5 py-10 md:py-36'>

            <div className='flex flex-wrap justify-center mb-10 md:mb-16 gap-10'>
                <select onChange={handelCategory} className="select select-accent w-full max-w-xs">
                    <option value=''>Category Sort By</option>
                    <option value={'Electronics'}>Electronics</option>
                    <option value={'Accessories'}>Accessories</option>
                    <option value={'Health'}>Health</option>
                    <option value={'Home'}>Home</option>
                    <option value={'Furniture'}>Furniture</option>
                    <option value={'Books'}>Books</option>
                    <option value={'Tools'}>Tools</option>
                    <option value={'Music'}>Music</option>
                    <option value={'Pets'}>Pets</option>
                    <option value={'Outdoor'}>Outdoor</option>
                    <option value={'Fitness'}>Fitness</option>
                    <option value={'Outdoor'}>Outdoor</option>
                </select>
                <select onChange={handelPeiceShort} className="select select-secondary w-full max-w-xs">
                    <option value=''>Price Sort By</option>
                    <option value='low'>Low price</option>
                    <option value='hi'>Hight price</option>
                </select>
                <div className="">
                    <form onSubmit={handelsearch} className="flex relative rounded-md w-full px-4 max-w-xl">
                        <input
                            type="text"
                            name="secarch"
                            id="query"
                            placeholder="Enter product Name"
                            className="w-full p-3 rounded-md border  rounded-r-none border-[#FF00D3]  dark:placeholder-gray-300 "
                        />
                        <button className="inline-flex items-center gap-2 bg-[#FF00D3] text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                            <span className="hidden md:block">
                                <HiSearch />
                            </span>
                        </button>
                    </form>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    allproducts.length > 0 && (
                        allproducts.map((product, index) => (
                            /* From Uiverse.io by Javierrocadev */
                            // <div class="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
                            //     <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-22 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12   h-full w-full  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                            //         <div class="z-10 ">
                            //             <div className='pt-10'>
                            //                 <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                            //             </div>
                            //             <div className='p-5'>
                            //                 <h2 className="product-name text-xl mt-5 text-white font-semibold">Name: {product.productName}</h2>
                            //                 <p className="text-white product-price "><span className='text-xl font-medium text-white'>Price: </span> ${product.price}</p>
                            //                 <p className="product-ratings text-white"><span className='text-xl font-medium'>Ratings: </span> {product.ratings}</p>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>

                            /* From Uiverse.io by Javierrocadev */
                            <div
                                class=" duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly"
                            >
                                <div
                                    class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                                ></div>
                                <div
                                    class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                                ></div>
                                <div
                                    class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                                ></div>
                                <div
                                    class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
                                ></div>
                                <div class="z-10 flex flex-col justify-evenly w-full h-full">
                                    <div class="z-10 ">
                                        <div className=''>
                                            <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                                        </div>
                                        <div className='p-5'>
                                            <h2 className="product-name text-xl mt-5 font-semibold">Name: {product.productName}</h2>
                                            <p className="product-price "><span className='text-xl font-medium'>Price: </span> ${product.price}</p>
                                            <p className="product-ratings"><span className='text-xl font-medium'>Ratings: </span> {product.ratings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        ))
                    )

                }
            </div>

            {/* <div key={index} className="main-hover text-white card product-item border hover:shadow-2xl duration-300 p-5 rounded-md">
                <div className='py-10'>
                    <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                </div>
                <h2 className="product-name text-xl mt-5 font-semibold">Name: {product.productName}</h2>
                <p className="product-price "><span className='text-xl font-medium'>Price: </span> ${product.price}</p>
                <p className="product-ratings"><span className='text-xl font-medium'>Ratings: </span> {product.ratings}</p>
            </div> */}
            {
                allproducts.length === 0 && (
                    <div className=''>
                        <h1 className='uppercase text-center text-2xl font-bold pb-5'>data not found</h1>
                        <img className='bg-cover rounded-md bg-center w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoL8RBNTbZGJ49Ah8qlbqaKs7PVkbnJ1Ij9w&usqp=CAU" alt="Not Found" />
                    </div>
                )
            }

            <div className='flex justify-center  md:mt-10 items-center mt-10'>

           
                <button onClick={handelprevious} class="ctas items-center">
                    <span class="span">Previous</span>
                    <span class="second">
                        <svg
                            width="50px"
                            height="20px"
                            viewBox="0 0 66 43"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="arrow"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <path
                                    class="one"
                                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                                <path
                                    class="two"
                                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                                <path
                                    class="three"
                                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </button>


                {pages.map(page => (
                    <button className={carentpage === page ? 'buttons' : 'Btn'} key={page} onClick={() => setCarrentPage(page)}>
                        {page + 1}
                    </button>
                ))}
                <select  onChange={handelDainamicpage} className="block w-sm border-2 text-sm font-medium px-1 ml-2  transition duration-75  border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none">
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="21">21</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="36">36</option>
                    <option value="45">45</option>
                </select>

                

                <button onClick={handelNext} class="cta items-center">
                    <span class="span">NEXT</span>
                    <span class="second">
                        <svg
                            width="50px"
                            height="20px"
                            viewBox="0 0 66 43"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="arrow"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <path
                                    class="one"
                                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                                <path
                                    class="two"
                                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                                <path
                                    class="three"
                                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                                    fill="#FFFFFF"
                                ></path>
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Home;
