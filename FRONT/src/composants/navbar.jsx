import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

import { MdFormatAlignCenter } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import logo from "/images/logo_univ_eiffel_bleu.png"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
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
        { id: 1, name: 'La formation', url: '/formation' },
        { id: 2, name: 'Evenements JPO', url: '/evenements' },
        { id: 3, name: 'Visite Virtuelle', url: '/visite-virtuelle' },
    ];

    const Autres = [
        { id: 1, name: 'Plan du Site', url: '/planDuSite' },
        { id: 2, name: 'Nous contacter', url: '/contact' },
    ];

    const Admin = { name: 'Dashboard Admin', url: '/admin/dashboard' }

    const Compte = { name: 'Connexion / inscription', url: '/auth' }

    return (
        <nav className="border-b border-black bg-white">
            <div className="flex flex-col items-center gap-1 px-2 sm:flex-row sm:justify-between sm:pl-8 lg:pl-20">
                {/*Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 p-2 w-auto" />
                    </Link>
                </div>

                <section className="flex w-full min-w-0 flex-wrap items-stretch justify-center sm:w-auto sm:flex-nowrap">

                    <ul ref={menusRef} className="flex min-w-0 flex-wrap items-stretch justify-center sm:flex-nowrap">
                        <li className="relative flex items-center">
                            <button
                                type="button"
                                className="hover:bg-gray-100 h-full px-2 text-sm text-black flex flex-row gap-1 items-center cursor-pointer sm:px-4 sm:gap-2 sm:text-lg"
                                aria-expanded={openMenu === 'jpo'}
                                aria-controls="jpo-menu"
                                onClick={() => setOpenMenu(openMenu === 'jpo' ? null : 'jpo')}
                            >
                                JPO
                                <RiArrowDropDownLine className="mt-1" />
                            </button>
                            <ul
                                id="jpo-menu"
                                className={`${openMenu === 'jpo' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 min-w-48 bg-white py-0 text-lg shadow-lg transition-opacity`}
                            >
                                {JPO.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-nowrap px-4 py-3 text-lg text-black hover:bg-gray-100" to={page.url}>
                                            {page.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="relative flex items-center">
                            <button
                                type="button"
                                className="hover:bg-gray-100 h-full px-2 text-sm text-black flex flex-row gap-1 items-center cursor-pointer sm:px-4 sm:gap-2 sm:text-lg"
                                aria-expanded={openMenu === 'autres'}
                                aria-controls="autres-menu"
                                onClick={() => setOpenMenu(openMenu === 'autres' ? null : 'autres')}
                            >
                                Autres
                                <RiArrowDropDownLine className="mt-1"/>
                            </button>
                            <ul
                                id="autres-menu"
                                className={`${openMenu === 'autres' ? 'visible opacity-100' : 'invisible opacity-0'} absolute left-0 top-full z-20 min-w-48 bg-white shadow-lg transition-opacity`}
                            >
                                {Autres.map((page) => (
                                    <li key={page.id}>
                                        <Link className="block whitespace-nowrap px-4 py-3 text-lg text-black hover:bg-gray-100" to={page.url}>
                                            {page.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    <Link
                        className="min-w-0 px-2 py-2 inline-flex h-full w-auto items-center justify-center gap-1 text-center text-sm text-black hover:bg-black hover:text-white sm:px-4 sm:gap-2 sm:text-lg"
                        to={Admin.url}
                    >
                        <MdOutlineAdminPanelSettings />
                        {Admin.name}
                    </Link>
                    <Link
                        className="min-w-0 px-2 py-2 inline-flex h-full w-auto items-center justify-center gap-1 text-center text-sm text-black hover:bg-black hover:text-white sm:px-4 sm:gap-2 sm:text-lg"
                        to={Compte.url}
                    >
                        <FaUser />
                        {Compte.name}
                    </Link>
                    <Link
                        className="px-4 inline-flex h-full w-auto items-center justify-center gap-2 text-lg text-black hover:bg-black hover:text-white"
                        to="/auth"
                    >
                        <MdFormatAlignCenter />
                        <p className="max-w-20 leading-tight sm:max-w-none">S'inscrire à la JPO</p>
                    </Link>
                </section>
            </div>
        </nav>
    )
}