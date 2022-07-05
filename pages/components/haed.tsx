import React, { Component, useState } from "react";
import { AiFillMeh } from "react-icons/ai";
const HeadCard = () => {
    return (
        <div className=" flex place-content-center h-10 bg-gradient-to-r from-[#f5576c] font-sans to-[#feada6]">
            <AiFillMeh className="text-white my-auto" />
            <p className='p-2 font-medium text-white'>  Welcome to my profile</p>
        </div>
    )
}
const Navber = () => {
    const [isMenu, setIsMenu] = useState(false);
    return (
        <div>
            <nav className="bg-gradient-to-r from-[#537895] to-[#09203f]     px-6 sm:px-4 py-3  font-sans  md:rounded-b-xl rounded-b-2xl">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-xl  whitespace-nowrap text-white  ">
                            MR.T
                        </span>
                    </a>
                    <button

                        type="button"
                        className={`${isMenu
                            ? ""
                            : "hidden"} items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden focus:outline-none`}
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() => setIsMenu(false)}
                    >
                        <span className=" sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={`${isMenu
                            ? "hidden"
                            : ""} inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden  focus:outline-none`}
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        onClick={() => setIsMenu(true)}
                    >
                        <span className=" sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${isMenu ? "" : "hidden"} w-full md:block md:w-auto`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm ">
                            <li>
                                <a
                                    href="#"
                                    className="block  text-base  py-2 pr-4 pl-3  text-white "
                                    aria-current="page"
                                >
                                    HOME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-base py-2 pr-4 pl-3 text-white   "
                                    aria-current="page"
                                >
                                    BASICSKILL
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-base py-2 pr-4 pl-3 text-white    "
                                >
                                    ABOUT
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block text-base py-2 pr-4 pl-3 text-white    "
                                >
                                    TECHNICAL SKILL
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export { HeadCard, Navber }
