import { Link } from "react-router-dom";

import img1 from "../../../images/actualités/portes_ouvertes.webp";
import img2 from "../../../images/actualités/jeux_video.webp";
import img3 from "../../../images/actualités/nuit_de_linfo.webp";

import { FaLocationArrow } from "react-icons/fa";

// Remplace ces données par tes vraies actualités (ou par un import depuis un fichier / une API)
const articles = [
    {
        idArticle: 1,
        titre: "Journée portes ouvertes",
        contenu: "Venez découvrir le BUT MMI et rencontrer les étudiants et enseignants.",
        datePublication: "2026-12-15",
        imgUrl: img1,
    },
    {
        idArticle: 2,
        titre: "Projet tutoré de jeu vidéo",
        contenu: "Les étudiants de 3e année présentent leur nouveau projet.",
        datePublication: "2026-12-02",
        imgUrl: img2,
    },
    {
        idArticle: 3,
        titre: "Nuit de l'Info",
        contenu: "12 heures pour concevoir une application web en équipe.",
        datePublication: "2026-11-20",
        imgUrl: img3,
    },
];

const formaterDate = (date) =>
    new Date(date).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

export default function Actualites() {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <h3>
                    <span className="text-sm font-semibold uppercase tracking-widest text-[#2f2a85]">
                        Site de Meaux
                    </span>
                </h3>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2f2a85] sm:text-4xl lg:text-5xl">
                    Les actualités
                </h2>
                <p className="mt-5 max-w-3xl leading-7 text-slate-600 sm:text-lg">
                    Retrouvez les dernières nouvelles de la formation BUT MMI : Développement web
                    et dispositifs interactifs à l'Université Gustave Eiffel de Meaux.
                </p>

                <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <Link
                            key={article.idArticle}
                            to={`/actus/${article.idArticle}`}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-slate-100 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                        >
                            <div className="aspect-4/3 overflow-hidden">
                                <img
                                    src={article.imgUrl}
                                    alt={article.titre}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <span className="text-sm font-semibold text-[#2f2a85]">
                                    {formaterDate(article.datePublication)}
                                </span>
                                <h4 className="mt-2 text-xl font-bold text-slate-900">
                                    {article.titre}
                                </h4>
                                <p className="mt-2 line-clamp-3 leading-6 text-slate-600">
                                    {article.contenu}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <Link
                    to="/actus"
                    className="group mx-auto mt-10 flex w-fit items-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85] md:mx-0"
                >
                    Voir toutes les actualités
                    <FaLocationArrow color="white" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                </Link>
            </div>
        </section>
    );
}