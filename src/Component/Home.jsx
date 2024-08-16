import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './home.css';
import { HiSearch } from 'react-icons/hi';

const Home = () => {
    const [allproducts, setAllproducts] = useState([]);
    const { count } = useLoaderData();
    const [totalparpage, setTotalperpage] = useState(9);
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
        axios.get(`http://localhost:3000/productes?page=${carentpage}&size=${totalparpage}&categorys=${categorys}&serch=${serch}&priceShort=${priceShort}`)
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
        <section className='w-[90%] mx-auto px-5 py-10 md:py-20'>

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
                            <div key={index} className="product-item border hover:shadow-2xl duration-300 p-5 rounded-md">
                                <div className='bg-[#e6dddd] py-10'>
                                    <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                                </div>
                                <h2 className="product-name text-xl mt-5 font-semibold">Name: {product.productName}</h2>
                                <p className="product-description"><span className='text-xl font-medium'>Description: </span> {product.description}</p>
                                <p className="product-price"><span className='text-xl font-medium'>Price: </span> ${product.price}</p>
                                <p className="product-category"><span className='text-xl font-medium'>Category: </span> {product.category}</p>
                                <p className="product-ratings"><span className='text-xl font-medium'>Ratings: </span> {product.ratings}</p>
                                <p className="product-ratings"><span className='text-xl font-medium'>Time : </span> {product.createdAt}</p>
                            </div>
                        ))
                    )

                }
            </div>
            {
                allproducts.length === 0 && (
                    <div className=''>
                        <h1 className='uppercase text-center text-2xl font-bold pb-5'>data not found</h1>
                        <img className='bg-cover rounded-md bg-center w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoL8RBNTbZGJ49Ah8qlbqaKs7PVkbnJ1Ij9w&usqp=CAU" alt="Not Found" />
                    </div>
                )
            }

            <div className='flex justify-center mt-5 md:mt-10'>
                <button className="btn btn-warning" onClick={handelprevious}>Previous</button>
                {pages.map(page => (
                    <button className={carentpage === page ? 'btn btn-warning btn-outline ml-2 p-button h-2 w-2 text-[18px]' : 'btn btn-warning btn-outline ml-2 h-2 w-2 text-[18px]'} key={page} onClick={() => setCarrentPage(page)}>
                        {page + 1}
                    </button>
                ))}
                <select onChange={handelDainamicpage} className="block w-sm text-sm font-medium mt-[6px] ml-2 transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                </select>
                <button className="btn btn-warning ml-3" onClick={handelNext}>Next</button>
            </div>
        </section>
    );
};

export default Home;
