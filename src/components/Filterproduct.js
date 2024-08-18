import React, { useState } from 'react';
import Product from "../components/Product.json";

const Filterproduct = () => {

    const [items, setItems] = useState(Product);

    const filterItems = (category) => {
        // Filter items based on the selected category
        const updateItems = Product.filter((item) => {
            return item.category === category;
        });
        setItems(updateItems);
    };

    return (
        <>
            <div className='container md:mx-auto pt-10 lg:mx-auto'>
                <h6 className="text-center text-yellow-400 font-medium uppercase text-3xl">New collection</h6>
                <h6 className='text-center font-serif pt-4 pb-10 text-4xl text-gray-700 font-extrabold'>TRENDING PRODUCTS</h6>
                <div className="flex justify-around py-5">

                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span  onClick={() => setItems(Product)} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                           All Products
                        </span>
                    </button>
                    <button  onClick={() => filterItems("men's clothing")} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Man's Product
                        </span>
                    </button>
                    <button  onClick={() => filterItems("jewelery")} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Jewelery
                        </span>
                    </button>
                    <button  onClick={() => filterItems("electronics")} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Electronic's
                        </span>
                    </button>
                    <button onClick={() => filterItems("women's clothing")} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Woman's Products
                        </span>
                    </button>













{/* 
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => setItems(Product)}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => filterItems("men's clothing")}
                    >
                        Man's
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => filterItems("jewelery")}
                    >
                        Jewelery
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => filterItems("electronics")}
                    >
                        Electronics
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => filterItems("women's clothing")}
                    >
                        Woman's
                    </button> */}
                </div>
                <div className='grid grid-cols-4 gap-6 pr-20'>
                    {items.map((value) => (
                        <div key={value.id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" style={{ width: "300px", height: "450px" }}>
                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                <img className="object-cover w-full h-full" src={value.image} alt={value.title} />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">Discount</span>
                            </a>
                            <div className="mt-4 px-5 pb-5 flex flex-col justify-between" style={{ height: "calc(100% - 240px)" }}>
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">{value.title}</h5>
                                </a>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">${value.price}</span>
                                        <span className="text-sm text-slate-900 line-through">$000</span>
                                    </p>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{value.rate}</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center justify-center rounded-md bg-yellow-400 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart
                                </a>
                            </div>
                        </div>


                    ))}
                </div>
            </div>





        </>

    )
}

export default Filterproduct
