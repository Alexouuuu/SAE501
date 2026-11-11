import { FaCode, FaCube, FaPalette } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";

// Domaines présentés dans la formation
const domaines = [
    {
        titre: "Développement web",
        description:
            "Imaginez et développez des sites et des applications : interface, intégration, programmation et expérience utilisateur.",
        icon: <FaCode />,
    },
    {
        titre: "Graphisme et design",
        description:
            "Explorez la typographie, la composition et la création visuelle pour concevoir des identités et des supports numériques.",
        icon: <FaPalette />,
    },
    {
        titre: "Audiovisuel",
        description:
            "De l’idée au montage, découvrez les étapes de la production vidéo, de la prise de vue et du travail du son.",
        icon: <MdOutlineVideoLibrary />,
    },
    {
        titre: "Modélisation 3D",
        description:
            "Donnez forme à vos idées avec la modélisation, la mise en scène et la création d’univers en 3D.",
        icon: <FaCube />,
    },
];

export default function DomainesFormation() {
    return (
        <section id="formation" className="my-15 scroll-mt-8 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a85]">
                        Une formation créative et technique
                    </p>
                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Des idées aux projets numériques
                    </h2>
                </div>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {domaines.map((domaine) => (
                        <article
                            key={domaine.titre}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                        >
                            <div className="p-5">
                                <span
                                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-xl text-[#2f2a85]"
                                    aria-hidden="true"
                                >
                                    {domaine.icon}
                                </span>
                                <h3 className="mt-4 text-xl font-bold">{domaine.titre}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {domaine.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}