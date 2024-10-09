"use client";

import { useState } from 'react';
import logo from "../../public/assets/logo.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { RiCloseLargeFill } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={logo}
                        alt="Company Logo"
                        className="mr-3 w-[100px]"
                    />
                    <div>
                        <h1 className="text-white font-bold text-lg">BH FERMETURE</h1>
                        <h3 className='text-white font-bolder'>votre sécurité, notre priorité</h3>
                    </div>
                </div>
                <div className="md:hidden">
                    {/* Hamburger menu icon */}
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <RiCloseLargeFill className="h-6 w-6" /> : <TiThMenuOutline className="h-6 w-6" />}
                    </button>
                </div>
                <ul className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 space-y-4 md:space-y-0 bg-gray-800 md:bg-transparent absolute md:relative w-full md:w-auto left-0 top-16 md:top-auto z-10 p-4 md:p-0 transition-transform ${isOpen ? 'block mt-10' : 'hidden'}`}>
                    <li>
                        <Link href="#home" className="text-white hover:text-gray-400">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="#achivements" className="text-white hover:text-gray-400">
                            Nos Réalisations
                        </Link>
                    </li>
                    <li>
                        <Link href="#partners" className="text-white hover:text-gray-400">
                            Nos partenaires
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-white hover:text-gray-400">
                            Contactez-nous
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-white hover:text-gray-400">
                            Citation
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
