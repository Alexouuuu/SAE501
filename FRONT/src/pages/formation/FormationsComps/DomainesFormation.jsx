import { useId, useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const parcours = [
    {
        titre: "Développement web et dispositifs interactifs",
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
            "Monteur vidéo",
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
            "Designer/euse d'interaction",
        ],
        lien: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-du-multimedia-et-de-l-internet-parcours-strategie-de-communication-numerique-et-design-d-experience",
    },

];

export default function DomainesFormation() {
    const [parcoursActif, setParcoursActif] = useState(0);
    const id = useId();
    const ongletsRef = useRef([]);
    const parcoursSelectionne = parcours[parcoursActif];

    const gererNavigationOnglets = (event, index) => {
        let nouvelIndex;

        if (event.key === "ArrowRight") {
            nouvelIndex = (index + 1) % parcours.length;
        } else if (event.key === "ArrowLeft") {
            nouvelIndex = (index - 1 + parcours.length) % parcours.length;
        } else if (event.key === "Home") {
            nouvelIndex = 0;
        } else if (event.key === "End") {
            nouvelIndex = parcours.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        setParcoursActif(nouvelIndex);
        ongletsRef.current[nouvelIndex]?.focus();
    };

    return (
        <section className="scroll-mt-8 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <header className="max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a85]">
                        Le BUT MMI et ses spécialisations
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                        Trois parcours pour façonner vos études.
                    </h2>
                    <p className="mt-6 text-lg text-black">
                        Le BUT MMI propose trois parcours distincts. A l'Université de Meaux, <span className="underline decoration-[#2f2a85] font-bold">le parcours Développement web et dispositifs interactifs est le seul parcours proposé</span>.
                    </p>
                </header>

                <div
                    className="mt-8 grid gap-4 rounded-tl-2xl rounded-tr-2xl bg-gray-100 p-4 sm:grid-cols-3"
                    role="tablist"
                    aria-label="Parcours du BUT MMI"
                >
                    {parcours.map((item, index) => (
                        <button
                            key={item.titre}
                            ref={(element) => {
                                ongletsRef.current[index] = element;
                            }}
                            id={`${id}-tab-${index}`}
                            type="button"
                            role="tab"
                            aria-selected={parcoursActif === index}
                            aria-controls={`${id}-panel`}
                            tabIndex={parcoursActif === index ? 0 : -1}
                            onClick={() => setParcoursActif(index)}
                            onKeyDown={(event) => gererNavigationOnglets(event, index)}
                            className={`text-center min-h-14 rounded-xl px-4 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f2a85] sm:text-base ${parcoursActif === index
                                ? "bg-[#2f2a85] text-white shadow-sm"
                                : "cursor-pointer  text-black bg-gray-200 hover:bg-white hover:text-[#2f2a85]"
                                }`}
                        >
                            {item.titre}
                        </button>
                    ))}
                </div>

                <article
                    id={`${id}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-${parcoursActif}`}
                    tabIndex={0}
                    className="grid overflow-hidden rounded-b-2xl border border-t-0 border-gray-200 bg-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85] md:grid-cols-2"
                >
                    <div className="flex flex-col items-start p-6 sm:p-8 lg:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#2f2a85]">
                            Le parcours
                        </p>
                        <h3 className="mt-2 text-pretty text-xl font-extrabold leading-snug text-gray-900 sm:text-2xl">
                            {parcoursSelectionne.titre}
                        </h3>
                        <p className="mt-4 leading-7 text-gray-600">
                            {parcoursSelectionne.objectif}
                        </p>
                        <a
                            href={parcoursSelectionne.lien}
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                        >
                            En savoir plus sur Onisep
                            <FaLocationArrow
                                aria-hidden="true"
                                className="transform mt-1 transition-transform duration-300 group-hover:rotate-45"
                            />
                        </a>
                    </div>

                    <div className="grid content-center gap-7 bg-gray-50 p-6 sm:p-8 lg:p-10">
                        <div>
                            <h4 className="font-bold text-gray-900">Compétences clés</h4>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                                {parcoursSelectionne.competences.map((competence) => (
                                    <li key={competence} className="flex gap-2">
                                        <span aria-hidden="true" className="font-bold text-[#2f2a85]">•</span>
                                        {competence}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">Exemples de débouchés</h4>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-600">
                                {parcoursSelectionne.debouches.map((debouche) => (
                                    <li key={debouche} className="flex gap-2">
                                        <span aria-hidden="true" className="font-bold text-[#2f2a85]">•</span>
                                        {debouche}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
