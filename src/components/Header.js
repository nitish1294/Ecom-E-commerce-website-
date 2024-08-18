import React from 'react';
import Slider from "react-slick";
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';
const Header = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                <div class="relative py-24 max-w-[85rem] w-full lg:mx-auto  md:m-auto xl:mx-auto">


                    <div class="absolute inset-0">
                        <img class="object-cover w-full h-full" src={banner1} alt="" />
                    </div>

                    <div class="relative">
                        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                            <div class="w-full lg:w-2/3 xl:w-1/2">
                                <h1 class="font-serif text-2xl tracking-tight text-white ">NEW ARRIVAL</h1>
                                <p class="mt-6 tracking-tighter text-white">
                                    <span class="font-sans font-normal text-5xl">Carry style with you</span><br />
                                    <span class="font-serif italic font-normal text-7xl">wherever you go.</span>
                                </p>
                                {/* <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p> */}
                                <p class="mt-8 font-sans text-xl py-4 font-normal text-white">Starting at ₹ 899</p>

                                <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="  inline-flex  items-center justify-center  px-5  py-2  font-sans  text-base  font-semibold  transition-all  duration-200  border-2 border-transparent  rounded-full  sm:leading-8  bg-white  sm:text-lg  text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                        role="button"
                                    >
                                        save up to 50% off
                                    </a>

                                    {/* <a
                                href="#"
                                title=""
                                class=" inline-flex items-center justify-centerpx-5 py-2 font-sanstext-basefont-semiboldbg-transparent border-2 rounded-full sm:leading-8 transition-all duration-200 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-off set-secondary"
                                role="button"
                            >
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch trailer
                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative py-24 max-w-[85rem] w-full lg:mx-auto  md:m-auto xl:mx-auto">


                    <div class="absolute inset-0">
                        <img class="object-cover w-full h-full" src={banner2} alt="" />
                    </div>

                    <div class="relative">
                        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                            <div class="w-full lg:w-2/3 xl:w-1/2">
                                <h1 class="font-serif text-2xl tracking-tight text-white ">NEW ARRIVAL</h1>
                                <p class="mt-6 tracking-tighter text-white">
                                    <span class="font-sans font-normal text-5xl">Carry style with you</span><br />
                                    <span class="font-serif italic font-normal text-7xl">wherever you go.</span>
                                </p>
                                {/* <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p> */}
                                <p class="mt-8 font-sans text-xl py-4 font-normal text-white">Starting at ₹ 899</p>

                                <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="  inline-flex  items-center justify-center  px-5  py-2  font-sans  text-base  font-semibold  transition-all  duration-200  border-2 border-transparent  rounded-full  sm:leading-8  bg-white  sm:text-lg  text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                        role="button"
                                    >
                                        save up to 50% off
                                    </a>

                                    {/* <a
                                href="#"
                                title=""
                                class=" inline-flex items-center justify-centerpx-5 py-2 font-sanstext-basefont-semiboldbg-transparent border-2 rounded-full sm:leading-8 transition-all duration-200 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-off set-secondary"
                                role="button"
                            >
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch trailer
                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative py-24 max-w-[85rem]  w-full lg:mx-auto md:m-auto xl:mx-auto">


                    <div class="absolute inset-0">
                        <img class="object-cover w-full h-full" src={banner3} alt="" />
                    </div>

                    <div class="relative">
                        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                            <div class="w-full lg:w-2/3 xl:w-1/2">
                                <h1 class="font-serif text-2xl tracking-tight text-white ">NEW ARRIVAL</h1>
                                <p class="mt-6 tracking-tighter text-white">
                                    <span class="font-sans font-normal text-5xl">Carry style with you</span><br />
                                    <span class="font-serif italic font-normal text-7xl">wherever you go.</span>
                                </p>
                                {/* <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p> */}
                                <p class="mt-8 font-sans text-xl py-4 font-normal text-white">Starting at ₹ 899</p>

                                <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="  inline-flex  items-center justify-center  px-5  py-2  font-sans  text-base  font-semibold  transition-all  duration-200  border-2 border-transparent  rounded-full  sm:leading-8  bg-white  sm:text-lg  text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                        role="button"
                                    >
                                        save up to 50% off
                                    </a>

                                    {/* <a
                                href="#"
                                title=""
                                class=" inline-flex items-center justify-centerpx-5 py-2 font-sanstext-basefont-semiboldbg-transparent border-2 rounded-full sm:leading-8 transition-all duration-200 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-off set-secondary"
                                role="button"
                            >
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch trailer
                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative py-24 max-w-[85rem] w-full lg:mx-auto  md:m-auto xl:mx-auto">


                    <div class="absolute inset-0">
                        <img class="object-cover w-full h-full" src={banner4} alt="" />
                    </div>

                    <div class="relative">
                        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                            <div class="w-full lg:w-2/3 xl:w-1/2">
                                <h1 class="font-serif text-2xl tracking-tight text-black ">NEW ARRIVAL</h1>
                                <p class="mt-6 tracking-tighter text-black">
                                    <span class="font-sans font-normal text-5xl">Your journey begins</span><br />
                                    <span class="font-serif italic font-normal text-7xl">with the right bag.</span>
                                </p>
                                {/* <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p> */}
                                <p class="mt-8 font-sans text-xl py-4 font-normal text-black">Starting at ₹ 999</p>
                                <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="  inline-flex  items-center justify-center  px-5  py-2  font-sans  text-base  font-semibold  transition-all  duration-200  border-2 border-transparent  rounded-full  sm:leading-8  bg-black  sm:text-lg  text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                                        role="button"
                                    >
                                        save up to 40% off
                                    </a>

                                    {/* <a
                                href="#"
                                title=""
                                class=" inline-flex items-center justify-centerpx-5 py-2 font-sanstext-basefont-semiboldbg-transparent border-2 rounded-full sm:leading-8 transition-all duration-200 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-off set-secondary"
                                role="button"
                            >
                                <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch trailer
                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </>




    );
}

export default Header;
