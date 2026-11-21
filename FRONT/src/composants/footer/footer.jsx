
// maxime derènes

import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6"; // https://www.youtube.com/@iutmlv6116
import { AiFillInstagram } from "react-icons/ai"; // https://www.instagram.com/but_mmi_meaux?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==
import { FaLinkedin } from "react-icons/fa";
import MapGoogle from "../mapGoogle";

import "./footer.css";

// const [isLoggedIn, setIsLoggedIn] = useState(false);

export default function Footer() {
    const liens = [
        { id: 1, name: 'Accueil', url: '/' },
        { id: 2, name: 'La formation', url: '/formation' },
        { id: 3, name: 'Visite Virtuelle', url: '/visite-virtuelle' },
        { id: 4, name: 'Plan du site', url: '/planDuSite' },
    ];

    const JPO = [
        { id: 1, name: 'JPO', url: '/jpo' },
        { id: 2, name: 'Programme JPO', url: '/planning-jpo' },
    ]

    const liensPersos = [
        { id: 1, name: 'Mon Compte', url: '/mon-espace' },
    ];

    const liensdroits = [
        { id: 1, name: 'CGU', url: '/cgu' },
        { id: 2, name: 'Cookies', url: '/cookies' },
        { id: 3, name: 'Mentions Légales', url: '/mentions-legales' },
        { id: 4, name: 'Politique de Confidentialité', url: '/politique-confidentialite' },
    ];

    const liensReseaux = [
        { id: 1, name: 'Youtube', url: 'https://www.youtube.com/@iutmlv6116', icon: <FaYoutube /> },
        { id: 2, name: 'Instagram', url: 'https://www.instagram.com/but_mmi_meaux?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==', icon: <AiFillInstagram /> },
        { id: 3, name: "Linkedin", url: "https://www.linkedin.com/in/iut-marne-la-vallée-a6b583122/", icon: <FaLinkedin /> }
    ];

    const adresse = "17 Rue Jablinot, 77100 Meaux";
    const telephone = "01 64 36 44 15";

    const liencontact = [
        { id: 1, name: 'Nous contacter', url: '/contact' },
    ]

    return (
        <footer>
            <hr className="mx-auto w-24 h-1 bg-[#2f2a85] rounded-full mb-1 border-0" />
            <section className="relative overflow-hidden bg-[#3c3796] border-t border-gray-200 pt-16 pb-8 text-gray-600">
                {/* Fond de la zone carte et séparation diagonale */}
                <div
                    className="absolute inset-y-0 left-0 hidden w-[48%] bg-[#2f2a85] [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)] xl:block"
                    aria-hidden="true"
                />
                <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Navigation */}
                    <div className="mb-8 grid grid-cols-1 text-center xl:mb-0 xl:min-h-80 xl:grid-cols-2 xl:items-center xl:text-left">
                        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 xl:col-start-2">
                            <div>
                                <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-white underlineblanc">PAGES</h4>
                                <ul className="m-2 space-y-4 font-medium">
                                    {liens.map((lien) => (
                                        <li key={lien.id}>
                                            <Link to={lien.url} className="OnHoverLeftBorderAppear inline-block cursor-pointer py-2 px-2 text-base">
                                                {lien.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-white underlineblanc">JPO</h4>
                                <ul className="m-2 space-y-4 font-medium">
                                    {JPO.map((jpokey) => (
                                        <li key={jpokey.id}>
                                            <Link to={jpokey.url} className="OnHoverLeftBorderAppear inline-block cursor-pointer py-2 px-2 text-base">
                                                {jpokey.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-white underlineblanc">VOTRE ESPACE</h4>
                                <ul className="m-2 space-y-4 font-medium">
                                    {liensPersos.map((lien) => (
                                        <li key={lien.id}>
                                            <Link to={lien.url} className="OnHoverLeftBorderAppear inline-block cursor-pointer py-2 px-2 text-base">
                                                {lien.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col items-center text-center text-white xl:items-start xl:text-left">
                                <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-white underlineblanc">CONTACT</h4>
                                <ul className="m-2 space-y-4 font-medium">
                                    {liencontact.map((lien) => (
                                        <li key={lien.id}>
                                            <Link to={lien.url} className="OnHoverLeftBorderAppear inline-block cursor-pointer py-2 px-2 text-base">
                                                {lien.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="m-2 flex flex-col gap-2 text-sm">
                                    <address className="not-italic">{adresse}</address>
                                    <a href="tel:+33164364415" className="hover:underline">
                                        {telephone}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Carte Google Maps */}



                <div
                    className="pl-4 relative z-10 mx-auto h-150 w-[calc(100%-2rem)] p-0 xl:absolute xl:inset-y-4 xl:left-0 xl:m-0 xl:h-auto xl:w-[46%] xl:bg-transparent xl:[clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]"
                >

                    <MapGoogle />
                </div>
            </section>

            {/* Réseaux sociaux et liens légaux */}
            <section className="bg-[#2f2a85]">
                <div className="flex w-full flex-col items-center justify-between gap-6 p-5 px-6 md:flex-row">
                    <div className="flex flex-wrap items-center justify-center gap-2 text-center font-medium sm:gap-6 md:justify-end">
                        {liensdroits.map((lien) => (
                            <Link key={lien.id} to={lien.url} className="OnHoverLeftBorderAppear inline-block cursor-pointer p-2 text-sm">
                                {lien.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        {liensReseaux.map((reseau) => (
                            <a
                                key={reseau.id}
                                href={reseau.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-400 hover:text-[#252b90]"
                                title={reseau.name}
                            >
                                {reseau.icon}
                            </a>
                        ))}
                    </div>

                </div>
            </section>
        </footer>
    )
}