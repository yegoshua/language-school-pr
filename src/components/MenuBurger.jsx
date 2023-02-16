import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
    { name: "Levels", to: "/levels" },
    { name: "About Us", to: "/about" },
    { name: "Themes", to: "/themes" },
    { name: "Words", to: "/words" },
    { name: "Our Teachers", to: "/teachers" },
];

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        )}
                    </button>
                </div>
                <div className="hidden md:block">
                    <nav className="flex space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className='hover:border-b-2 hover:border-accent-blue cursor-pointer trans transition-all'
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div className="-mr-2">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="inline"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-cyan-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Transition>
            </>
    );
}
