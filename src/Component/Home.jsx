import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [allproducts, setAllproducts] = useState([]);
    const { count } = useLoaderData();
    const [totalparpage, setTotalperpage] = useState(9);
    const [carentpage, setCarrentPage] = useState(0);
    const numberofpage = Math.ceil(count / totalparpage);
    const pages = [...Array(numberofpage).keys()];
    const [order, setOrder] = useState('');

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

    const hendelorder = (e) => {
        setOrder(e.target.value);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/productes?page=${carentpage}&size=${totalparpage}`)
            .then(data => {
                let sortedData = data.data;
                if (order === 'ass') {
                    sortedData = [...sortedData].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                } else if (order === 'dess') {
                    sortedData = [...sortedData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                }
                setAllproducts(sortedData);
            })
    }, [carentpage, totalparpage, order]);

    return (
        <section className='w-[90%] mx-auto px-5 py-10 md:py-20'>
            <select onChange={hendelorder} className="select select-secondary w-full max-w-xs">
                <option value=''>Sort By</option>
                <option value='ass'>Oldest First</option>
                <option value='dess'>Newest First</option>
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {allproducts.map((product, index) => (
                    <div key={index} className="product-item border hover:shadow-2xl duration-300 p-5 rounded-md">
                        <div className='bg-[#e6dddd] py-10'>
                            <img src={product.productImage} alt={product.productName} className="product-image w-48 object-cover mx-auto" />
                        </div>
                        <h2 className="product-name text-xl mt-5 font-semibold">Name: {product.productName}</h2>
                        <p className="product-description"><span className='text-xl font-medium'>Description: </span> {product.description}</p>
                        <p className="product-price"><span className='text-xl font-medium'>Price: </span> ${product.price}</p>
                        <p className="product-category"><span className='text-xl font-medium'>Category: </span> {product.category}</p>
                        <p className="product-ratings"><span className='text-xl font-medium'>Ratings: </span> {product.ratings}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-5 md:mt-10'>
                <button className="btn btn-warning" onClick={handelprevious}>Previous</button>
                {pages.map(page => (
                    <button className={carentpage === page ? 'btn ml-2 p-button h-2 w-2 text-[18px]' : 'btn ml-2 h-2 w-2 text-[18px]'} key={page} onClick={() => setCarrentPage(page)}>
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
