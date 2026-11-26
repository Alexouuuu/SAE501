// Section fusionnée de l'accueil : projets étudiants + actualités.
// Les projets sont des sites web : chacun est présenté dans une fenêtre de navigateur
// qui affiche sa vraie adresse. Les actualités forment une liste datée, à côté.

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import imgLeCube from "../../../images/paccueil/petudiants/lecube.webp";
import imgPortfolio from "../../../images/paccueil/petudiants/adamP.webp";
import imgGlobe from "../../../images/paccueil/petudiants/globe.webp";

// Remplacer par les vrais projets 
const projets = [
    {
        id: 1,
        titre: "Le Cube",
        type: "Webdocumentaire",
        img: imgLeCube,
        url: "https://mloks77.github.io/SAE302-LeCube/",
    },
    {
        id: 2,
        titre: "Adam Gosmat",
        type: "Portfolio",
        img: imgPortfolio,
        url: "https://adamgosmat.com/",
    },
    {
        id: 3,
        titre: "Globe collaboratif 3D",
        type: "Site collaboratif",
        img: imgGlobe,
        url: "https://globemmi2.netlify.app/",
    },
];

// Remplacer par les vraies actualités
const articles = [
    {
        idArticle: 1,
        titre: "Journée portes ouvertes",
        contenu: "Venez découvrir le BUT MMI et rencontrer les étudiants et enseignants.",
        datePublication: "2026-12-15",
    },
    {
        idArticle: 2,
        titre: "Projet tutoré de jeu vidéo",
        contenu: "Les étudiants de 3e année présentent leur nouveau projet.",
        datePublication: "2026-12-02",
    },
    {
        idArticle: 3,
        titre: "Nuit de l'Info",
        contenu: "12 heures pour concevoir une application web en équipe.",
        datePublication: "2026-11-20",
    },
];

const UN_JOUR = 24 * 60 * 60 * 1000;

// "2026-12-15" -> date locale à minuit (évite le décalage UTC)
function lireDate(texte) {
    const [annee, mois, jour] = texte.split("-").map(Number);
    return new Date(annee, mois - 1, jour);
}

const formaterDate = (date) =>
    date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

function delaiAvant(jours) {
    if (jours === 0) return "Aujourd'hui";
    if (jours === 1) return "Demain";
    return `Dans ${jours} jours`;
}

// Adresse affichée dans la barre du navigateur : sans protocole ni slash final
const adresseLisible = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const focusClair = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function FenetreProjet({ projet, grand = false }) {
    return (
        <a
            href={projet.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col overflow-hidden rounded-lg bg-white text-mmi-texte ${focusClair}`}
        >
            {/* Barre d'adresse : la vraie URL du projet */}
            <div aria-hidden="true" className={`bg-mmi-bleu-pale ${grand ? "px-3.5 py-2.5" : "px-3 py-2"}`}>
                <div className={`flex items-center gap-2 truncate rounded-full bg-white text-mmi-texte-doux ${grand ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs"}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    <span className="truncate">{adresseLisible(projet.url)}</span>
                </div>
            </div>
            <img
                src={projet.img}
                alt=""
                loading="lazy"
                className={`w-full object-cover ${grand ? "aspect-16/10" : "aspect-16/8"}`}
            />
            <div className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 ${grand ? "px-5 py-4" : "px-4 py-3"}`}>
                <span className={`font-bold underline decoration-transparent decoration-2 underline-offset-4 transition-colors group-hover:decoration-mmi-vert motion-reduce:transition-none ${grand ? "text-xl" : "text-base"}`}>
                    {projet.titre}
                </span>
                <span className="text-sm text-mmi-texte-doux">{projet.type}</span>
            </div>
            <span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
        </a>
    );
}

export default function ProjetsActualites() {
    const grilleRef = useRef(null);
    const colonneActusRef = useRef(null);

    // Grand écran : la colonne actualités reste à l'écran pendant qu'on fait défiler les projets.
    // (position: sticky ne fonctionne pas sous ScrollSmoother, d'où l'épinglage ScrollTrigger)
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            const colonne = colonneActusRef.current;
            ScrollTrigger.create({
                trigger: colonne,
                start: "top top+=32",
                endTrigger: grilleRef.current,
                end: () => `bottom top+=${32 + colonne.offsetHeight}`,
                pin: true,
                pinSpacing: false,
                invalidateOnRefresh: true,
            });
        });
        return () => mm.revert();
    }, []);

    const aujourdHui = new Date();
    aujourdHui.setHours(0, 0, 0, 0);

    const datees = articles.map((article) => {
        const date = lireDate(article.datePublication);
        return { ...article, date, jours: Math.round((date - aujourdHui) / UN_JOUR) };
    });
    // À venir d'abord, du plus proche au plus lointain, puis le passé du plus récent au plus ancien
    const actus = [
        ...datees.filter((a) => a.jours >= 0).sort((a, b) => a.date - b.date),
        ...datees.filter((a) => a.jours < 0).sort((a, b) => b.date - a.date),
    ];

    const [projetVedette, ...autresProjets] = projets;

    return (
        <section aria-labelledby="projets-actus-titre" className="bg-mmi-bleu-profond px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <header>
                    <h2 id="projets-actus-titre" className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Projets et actualités
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <p className="mt-5 max-w-xl leading-7 text-white/80 sm:text-lg">
                        Des sites conçus par les étudiants, et ce qui se passe au BUT MMI de Meaux.
                    </p>
                </header>

                <div ref={grilleRef} className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
                    {/* Projets */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-lg font-bold">Projets étudiants</h3>
                            <Link
                                to="/MMI/projets"
                                className={`group flex min-h-11 w-fit items-center gap-2 bg-white px-4 py-2 text-sm font-semibold text-mmi-bleu-profond transition-colors hover:bg-white/90 ${focusClair}`}
                            >
                                Voir tous les projets
                                <FaLocationArrow aria-hidden="true" className="mt-0.5 text-xs transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none" />
                            </Link>
                        </div>
                        <FenetreProjet projet={projetVedette} grand />
                        <div className="grid gap-5 sm:grid-cols-2">
                            {autresProjets.map((projet) => (
                                <FenetreProjet key={projet.id} projet={projet} />
                            ))}
                        </div>
                    </div>

                    {/* Actualités : en premier sur mobile (la JPO reste visible), épinglée sur grand écran */}
                    <div ref={colonneActusRef} className="order-first flex flex-col gap-5 lg:order-0">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-lg font-bold">Actualités</h3>
                            <Link
                                to="/MMI/actus"
                                className={`group flex min-h-11 w-fit items-center gap-2 border-2 border-white px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-mmi-bleu-profond ${focusClair}`}
                            >
                                Toutes les actualités
                                <FaLocationArrow aria-hidden="true" className="mt-0.5 text-xs transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none" />
                            </Link>
                        </div>
                        <ol className="border-b border-white/25">
                            {actus.map((article, index) => {
                                const aVenir = article.jours >= 0;
                                return (
                                    <li key={article.idArticle} className="flex flex-col gap-1.5 border-t border-white/25 py-5">
                                        <p className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                                            <time dateTime={article.datePublication} className={aVenir ? "text-white" : "text-white/80"}>
                                                {formaterDate(article.date)}
                                            </time>
                                            {aVenir && (
                                                <span className="rounded-full bg-mmi-vert-clair px-2.5 py-0.5 text-xs font-bold text-mmi-texte">
                                                    {delaiAvant(article.jours)}
                                                </span>
                                            )}
                                        </p>
                                        <Link
                                            to={`/MMI/actus/${article.idArticle}`}
                                            className={`w-fit font-bold leading-snug underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-mmi-vert-clair motion-reduce:transition-none ${focusClair} ${index === 0 && aVenir ? "text-xl" : "text-lg"}`}
                                        >
                                            {article.titre}
                                        </Link>
                                        <p className="leading-relaxed text-white/80">{article.contenu}</p>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
