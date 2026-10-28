

import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa"; // https://www.youtube.com/@iutmlv6116
import { FaInstagram } from "react-icons/fa"; // https://www.instagram.com/but_mmi_meaux?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==

import "./footer.css"

export default function Footer() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);



    const liens = [
        { id: 1, name: 'Accueil', url: '/' },
        { id: 2, name: 'Visite Virtuelle', url: '/visite-virtuelle' },
        { id: 3, name: 'Evenements', url: '/evenements' },
    ];

    const liensPersos = [
        { id: 1, name: 'Mon Compte', url: '/mon-compte' },
    ];

    const liensdroits = [
        { id: 1, name: 'CGU', url: '/cgu' },
        { id: 2, name: 'Cookies', url: '/cookies' },
        { id: 3, name: 'Mentions Légales', url: '/mentions-legales' },
        { id: 4, name: 'Politique de Confidentialité', url: '/politique-confidentialite' },
    ];

    const liensReseaux = [
        { id: 1, name: 'Youtube', url: 'https://www.youtube.com/@iutmlv6116', icon: <FaYoutube></FaYoutube> },
        { id: 2, name: 'Instagram', url: 'https://www.instagram.com/but_mmi_meaux?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==', icon: <FaInstagram></FaInstagram> },
    ]

    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 text-gray-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3 md:items-stretch">
                    <div className="w-full max-w-xs mx-auto md:mx-0 md:max-w-none">
                        <h4 className="text-slate-900 font-bold uppercase tracking-wider text-md mb-6 ">PAGES</h4>
                        <ul className="m-2 space-y-4 text-md font-medium">
                            {liens.map((lien) => (
                                <li key={lien.id}>
                                    <Link to={lien.url} className="OnHoverLeftBorderAppear text-md inline-block cursor-pointer">
                                        {lien.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full max-w-xs mx-auto md:mx-0 md:max-w-none">
                        <h4 className="text-slate-900 font-bold uppercase tracking-wider text-md mb-6">VOTRE ESPACE</h4>
                        <ul className="m-2 space-y-4 text-md font-medium ">
                            {liensPersos.map((lien) => (
                                <li key={lien.id}>
                                    <Link to={lien.url} className="OnHoverLeftBorderAppear text-md inline-block cursor-pointer">
                                        {lien.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div aria-label="google map" className="mx-auto flex h-64 w-full justify-center sm:h-80 md:h-72 lg:h-80">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1906.7855729968471!2d2.8736989282913137!3d48.956627391235735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8a11cceb9ee4f%3A0x143615de96b042c5!2sIUT%20De%20Meaux%20Universit%C3%A9%20Gustave%20Eiffel!5e0!3m2!1sfr!2sfr!4v1793196787299!5m2!1sfr!2sfr"
                            className="block h-full w-full" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>

                </div>

                <hr className="border-gray-200 my-6" />

                <section className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center justify-center gap-3">
                        {liensReseaux.map((reseau) => (
                            <a
                                key={reseau.id}
                                href={reseau.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#252b90] transition-colors"
                                title={reseau.name}
                            >
                                {reseau.icon}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-medium text-gray-600 md:justify-end">
                        {liensdroits.map((lien) => (
                            <Link key={lien.id} to={lien.url} className="text-md OnHoverLeftBorderAppear inline-block cursor-pointer">
                                {lien.name}
                            </Link>
                        ))}
                    </div>
                </section>


            </div>
        </footer>
    )
}