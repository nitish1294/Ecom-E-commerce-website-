import React from 'react';
import backgroundImage from "../assets/images/offer.jpg"

const Specialoffer = () => {
    return (
        <div className="h-screen bg-cover lg:mx-auto md:mx-auto mx-auto bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='py-56'>
                <h6 className='text-center tracking-widest text-2xl text-yellow-300 uppercase'>special offer for you</h6>
                <h6 className='uppercase tracking-wider	 text-center text-6xl py-4 font-bold text-white'>leather bag</h6>
                <p className='uppercase tracking-wider text-center text-white font-semibold text-3xl'>extra 50% off</p>
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
                        Buy now
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Specialoffer
