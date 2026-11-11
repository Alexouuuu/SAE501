import { useNavigate } from "react-router-dom";
import CircularGallery from "../../../composants/carrousel/CircularGallery";

const projetsListe = [
    {
        titre: "PROJET 1",
        img: "/images/IUT.webp",
        alt: "Illustration de la spécialité audiovisuelle",
        liens: "https://iut.univ-gustave-eiffel.fr",
    },
    {
        titre: "PROJET 2",
        img: "/images/IUT.webp",
        alt: "Illustration de la création graphique",
        liens: "https://iut.univ-gustave-eiffel.fr",
    },
    {
        titre: "PROJET 3",
        img: "/images/IUT.webp",
        alt: "Illustration du développement web",
        liens: "https://iut.univ-gustave-eiffel.fr",
    },
    {
        titre: "PROJET 4",
        img: "/images/IUT.webp",
        alt: "Illustration d’un projet de programmation",
        liens: "https://iut.univ-gustave-eiffel.fr",
    },
];

export default function projetsEtudiants() {
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
                <header className="mb-8 flex flex-col items-start text-right sm:mb-10">
                    <h2
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Des projets étudiants
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
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
                        autoScroll={0.6}
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