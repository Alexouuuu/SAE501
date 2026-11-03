import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaCode,
    FaCube,
    FaGraduationCap,
    FaPalette,
} from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import TitreProps from "../../composants/titreProps";

const domaines = [
    {
        titre: "Développement web",
        description:
            "Imaginez et développez des sites et des applications : interface, intégration, programmation et expérience utilisateur.",
        icon: <FaCode />,
        media: "Emplacement image — projet de développement web",
    },
    {
        titre: "Graphisme et design",
        description:
            "Explorez la typographie, la composition et la création visuelle pour concevoir des identités et des supports numériques.",
        icon: <FaPalette />,
        media: "Emplacement image — création graphique",
    },
    {
        titre: "Audiovisuel",
        description:
            "De l’idée au montage, découvrez les étapes de la production vidéo, de la prise de vue et du travail du son.",
        icon: <MdOutlineVideoLibrary />,
        media: "Emplacement image — tournage ou montage vidéo",
    },
    {
        titre: "Création 3D",
        description:
            "Donnez forme à vos idées avec la modélisation, la mise en scène et la création d’univers en trois dimensions.",
        icon: <FaCube />,
        media: "Emplacement image — réalisation 3D",
    },
];

const annees = [
    {
        numero: "01",
        titre: "Découvrir les fondamentaux",
        texte: "Expérimentez les différents domaines du multimédia et de l’internet, apprenez à travailler en équipe et réalisez vos premiers projets.",
    },
    {
        numero: "02",
        titre: "Approfondir ses compétences",
        texte: "Développez votre méthode et vos savoir-faire à travers des projets plus ambitieux, en fonction des enseignements proposés.",
    },
    {
        numero: "03",
        titre: "Construire son projet",
        texte: "Affirmez votre profil et préparez votre insertion professionnelle ou une poursuite d’études, selon le parcours suivi.",
    },
];

function EmplacementImage({ description, className = "" }) {
    return (
        <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
            <img
                src="/images/placeholder.png"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/65 px-4 py-3 text-xs font-medium text-white sm:text-sm">
                {description}
            </span>
        </div>
    );
}

export default function Formation() {
    return (
        <section className="text-gray-900">
            <TitreProps titre="BUT MMI - La formation" />

            <header className="bg-[#212684] text-white">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                            Métiers du multimédia et de l’internet
                        </p>
                        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
                            BUT MMI
                            <span className="mt-2 block text-2xl font-medium text-white sm:text-3xl">
                                Créez, développez, racontez.
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-100 sm:text-lg">
                            Une formation pluridisciplinaire pour imaginer et réaliser
                            des projets numériques : du développement web au design,
                            de l’audiovisuel à la création 3D.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#formation"
                                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#212684] transition hover:bg-gray-200"
                                style={{ color: "#212684" }}
                            >
                                Découvrir la formation <FaArrowRight aria-hidden="true" />
                            </a>
                            <Link
                                to="/visite-virtuelle"
                                className="inline-flex min-h-12 items-center rounded-md border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                            >
                                Visiter le bâtiment
                            </Link>
                        </div>
                    </div>
                    <EmplacementImage
                        description="Emplacement image — étudiants et projets MMI"
                        className="aspect-[4/3] rounded-xl border border-white/20 shadow-2xl"
                    />
                </div>

            </header>

            <section id="formation" className="scroll-mt-8 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#212684]">
                            Une formation créative et technique
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Des idées aux projets numériques
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600">
                            Le BUT MMI associe communication, design et technologies
                            numériques. Les étudiants apprennent à comprendre un besoin,
                            concevoir une réponse et la réaliser en mobilisant plusieurs
                            compétences.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {domaines.map((domaine) => (
                            <article
                                key={domaine.titre}
                                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                            >
                                <EmplacementImage
                                    description={domaine.media}
                                    className="aspect-[16/10]"
                                />
                                <div className="p-5">
                                    <span
                                        className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-xl text-[#212684]"
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
            <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#212684]">
                            À découvrir en images
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            La formation en vidéo
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600">
                            Présentez ici les projets étudiants, les ateliers et la vie
                            de la formation. Cet emplacement pourra accueillir une vidéo
                            dès qu’un fichier ou un lien de diffusion sera disponible.
                        </p>
                    </div>
                    <iframe
                        className="mt-5 aspect-video w-full rounded-xl"
                        src="https://www.youtube.com/embed/CfbjPIsLt-M"
                        title="Vidéo de présentation de la formation MMI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#212684]">
                            Un parcours en trois étapes
                        </p>
                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Trois années pour progresser
                        </h2>
                        <p className="mt-5 leading-7 text-gray-600">
                            Le BUT se prépare en trois ans après le baccalauréat et
                            permet d’obtenir un diplôme national de niveau bac+3. Les
                            enseignements et les possibilités de parcours sont à
                            consulter auprès de l’établissement.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {annees.map((annee) => (
                            <article
                                key={annee.numero}
                                className="rounded-xl border border-gray-200 p-6 sm:p-7"
                            >
                                <p className="text-sm font-bold tracking-widest text-[#212684]">
                                    ANNÉE {annee.numero}
                                </p>
                                <h3 className="mt-4 text-xl font-bold">{annee.titre}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {annee.texte}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                    <article>
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-[#212684] shadow-sm">
                            <FaGraduationCap aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-3xl font-bold">Comment candidater ?</h2>
                        <p className="mt-4 leading-7 text-gray-600">
                            Le BUT MMI est une formation post-bac. Les candidatures
                            passent par Parcoursup ; les profils issus des baccalauréats
                            généraux ou technologiques peuvent candidater. Consultez la
                            fiche de la formation pour connaître les attendus et les
                            modalités de sélection à jour.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600">
                            La curiosité pour le numérique, l’envie de créer et la
                            capacité à travailler en équipe sont de bons points de
                            départ. Il n’est pas nécessaire de maîtriser tous les
                            outils avant d’entrer en formation.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-3xl font-bold">Après le BUT</h2>
                        <p className="mt-4 leading-7 text-gray-600">
                            Selon ses compétences et son projet, un diplômé peut
                            s’orienter vers des métiers du développement web, du design
                            numérique, de la communication, de l’audiovisuel ou de la
                            création multimédia.
                        </p>
                        <p className="mt-4 leading-7 text-gray-600">
                            Une poursuite d’études est également possible, par exemple
                            en master ou dans une école spécialisée. Les choix
                            dépendent du parcours suivi, du dossier et du projet de
                            chacun.
                        </p>
                    </article>
                </div>
            </section>

            <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
                    <article className="flex min-w-0 flex-col items-start overflow-hidden rounded-2xl bg-[#212684] p-10 text-white sm:p-12 lg:p-14">
                        <p className="max-w-full text-sm font-semibold uppercase tracking-[0.12em] text-white sm:tracking-[0.16em]">
                            Envie de découvrir les lieux ?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold">Visitez le bâtiment</h2>
                        <p className="mt-3 flex-1 leading-7 text-gray-100">
                            Explorez la visite virtuelle et découvrez les espaces de
                            l’établissement.
                        </p>
                        <Link
                            to="/visite-virtuelle"
                            className="mt-6 inline-flex items-center gap-2 font-semibold underline decoration-gray-300 underline-offset-4 hover:text-gray-200"
                        >
                            Accéder à la visite virtuelle{" "}
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                    </article>

                    <article className="flex min-w-0 flex-col items-start overflow-hidden rounded-2xl border border-gray-200 p-10 sm:p-12 lg:p-14">
                        <p className="max-w-full text-sm font-semibold uppercase tracking-[0.12em] text-[#212684] sm:tracking-[0.16em]">
                            Une question sur la formation ?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold">Parlons-en</h2>
                        <p className="mt-3 flex-1 leading-7 text-gray-600">
                            Pour les renseignements pratiques, le lieu et les contacts,
                            consultez la page de contact de l’établissement.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#212684] underline decoration-[#212684] underline-offset-4 hover:text-[#161b7d]"
                        >
                            Accéder aux informations de contact{" "}
                            <FaArrowRight aria-hidden="true" />
                        </Link>
                    </article>
                </div>
            </section>
        </section>
    );
}
