import { Link } from 'react-router-dom';

// icons
import { FaTimes, FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { IoIosSchool } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

import logo from "/images/logo_univ_eiffel_bleu.webp"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menusRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menusRef.current && !menusRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('pointerdown', handleOutsideClick);
        return () => document.removeEventListener('pointerdown', handleOutsideClick);
    }, []);

    const JPO = [
        { id: 1, nom: 'La formation', url: '/formation' },
        { id: 2, nom: 'Les évènements JPO', url: '/evenements' },
        { id: 3, nom: 'Visite Virtuelle', url: '/visite-virtuelle' },
    ];

    const Autres = [
        { id: 1, nom: 'Plan du Site', url: '/planDuSite' },
        { id: 2, nom: 'Nous contacter', url: '/contact' },
    ];

    const Admin = { nom: 'Admin', url: '/admin/dashboard' }
    const Compte = { nom: 'Mon espace', url: '/mon-compte' }
    const Auth = { nom: 'Connexion / inscription', url: '/auth' }
    const JPOinscription = { nom: "S'inscrire à la JPO", url: '/auth' }

    return (
        <nav className="bg-white">
            <div className="flex flex-wrap items-center justify-between shadow-md lg:flex-nowrap lg:items-stretch lg:pl-8 xl:pl-20">
                <div className="flex w-full items-center justify-between lg:w-auto">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 p-2 w-auto" />
                    </Link>
                    <button
                        type="button"
                        className="cursor-pointer p-2 text-2xl text-black lg:hidden"
                        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="navigation-links"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <HiMiniBars3BottomRight color='black' />}
                    </button>
                </div>

                <section
                    id="navigation-links"
                    className={`${mobileMenuOpen ? "grid" : "hidden"} w-full grid-cols-1 items-stretch lg:flex lg:w-auto`}
                >

                    <ul ref={menusRef} className="contents lg:flex lg:flex-row lg:items-stretch">
                        <li className="relative flex w-full items-center justify-center lg:w-auto">
                            <button
                                type="button"
                                className="bg-[#3c3792] text-white hover:bg-[#2a266c] relative flex h-full w-full cursor-pointer items-center justify-center px-2 py-3 text-base lg:static lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg"
                                aria-expanded={openMenu === 'jpo'}
                                aria-controls="jpo-menu"
                                onClick={() => setOpenMenu(openMenu === 'jpo' ? null : 'jpo')}
                            >
                                <span className="w-full text-center lg:w-auto">JPO</span>
                                <RiArrowDropDownLine className="absolute right-3 mt-1 lg:static" />
                            </button>
                            <ul
                                id="jpo-menu"
                                className={`${openMenu === 'jpo' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 w-full min-w-0 bg-white py-0 text-center text-lg shadow-lg transition-opacity lg:w-auto lg:min-w-48 lg:text-left`}
                            >
                                {JPO.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-normal px-4 py-3 text-center text-lg text-black hover:bg-gray-100 transform transition duration-300 lg:whitespace-nowrap lg:text-left" to={page.url}>
                                            {page.nom}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="relative flex w-full items-center justify-center lg:w-auto">
                            <button
                                type="button"
                                className="bg-[#3c3792] text-white hover:bg-[#2a266c] relative flex h-full w-full cursor-pointer items-center justify-center px-2 py-3 text-base  lg:static lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg transform transition duration-300"
                                aria-expanded={openMenu === 'autres'}
                                aria-controls="autres-menu"
                                onClick={() => setOpenMenu(openMenu === 'autres' ? null : 'autres')}
                            >
                                <span className="w-full text-center lg:w-auto">Autres</span>
                                <RiArrowDropDownLine className="absolute right-3 mt-1 lg:static" />
                            </button>
                            <ul
                                id="autres-menu"
                                className={`${openMenu === 'autres' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 w-full min-w-0 bg-white text-center shadow-lg transition-opacity lg:w-auto lg:min-w-48 lg:text-left transform duration-300`}
                            >
                                {Autres.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-normal px-4 py-3 text-center text-lg text-black hover:bg-gray-100 transform transition duration-300 lg:whitespace-nowrap lg:text-left" to={page.url}>
                                            {page.nom}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    <Link
                        aria-label={Admin.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-5 text-center text-sm bg-[#3c3792] text-white hover:bg-[#2a266c] lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg transform transition duration-300"
                        to={Admin.url}
                    >
                        <MdOutlineAdminPanelSettings />
                        <span className="lg:hidden">{Admin.nom}</span>
                        <span className="hidden lg:inline">{Admin.nom}</span>
                    </Link>
                    <Link
                        aria-label={Compte.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-5 text-center text-sm bg-[#3c3792] text-white hover:bg-[#2a266c] lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg transform transition duration-300"
                        to={Compte.url}
                    >
                        <FaUser />
                        <span className="lg:hidden">{Compte.nom}</span>
                        <span className="hidden lg:inline">{Compte.nom}</span>
                    </Link>
                    <Link
                        aria-label={Auth.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-5 text-center text-sm bg-[#3c3792] text-white hover:bg-[#2a266c] lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg transform transition duration-300"
                        to={Auth.url}
                    >
                        <FaUser />
                        <span className="lg:hidden">{Auth.nom}</span>
                        <span className="hidden lg:inline">{Auth.nom}</span>
                    </Link>
                    <Link
                        aria-label={JPOinscription.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-5 text-center text-sm text-white bg-[#00936e] hover:bg-[#92c56e] lg:w-auto lg:gap-2 lg:px-4 lg:py-4 lg:text-lg transform transition duration-300"
                        to={JPOinscription.url}
                    >
                        <IoIosSchool />
                        {JPOinscription.nom}
                    </Link>
                </section>
            </div>
        </nav>
    )
}