import React from 'react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';


const Sixbox = () => {
    return (
        <div className='container lg:mx-auto md:mx-auto mx-auto p-8'>
            <div className=' grid grid-cols-12 h-96'>
                <div className='col-span-4 '>
                    <img src={product1} alt="" />

                </div>
                <div className='col-span-4 bg-yellow-50'>
                    <div className='justify-center pt-28 items-center'>
                        <p className='uppercase tracking-widest	text-yellow-400 font-normal  text-center'>new products</p>
                        <h6 className='uppercase tracking-widest	text-yellow-400 font-medium text-2xl  text-center'>zipper storage bag</h6>
                        <div className="flex justify-center pt-5 items-center">
                            <button
                                type="button"
                                className="text-gray-700 bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg py-4 px-10 text-center inline-flex items-center "
                            >
                                <svg
                                    className="w-3.5 h-3.5 me-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 21"
                                >
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                                80% OFF
                            </button>
                        </div>
                        <a href=""> <h6 className='text-center text-gray-500 uppercase text-base font-bold  pt-3'>shop now</h6></a>
                    </div>



                </div>
                <div className='col-span-4 '>
                    <img src={product2} alt="" />
                </div>

            </div>
            <div className=' grid grid-cols-12 h-96'>
                <div className='col-span-4 bg-white'>


                <div className='justify-center pt-28 items-center'>
                        <p className='uppercase tracking-widest	text-yellow-400 font-normal  text-center'>on sell</p>
                        <h6 className='uppercase tracking-widest	text-yellow-400 font-medium text-2xl  text-center'>tucker bag</h6>
                        <div className="flex justify-center pt-5 items-center">
                            <button
                                type="button"
                                className="text-gray-700 uppercase bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg py-4 px-10 text-center inline-flex items-center "
                            >
                                <svg
                                    className="w-3.5 h-3.5 me-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 21"
                                >
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                              shop 30% off
                            </button>
                        </div>
                        <a href=""> <h6 className='text-center text-gray-500 uppercase text-base font-bold  pt-3'>shop now</h6></a>
                    </div>

                </div>

                <div className='col-span-4 '> <img src={product3} alt="" /></div>
                <div className='col-span-4 bg-white'>
                <div className='justify-center pt-28 items-center'>
                        <p className='uppercase tracking-widest	text-yellow-400 font-normal  text-center'>summer sale</p>
                        <h6 className='uppercase tracking-widest	text-yellow-400 font-medium text-2xl  text-center'>gate check bag</h6>
                        <div className="flex justify-center pt-5 items-center">
                            <button
                                type="button"
                                className="text-gray-700 uppercase                                                                                                                                                                                                                                                                                                                                                      Trend bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg py-4 px-10 text-center inline-flex items-center "
                            >
                                <svg
                                    className="w-3.5 h-3.5 me-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 21"
                                >
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                              minimum 50% off
                            </button>
                        </div>
                        <a href=""> <h6 className='text-center text-gray-500 uppercase text-base font-bold  pt-3'>shop now</h6></a>
                    </div>




                </div>

            </div>
        </div>

    )
}

export default Sixbox;
