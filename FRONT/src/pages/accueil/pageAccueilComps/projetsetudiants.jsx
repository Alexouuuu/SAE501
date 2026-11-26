import { Link, useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import CircularGallery from "../../../composants/carrousel/CircularGallery";


import p1 from "../../../images/paccueil/petudiants/lecube.webp"
import p2 from "../../../images/paccueil/petudiants/adamP.webp"
import p3 from "../../../images/paccueil/petudiants/globe.png"
import p4 from "../../../images/placeholder.webp"

const projetsListe = [
    {
        titre: "Le Cube",
        img: p1,
        alt: "Webdocumentaire : Le Cube",
        liens: "https://mloks77.github.io/SAE302-LeCube/",
    },
    {
        titre: "Adam Gosmat : Portfolio",
        img: p2,
        alt: "Portfolio d'un étudiant",
        liens: "https://adamgosmat.com/",
    },
    {
        titre: "Globe collaboratif 3D",
        img: p3,
        alt: "Site web collaboratif : Objets 3D de pays du monde",
        liens: "https://globemmi2.netlify.app/",
    },
    {
        titre: "PROJET 4",
        img: p4,
        alt: "Illustration d’un projet de programmation",
        liens: "https://iut.univ-gustave-eiffel.fr",
    },
];

export default function ProjetsEtudiants() {
    const navigate = useNavigate();

    const ouvrirProjet = (projet) => {
        if (!projet.liens) return;

        if (/^https?:\/\//i.test(projet.liens)) {
            window.open(projet.liens, "_blank", "noopener,noreferrer");
            return;
        }

        navigate(projet.liens);
    };

    return (
        <section
            className="bg-[#2f2a85] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10">
                    <div>
                        <h2
                            className="text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            Des projets étudiants
                        </h2>
                        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    </div>
                    <Link
                        to="/MMI/projets"
                        className="group flex w-fit items-center gap-3 bg-white px-5 py-3 font-semibold text-[#2f2a85] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Voir tous les projets
                        <FaLocationArrow aria-hidden="true" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                </header>

                <div style={{ height: '600px', position: 'relative' }}>
                    <CircularGallery
                        items={projetsListe.map((projet) => ({
                            image: projet.img,
                            text: projet.titre,
                            description: projet.alt,
                            liens: projet.liens,
                        }))}
                        bend={0}
                        textColor="#ffffff"
                        borderRadius={0.02}
                        scrollEase={0.10}
                        onItemClick={ouvrirProjet}
                        itemSize={1.2}
                        itemAspect={0.92}
                        gap={0.12}
                        wave={0}
                        fadeEdges={0.2}
                        shadow={0.25}
                        scrollSpeed={2}
                        autoScroll={0.9}
                        snap
                        grayscale={false}
                        showTitles
                        openOnClick={false}
                        intro
                    />
                </div>
            </div>
        </section>
    )
}