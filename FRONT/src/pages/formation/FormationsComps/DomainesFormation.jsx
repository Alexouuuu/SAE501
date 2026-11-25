import { useState } from "react";
import { FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const parcours = [
    {
        titre: "Développement web et dispositifs interactifs",
        aMeaux: true,
        objectif:
            "Concevoir et développer des sites, des applications et des dispositifs numériques interactifs.",
        competences: [
            "Intégration et développement front-end et back-end",
            "Création d’applications mobiles",
            "Conception de services web et de dispositifs interactifs",
        ],
        debouches: [
            "Développeur·se web",
            "Développeur·se mobile",
            "Webmaster",
            "Intégrateur·rice de réalité virtuelle / dispositifs interactifs",
        ],
        lien: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-du-multimedia-et-de-l-internet-parcours-developpement-web-et-dispositifs-interactifs",
    },
    {
        titre: "Création numérique",
        objectif:
            "Développer une expression visuelle, sonore et graphique pour donner vie à des contenus et des univers numériques.",
        competences: [
            "Conception graphique et UX/UI design",
            "Audiovisuel, image et son",
            "Motion design et sound design",
        ],
        debouches: [
            "Graphiste ou webdesigner",
            "Motion designer",
            "Monteur·se vidéo",
            "Technicien·ne audiovisuel ou animateur·rice 2D/3D",
        ],
        lien: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-du-multimedia-et-de-l-internet-parcours-creation-numerique",
    },
    {
        titre: "Stratégie de communication numérique et design d’expérience",
        objectif:
            "Imaginer des stratégies de communication numérique et concevoir des expériences adaptées aux besoins des utilisateurs.",
        competences: [
            "Marketing digital et community management",
            "Analyse des besoins et ergonomie web",
            "Gestion et pilotage de projet",
        ],
        debouches: [
            "Chargé·e de communication digitale",
            "Community manager",
            "Chef·fe de projet digital ou UX designer",
            "Designer·euse d'interaction",
        ],
        lien: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-du-multimedia-et-de-l-internet-parcours-strategie-de-communication-numerique-et-design-d-experience",
    },

];

export default function DomainesFormation() {
    const [parcoursActif, setParcoursActif] = useState(0);

    // Le carrousel boucle : après le dernier parcours, on revient au premier.
    const changerParcours = (pas) => {
        setParcoursActif((actuel) => (actuel + pas + parcours.length) % parcours.length);
    };

    const classeFleche =
        "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#2f2a85] text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f2a85]";

    return (
        <section className="scroll-mt-8 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <header className="max-w-3xl">
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Le BUT MMI à Meaux
                    </h2>
                    <p className="mt-6 text-lg text-black">
                        Le BUT MMI compte trois parcours différents.
                    </p>
                </header>

                <div role="region" aria-roledescription="carrousel" aria-label="Parcours du BUT MMI" className="mt-8">
                    <div className="flex items-center gap-3 rounded-t-2xl bg-gray-100 p-4 sm:gap-6">
                        <button type="button" onClick={() => changerParcours(-1)} aria-label="Parcours précédent" className={classeFleche}>
                            <FaChevronLeft aria-hidden="true" />
                        </button>

                        {/* Titres superposés : les flèches ne bougent pas d’un parcours à l’autre. */}
                        <div className="grid min-w-0 flex-1 text-center" aria-live="polite">
                            {parcours.map((item, index) => (
                                <div
                                    key={item.titre}
                                    className={`col-start-1 row-start-1 self-center ${parcoursActif === index ? "" : "invisible"}`}
                                >
                                    <h3 className="text-balance text-lg font-extrabold leading-snug text-gray-900 sm:text-2xl">
                                        {item.titre}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-[#2f2a85]">
                                        {item.aMeaux ? "Proposé à Meaux" : "Non proposé à Meaux"}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button type="button" onClick={() => changerParcours(1)} aria-label="Parcours suivant" className={classeFleche}>
                            <FaChevronRight aria-hidden="true" />
                        </button>
                    </div>

                    <article className="grid overflow-hidden rounded-b-2xl border border-t-0 border-gray-200 bg-white shadow-sm">
                        {/* Les panneaux sont superposés : la hauteur reste celle du plus grand. */}
                        {parcours.map((item, index) => (
                            <div
                                key={item.titre}
                                className={`col-start-1 row-start-1 grid md:grid-cols-2 ${parcoursActif === index ? "" : "invisible"}`}
                            >
                                <div className="flex flex-col items-start p-6 sm:p-8 lg:p-10">
                                    <p className="text-lg leading-7 text-gray-600">
                                        {item.objectif}
                                    </p>
                                    <a
                                        href={item.lien}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group mx-auto mt-8 inline-flex items-center justify-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85] md:mx-0 md:mt-auto"
                                    >
                                        En savoir plus sur le site de l'Onisep
                                        <FaArrowUpRightFromSquare
                                            aria-hidden="true"
                                            className="mt-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </a>
                                </div>

                                <div className="grid content-center gap-7 bg-gray-50 p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <h4 className="font-bold text-gray-900">Compétences clés</h4>
                                        <ul className="mt-3 space-y-2 text-base leading-6 text-gray-600">
                                            {item.competences.map((competence) => (
                                                <li key={competence} className="flex gap-2">
                                                    <span aria-hidden="true" className="font-bold text-lg text-[#2f2a85]">•</span>
                                                    {competence}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Exemples de débouchés</h4>
                                        <ul className="mt-3 space-y-2 text-base leading-6 text-gray-600">
                                            {item.debouches.map((debouche) => (
                                                <li key={debouche} className="flex gap-2">
                                                    <span aria-hidden="true" className="font-bold text-lg text-[#2f2a85]">•</span>
                                                    {debouche}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </article>
                </div>
            </div>
        </section>
    );
}
