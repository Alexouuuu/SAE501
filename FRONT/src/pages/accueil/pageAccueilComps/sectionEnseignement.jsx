import { FaCode, FaPenFancy } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";

export default function SectionEnseignements() {
    const enseign = [
        {
            id: 1,
            logo: <FaCode />,
            matiere: 'Développement et intégration web',
            description: 'Conception et réalisation de sites web et d\'applications interactives en maîtrisant les langages de programmation du web et les bonnes pratiques d\'intégration.'
        },
        {
            id: 2,
            logo: <FaPenFancy />,
            matiere: 'Création graphique et infographie',
            description: 'Apprentissage des fondamentaux du design visuel, de la charte graphique et de la création de supports de communication plurinumérique.'
        },
        {
            id: 3,
            logo: <MdOutlineVideoLibrary />,
            matiere: 'Production audiovisuelle',
            description: 'Maîtrise de la chaîne de production audiovisuelle, de l\'écriture de scénario au tournage en passant par le montage numérique et les effets visuels.'
        },
    ];

    return (
        <section className="backgroundEnseignement bg-blue-500 px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
                <article className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Les enseignements
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-white/90">
                        La formation MMI associe créativité et maîtrise des outils numériques.
                        Découvrez les grands domaines enseignés et les compétences développées
                        tout au long du parcours.
                    </p>
                </article>

                <div>
                    {enseign.map((enseignement) => (
                        <article
                            key={enseignement.id}
                            className="grid gap-5 border-b border-white/20 py-7 first:pt-0 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-center sm:gap-8"
                        >
                            <div className="flex items-center gap-5">
                                <span className="shrink-0 text-4xl" aria-hidden="true">
                                    {enseignement.logo}
                                </span>
                                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                                    {enseignement.matiere}
                                </h3>
                            </div>
                            <p className="text-sm leading-6 text-white/90 sm:text-base">
                                {enseignement.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}