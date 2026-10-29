import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

import logo from "/images/logo_univ_eiffel_bleu.png" // temporaire hein, l'image est pixelisé

export default function Navbar() {
    // const Pages = [
    //     { id: 1, name: 'Accueil', url: '/' },
    //     { id: 2, name: 'Visite Virtuelle', url: '/visite-virtuelle' },
    //     { id: 3, name: 'Evenements', url: '/evenements' },
    //     { id: 4, name: 'Plan du Site', url: '/planDuSite' },
    //     { id: 5, name: 'Nous contacter', url: '/contact' },

    // ];

    // { id: 1, name: 'Mon Compte', url: '/mon-compte' },
    return (
        <nav className="border-b border-black bg-white">
            <div className="flex flex-row items-center justify-between px-6 py-4">
                {/*Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-auto" /> {/*a remplacer*/}
                </div>

                <section className="flex flex-row gap-4">
                    {/* <ul className="flex flex-row items-center gap-4">
                        {Pages.map((page) => (
                            <li key={page.id}>
                                <Link className="text-black hover:underline" to={page.url}>
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                    <div className="flex items-center">
                        <Link to="/mon-compte">
                            <span className="flex items-center justify-center w-10 h-10 border border-black rounded-full">
                                <FaUser />
                            </span>
                        </Link>
                    </div>
                </section>
            </div>
        </nav>
    )
}