import { FaBuilding, FaUsers, FaLaptopCode, FaComments } from "react-icons/fa";
import illustration from "../../../images/svg/jpo.svg";

const raisons = [
    {
        icon: FaBuilding,
        titre: "Visiter les locaux",
        texte: "Salles, studios et matériel du BUT.",
    },
    {
        icon: FaUsers,
        titre: "Rencontrer l'équipe",
        texte: "Échangez avec profs et étudiants.",
    },
    {
        icon: FaLaptopCode,
        titre: "Découvrir les projets",
        texte: "Web, vidéo, design : du concret.",
    },
    {
        icon: FaComments,
        titre: "Poser vos questions",
        texte: "Parcoursup, alternance, débouchés.",
    },
];

export default function JPOexplications() {
    return (
        <section className="w-full bg-[#2f2a85] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/90 sm:text-sm">
                        JPO 2026
                    </span>
                    <h2 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Pourquoi participer ?
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <img src={illustration} alt="question" className="mt-8 w-full max-w-md" />
                </div>

                <ul>
                    {raisons.map(({ icon: Icon, titre, texte }) => (
                        <li
                            key={titre}
                            className="flex items-start gap-5 border-t border-white/30 py-6 first:border-t-0 first:pt-0 last:pb-0"
                        >
                            <Icon aria-hidden="true" className="mt-1.5 h-6 w-6 shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{titre}</h3>
                                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg">{texte}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
