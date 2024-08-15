import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdCall } from "react-icons/io";
import { IoMdGitCompare } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar container md:mx-auto lg:mx-auto ">
                <div className="w-screen bg-gray-500 h-12 flex justify-around">
                    <div className=' text-white flex flex-row items-center p-2'>
                        <ul className='flex items-center space-x-4'>
                            <li>Welcome to Our store Multikart</li>
                            <li className='flex items-center'>
                                <a href="tel:+4733378901" className='flex items-center gap-1'>
                                    <IoMdCall />
                                    <span className='ml-1'>Call Us : 123 - 456 - 7890</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-white items-center p-2' >
                        <ul className='flex items-center space-x-4'>
                            <li className='flex items-center gap-1'><IoMdGitCompare />
                                Compare</li>
                            {/* <li>Wishlist</li> */}
                            <li className='flex items-center gap-1'><FaRegUserCircle />
                                My Account</li>
                        </ul>
                    </div>
                </div>

                <header className="top-0 sticky  scroll-m-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
                    <nav className="relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-lg mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <h2 className="text-2xl font-bold text-yellow-800 inline-block z-20">
                                    Back<span className="text-gray-500">Pack</span>
                                </h2>
                            </a>

                            <div className="md:hidden">
                                <button
                                    type="button"
                                    onClick={toggleMenu}
                                    className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-md border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                    aria-controls="navbar-collapse-with-animation"
                                    aria-label="Toggle navigation"
                                >
                                    <div className={isMenuOpen ? 'hidden' : 'block'}>
                                        <RxHamburgerMenu />

                                    </div>
                                    <div className={isMenuOpen ? 'block' : 'hidden'}>
                                        <IoMdClose />

                                    </div>
                                </button>
                            </div>
                        </div>

                        <div
                            id="navbar-collapse-with-animation"
                            className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block ${isMenuOpen ? 'block' : 'hidden'}`}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
                                <div className="flex flex-col sm:mx-auto gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                                    <Link className="text-base font-medium text-gray-950 md:py-6" to={'/'} aria-current="page">Home</Link>
                                    <Link to={'/product'} className="text-base font-medium  hover:text-gray-400 md:py-6" href="#">Product</Link>
                                    <Link className="text-base font-medium text-gray-950 md:py-6" to={'/about'} aria-current="page">About us</Link>


                                    <Link className="text-base font-medium text-gray-950 md:py-6" to={'/contact'} aria-current="page">Contact us</Link>

                                </div>
                                <div className="pt-2 relative text-gray-600">
                                    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Search" />
                                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                        <IoSearch />

                                    </button>
                                </div>
                                <div>
                                    <TbShoppingBagPlus size={30} />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </nav>
        </>
    );
}

export default Navbar;
