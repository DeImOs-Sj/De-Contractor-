import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function HomePage() {
    return (
        <div className="w-full">
            <nav className="bg-white shadow-lg">
                <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <a href="#" className='text-2xl font-bold text-gray-800 md:text-3xl'>Welcome to MultiSignature Bill Validation
                            </a>

                        </div>

                        <div className="md:hidden">
                            <button
                                type="button"
                                className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                            >
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {/* SVG path here */}
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row hidden md:block -mx-2">
                        {/* <a
                            href="#"
                            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                        >
                            Home
                        </a> */}
                        {/* Add more navigation links here */}
                    </div>
                </div>
            </nav>
            <div className="flex bg-white" style={{ height: '600px' }}>
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                            About <span className="text-indigo-600">MultiSignature App</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 md:text-base">
                            A MultiSignature (MultiSig) App for Bill Validation is a decentralized application built on blockchain technology that facilitates the management and approval of bills through a secure and distributed consensus mechanism. The app employs the concept of multi-signature wallets to ensure that critical actions, such as bill approval, require multiple parties to authorize and execute, enhancing security and transparency. This approach is particularly useful in scenarios where a group of individuals or entities collaboratively manages financial transactions or decision-making processes.
                        </p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a
                                to="/upload"

                                className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                                href="#"
                            >
                                Get Started
                            </a>
                            {/* <a
                                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                                href="#"
                            >
                                Learn More
                            </a> */}
                        </div>
                    </div>
                </div>
                <div
                    className="hidden lg:block lg:w-1/2"
                    style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
                >
                    <div className="h-full object-cover " style={{ backgroundImage: 'url(https://e1.pxfuel.com/desktop-wallpaper/268/242/desktop-wallpaper-for-decentralized-blockchain-blockchain.jpg)' }}>
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
