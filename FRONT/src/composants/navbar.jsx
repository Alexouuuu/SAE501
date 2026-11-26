// maxime derènes

import { Link, NavLink, useLocation } from 'react-router-dom';

// icons
import { FaTimes, FaUser, FaCheck } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { IoIosSchool } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoHome } from "react-icons/io5";

// import logo from "../images/logo_univ_eiffel_bleu.webp"

// Classes partagées
const focusClassName = "focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white";
const itemClassName = `inline-flex h-full w-full min-w-0 cursor-pointer items-center justify-center gap-2 px-4 py-4 text-center text-base text-white transition-[background-color,color,box-shadow] duration-300 lg:w-auto lg:text-lg ${focusClassName}`;
// Trait bas : vert clair au survol, vert foncé pour la page actuelle
const itemBleuClassName = `${itemClassName} bg-mmi-bleu hover:bg-mmi-bleu-fonce hover:shadow-[inset_0_-4px_0_var(--color-mmi-vert-clair)]`;
const itemActifClassName = "bg-mmi-bleu-fonce shadow-[inset_0_-4px_0_var(--color-mmi-vert)]";
const sousItemClassName = "block whitespace-normal border-l-3 border-transparent px-4 py-3 text-center text-lg text-black transition-colors duration-100 hover:border-mmi-bleu hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-mmi-bleu lg:whitespace-nowrap lg:text-left";
const sousItemActifClassName = "border-mmi-bleu bg-gray-100 font-semibold";

const MENUS = [
    {
        id: 'butmmi',
        nom: 'BUT MMI',
        pages: [
            { id: 1, nom: 'La formation', url: '/formation' },
            { id: 2, nom: 'Visite Virtuelle', url: '/visite-virtuelle' },
            { id: 3, nom: 'Projets MMI', url: '/projets' },
            { id: 4, nom: 'Actualités', url: '/actus' },
        ],
    },
    {
        id: 'jpo',
        nom: 'JPO',
        pages: [
            { id: 1, nom: 'Présentation de la JPO', url: '/jpo' },
            { id: 2, nom: 'Programme de la JPO', url: '/planning-jpo' },
        ],
    },
];

const Accueil = { nom: 'Accueil', url: '/' }
const Contact = { nom: 'Contact', url: '/contact' }
const Admin = { nom: 'Admin', url: '/admin/dashboard' }
const Compte = { nom: 'Mon espace', url: '/mon-espace' }
const JPOinscription = { nom: "S'inscrire à la JPO", url: '/auth?mode=inscription' }

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menusRef = useRef(null);
    const { pathname } = useLocation();

    const RoleAdmin = true; // = false : cache admin
    const IsInscrit = true; // true = cache page d'inscription ( S'inscrire a la jpo )
    const IsConnected = true; // false = cache mon espace
    // attention c une double verif, faut mettre double true pour afficher l'autre etat

    // Ferme les menus à chaque changement de page (y compris bouton retour du navigateur)
    const [cheminPrecedent, setCheminPrecedent] = useState(pathname);
    if (pathname !== cheminPrecedent) {
        setCheminPrecedent(pathname);
        setOpenMenu(null);
        setMobileMenuOpen(false);
    }

    // Ferme les menus au clic extérieur
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menusRef.current && !menusRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('pointerdown', handleOutsideClick);
        return () => document.removeEventListener('pointerdown', handleOutsideClick);
    }, []);

    // Échap ferme le sous-menu ouvert et rend le focus à son bouton
    useEffect(() => {
        if (!openMenu) return;
        const handleEscape = (event) => {
            if (event.key !== 'Escape') return;
            setOpenMenu(null);
            document.getElementById(`${openMenu}-bouton`)?.focus();
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [openMenu]);

    const fermerMenus = () => {
        setOpenMenu(null);
        setMobileMenuOpen(false);
    };

    const classeLien = ({ isActive }) => `${itemBleuClassName} ${isActive ? itemActifClassName : ''}`;

    return (
        <nav className="bg-white" aria-label="Navigation principale">
            <div className="flex flex-wrap items-center justify-between shadow-md lg:flex-nowrap lg:items-stretch lg:pl-8 xl:pl-20">
                <div className="flex w-full items-center justify-between lg:w-auto">
                    <Link to="/" className="focus-visible:outline-2 focus-visible:outline-mmi-bleu">
                        {/* <img src={logo} alt="Logo" className="h-12 p-2 w-auto" /> */}
                        faire un logo departement MMI
                    </Link>
                    <button
                        type="button"
                        className="cursor-pointer p-3 text-2xl text-black focus-visible:outline-2 focus-visible:outline-mmi-bleu lg:hidden"
                        aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="navigation-links"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <FaTimes /> : <HiMiniBars3BottomRight />}
                    </button>
                </div>

                <ul
                    id="navigation-links"
                    ref={menusRef}
                    className={`${mobileMenuOpen ? "flex" : "hidden"} w-full flex-col lg:flex lg:w-auto lg:flex-row lg:items-stretch`}
                >
                    <li className="flex">
                        <NavLink to={Accueil.url} end className={classeLien} onClick={fermerMenus}>
                            <IoHome aria-hidden="true" />
                            {Accueil.nom}
                        </NavLink>
                    </li>

                    {MENUS.map((menu) => {
                        const ouvert = openMenu === menu.id;
                        const contientPageActive = menu.pages.some((page) => pathname.startsWith(page.url));

                        return (
                            <li key={menu.id} className="relative flex flex-col lg:flex-row">
                                <button
                                    id={`${menu.id}-bouton`}
                                    type="button"
                                    className={`${itemBleuClassName} relative lg:static ${contientPageActive ? itemActifClassName : ''}`}
                                    aria-expanded={ouvert}
                                    aria-controls={`${menu.id}-menu`}
                                    onClick={() => setOpenMenu(ouvert ? null : menu.id)}
                                >
                                    {menu.nom}
                                    <RiArrowDropDownLine
                                        aria-hidden="true"
                                        className={`absolute right-3 text-2xl transition-transform duration-200 lg:static ${ouvert ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {/* Mobile : accordéon dans le flux. Desktop : menu flottant */}
                                <ul
                                    id={`${menu.id}-menu`}
                                    className={`${ouvert ? 'block lg:visible lg:opacity-100' : 'hidden lg:block lg:invisible lg:opacity-0'} w-full bg-white transition-opacity lg:absolute lg:left-0 lg:top-full lg:z-20 lg:w-auto lg:min-w-48 lg:shadow-lg`}
                                >
                                    {menu.pages.map((page) => (
                                        <li key={page.id}>
                                            <NavLink
                                                to={page.url}
                                                onClick={fermerMenus}
                                                className={({ isActive }) => `${sousItemClassName} ${isActive ? sousItemActifClassName : ''}`}
                                            >
                                                {page.nom}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}

                    <li className="flex">
                        <NavLink to={Contact.url} className={classeLien} onClick={fermerMenus}>
                            {Contact.nom}
                        </NavLink>
                    </li>

                    {/* Espace utilisateur, séparé visuellement de la navigation */}
                    {RoleAdmin === true && (
                        <li className="flex lg:border-l lg:border-white/25">
                            <NavLink to={Admin.url} className={classeLien} onClick={fermerMenus}>
                                <MdOutlineAdminPanelSettings aria-hidden="true" />
                                {Admin.nom}
                            </NavLink>
                        </li>
                    )}

                    {IsConnected === true && (
                        <li className="flex lg:border-l lg:border-white/25">
                            <NavLink to={Compte.url} className={classeLien} onClick={fermerMenus}>
                                <FaUser aria-hidden="true" />
                                {Compte.nom}
                            </NavLink>
                        </li>
                    )}

                    {IsInscrit === false && IsConnected === false ? (
                        <li className="flex">
                            <NavLink
                                to={JPOinscription.url}
                                onClick={fermerMenus}
                                className={`${itemClassName} bg-mmi-vert font-bold hover:bg-mmi-vert-clair hover:text-mmi-texte`}
                            >
                                <IoIosSchool aria-hidden="true" />
                                {JPOinscription.nom}
                            </NavLink>
                        </li>
                    ) : IsInscrit === true && IsConnected === true ? (
                        <li className="flex">
                            {/* Simple indicateur d'état, non cliquable */}
                            <span className="inline-flex h-full w-full min-w-0 cursor-default items-center justify-center gap-2 bg-mmi-vert px-4 py-4 text-center text-base font-bold text-white lg:w-auto lg:text-lg">
                                <FaCheck aria-hidden="true" />
                                Inscrit à la JPO
                            </span>
                        </li>
                    ) : null}
                </ul>
            </div>
        </nav>
    )
}
