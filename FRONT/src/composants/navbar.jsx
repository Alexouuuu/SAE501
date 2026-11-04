import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

import { MdFormatAlignCenter } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import logo from "/images/logo_univ_eiffel_bleu.png"

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
        { id: 2, nom: 'Evenements JPO', url: '/evenements' },
        { id: 3, nom: 'Visite Virtuelle', url: '/visite-virtuelle' },
    ];

    const Autres = [
        { id: 1, nom: 'Plan du Site', url: '/planDuSite' },
        { id: 2, nom: 'Nous contacter', url: '/contact' },
    ];

    const Admin = { nom: 'Admin', url: '/admin/dashboard' }
    const Compte = { nom: 'Connexion / inscription', url: '/auth' }
    const JPOinscription = { nom: "S'inscrire à la JPO", url: '/auth' }

    return (
        <nav className="bg-white">
            <div className="flex flex-wrap items-center justify-between  sm:flex-nowrap sm:items-stretch sm:pl-8 lg:pl-20 md:px-0 px-2 shadow-lg">
                <div className="flex w-full items-center justify-between sm:w-auto">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 p-2 w-auto" />
                    </Link>
                    <button
                        type="button"
                        className="p-2 text-2xl text-black sm:hidden cursor-pointer"
                        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="navigation-links"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <section
                    id="navigation-links"
                    className={`${mobileMenuOpen ? "grid" : "hidden"} w-full grid-cols-1 items-stretch sm:flex sm:w-auto`}
                >

                    <ul ref={menusRef} className="contents sm:flex sm:flex-row sm:items-stretch">
                        <li className="relative flex w-full items-center justify-center sm:w-auto">
                            <button
                                type="button"
                                className="relative flex h-full w-full cursor-pointer items-center justify-center px-2 py-3 text-base text-black hover:bg-gray-100 sm:static sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-lg"
                                aria-expanded={openMenu === 'jpo'}
                                aria-controls="jpo-menu"
                                onClick={() => setOpenMenu(openMenu === 'jpo' ? null : 'jpo')}
                            >
                                <span className="w-full text-center sm:w-auto">JPO</span>
                                <RiArrowDropDownLine className="absolute right-3 mt-1 sm:static" />
                            </button>
                            <ul
                                id="jpo-menu"
                                className={`${openMenu === 'jpo' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 w-full min-w-0 bg-white py-0 text-center text-lg shadow-lg transition-opacity sm:w-auto sm:min-w-48 sm:text-left`}
                            >
                                {JPO.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-normal px-4 py-3 text-center text-lg text-black hover:bg-gray-100 sm:whitespace-nowrap sm:text-left" to={page.url}>
                                            {page.nom}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="relative flex w-full items-center justify-center sm:w-auto">
                            <button
                                type="button"
                                className="relative flex h-full w-full cursor-pointer items-center justify-center px-2 py-3 text-base text-black hover:bg-gray-100 sm:static sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-lg"
                                aria-expanded={openMenu === 'autres'}
                                aria-controls="autres-menu"
                                onClick={() => setOpenMenu(openMenu === 'autres' ? null : 'autres')}
                            >
                                <span className="w-full text-center sm:w-auto">Autres</span>
                                <RiArrowDropDownLine className="absolute right-3 mt-1 sm:static"/>
                            </button>
                            <ul
                                id="autres-menu"
                                className={`${openMenu === 'autres' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 w-full min-w-0 bg-white text-center shadow-lg transition-opacity sm:w-auto sm:min-w-48 sm:text-left`}
                            >
                                {Autres.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-normal px-4 py-3 text-center text-lg text-black hover:bg-gray-100 sm:whitespace-nowrap sm:text-left" to={page.url}>
                                            {page.nom}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    <Link
                        aria-label={Admin.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-3 text-center text-sm text-black hover:bg-black hover:text-white sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-lg"
                        to={Admin.url}
                    >
                        <MdOutlineAdminPanelSettings />
                        <span className="sm:hidden">{Admin.nom}</span>
                        <span className="hidden sm:inline">{Admin.nom}</span>
                    </Link>
                    <Link
                        aria-label={Compte.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-3 text-center text-sm text-black hover:bg-black hover:text-white sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-lg"
                        to={Compte.url}
                    >
                        <FaUser />
                        <span className="sm:hidden">{Compte.nom}</span>
                        <span className="hidden sm:inline">{Compte.nom}</span>
                    </Link>
                    <Link
                        aria-label={JPOinscription.nom}
                        className="inline-flex h-full min-w-0 w-full items-center justify-center gap-1 px-2 py-3 text-center text-sm text-black hover:bg-black hover:text-white sm:w-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-lg"
                        to={JPOinscription.url}
                    >
                        {JPOinscription.nom}
                    </Link>
                </section>
            </div>
        </nav>
    )
}