import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../assets/images/Cart.svg';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { total_item } = useCartContext();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-white pl-10 pr-10">
                <div className="container flex flex-col mx-auto bg-white">
                    <div className="relative flex flex-wrap items-center justify-between w-full bg-white group shrink-0">
                        <div>
                            <NavLink to={"/"}>
                                <img className="h-[120px]" src={logo} alt="Logo" />
                            </NavLink>
                        </div>
                        <div className="items-center justify-between hidden gap-12 text-black md:flex">
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/"}>Home</NavLink>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/products"}>Product</NavLink>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/about"}>About</NavLink>
                            <NavLink to={'/contact'} className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link">Contact</NavLink>
                        </div>
                        <div className="items-center hidden gap-8 md:flex">
                            <button className="flex items-center text-lg font-normal text-gray-800 hover:text-gray-900 transition duration-300">Log In</button>
                            <button className="flex items-center px-4 py-2 text-lg font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                                Sign Up
                            </button>
                            <div className="relative inline-block">
                                <NavLink to={"/cart"}><FaCartShopping className="text-4xl" /></NavLink>
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center text-[0.7rem]">
                                    {total_item}
                                </span>
                            </div>
                        </div>
                        <button onClick={handleToggle} className="flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black"></path>
                            </svg>
                        </button>
                        <div className={`absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white ${isOpen ? 'max-h-64 py-4' : 'max-h-0'} px-4 rounded-2xl top-full`}>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/"}>Home</NavLink>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/products"}>Product</NavLink>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/about"}>About</NavLink>
                            <NavLink className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900 nav-link" to={"/contact"}>Contact</NavLink>
                            <button className="flex items-center text-lg font-normal text-black">Log In</button>
                            <div className='flex justify-between w-full items-center'>
                                <button className="flex items-center px-0 py-2 text-lg font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">Sign Up</button>
                                <div className="relative inline-block ml-4">
                                    <NavLink to={"/cart"}><FaCartShopping className="text-xl" /></NavLink>
                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[0.6rem]">
                                        {total_item}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
