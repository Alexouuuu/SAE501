import { FaBuilding, FaUsers, FaLaptopCode, FaComments } from "react-icons/fa";

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
                    <p className="mt-5 max-w-md text-base leading-7 text-white/90 sm:text-lg">
                        Une demi-journée pour vivre la formation de l'intérieur et faire le bon choix.
                    </p>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2">
                    {raisons.map(({ icon: Icon, titre, texte }, index) => (
                        <li
                            key={titre}
                            className="group relative flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute right-5 top-4 text-3xl font-extrabold text-white/15"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2f2a85] transition duration-300 group-hover:scale-110">
                                <Icon aria-hidden="true" className="h-6 w-6" />
                            </span>
                            <div>
                                <h3 className="text-lg font-bold leading-snug">{titre}</h3>
                                <p className="mt-1 text-sm leading-6 text-white/80">{texte}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
