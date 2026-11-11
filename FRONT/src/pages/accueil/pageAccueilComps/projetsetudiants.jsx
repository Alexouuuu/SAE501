import { FaLink } from "react-icons/fa";

const projetsListegauche = [
    {
        id: 1,
        titre: "1",
        img: "/images/placeholder.webp",
        alt: "Illustration de la spécialité audiovisuelle",
        liens: "",
    },
    {
        id: 2,
        titre: "2",
        img: "/images/placeholder.webp",
        alt: "Illustration de la création graphique",
        liens: "",
    },
];

const projetsListedroite = [
    {
        id: 1,
        titre: "3",
        img: "/images/placeholder.webp",
        alt: "Illustration du développement web",
        liens: "test",
    },
    {
        id: 2,
        titre: "4",
        img: "/images/placeholder.webp",
        alt: "Illustration d’un projet de programmation",
        liens: "test",
    },
]

export default function projetsEtudiants() {
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

                <div className="grid items-start gap-5 md:grid-cols-2 md:gap-8">
                    {[projetsListegauche, projetsListedroite].map((liste, colonne) => (
                        <div
                            key={colonne}
                            className={`flex flex-col gap-5 ${colonne === 1 ? "md:pt-16" : ""}`}
                        >
                            {liste.map((projet) => (
                                <article
                                    key={projet.id}
                                    className="relative isolate overflow-hidden bg-white text-black transition duration-200 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <img
                                        src={projet.img}
                                        alt={projet.alt}
                                        loading="lazy"
                                        className="aspect-4/3 w-full object-cover"
                                    />
                                    <h3 className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-md bg-black/20 p-2 text-md font-bold text-white backdrop-blur-sm sm:text-lg">
                                        {projet.titre}
                                    </h3>
                                    <a
                                        href={projet.liens || undefined}    
                                        aria-disabled={!projet.liens}
                                        tabIndex={projet.liens ? undefined : -1}
                                        target={projet.liens ? "_blank" : undefined}
                                        className={`absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-md bg-[#2f2a85] text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${projet.liens ? "" : "cursor-not-allowed opacity-60"}`}
                                    >
                                        <FaLink aria-hidden="true" />
                                    </a>
                                </article>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}