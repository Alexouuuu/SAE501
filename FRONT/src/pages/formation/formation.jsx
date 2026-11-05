import { Link } from "react-router-dom";

// icons
import {
    FaArrowRight,
    FaCode,
    FaCube,
    FaGraduationCap,
    FaPalette,
} from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";

const bg = "../images/IUT.webp"

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


export default function Formation() {
        
    // pour le scroll jusqu'a la section formation : maxime derènes
    const scrollToFormation = (event) => {
        event.preventDefault();
        const target = document.querySelector("#formation");
        if (!target) return;

        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(target, true);
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="text-gray-900">
            <TitreProps titre="BUT MMI - La formation" />


            <header className="relative isolate overflow-hidden bg-[#2f2a85] text-white">

                {/*image de fond*/}
                <img
                    src={bg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />

                <div className="absolute inset-0 -z-10 bg-[#2f2a85]/60" /> {/*filtre bleu*/}

                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <div className="max-w-2xl">
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
                                onClick={scrollToFormation}
                                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-[#2f2a85] transition hover:bg-gray-200"
                                style={{ color: "#2f2a85" }}
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
                </div>

            </header>

            <Filarial titrePage={"La formation"} />

            <section id="formation" className="scroll-mt-8 px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
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

            <section className="bg-[#2f2a85] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                            À découvrir en images
                        </p>
                        <h1 className="mt-3 text-3xl font-bold sm:text-4xl text-white">
                            La formation en vidéo
                        </h1>
                        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                        <p className="mt-5 leading-7 text-white">
                            Présentez ici les projets étudiants, les ateliers et la vie
                            de la formation. Cet emplacement pourra accueillir une vidéo
                            dès qu’un fichier ou un lien de diffusion sera disponible.
                        </p>
                    </div>
                    <iframe
                        className="aspect-video w-full rounded-xl"
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
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f2a85]">
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
                                <p className="text-sm font-bold tracking-widest text-[#2f2a85]">
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

            <section className="bg-[#2f2a85] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                    <article>
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl text-white shadow-sm">
                            <FaGraduationCap aria-hidden="true" color="#2f2a85"/>
                        </span>
                        <h2 className="mt-5 text-3xl font-bold text-white">Comment candidater ?</h2>
                        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                        <p className="mt-4 leading-7 text-white">
                            Le BUT MMI est une formation post-bac. Les candidatures
                            passent par Parcoursup ; les profils issus des baccalauréats
                            généraux ou technologiques peuvent candidater. Consultez la
                            fiche de la formation pour connaître les attendus et les
                            modalités de sélection à jour.
                        </p>
                        <p className="mt-4 leading-7 text-white">
                            La curiosité pour le numérique, l’envie de créer et la
                            capacité à travailler en équipe sont de bons points de
                            départ. Il n’est pas nécessaire de maîtriser tous les
                            outils avant d’entrer en formation.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-3xl font-bold text-white">Après le BUT</h2>
                        <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                        <p className="mt-4 leading-7 text-white">
                            Selon ses compétences et son projet, un diplômé peut
                            s’orienter vers des métiers du développement web, du design
                            numérique, de la communication, de l’audiovisuel ou de la
                            création multimédia.
                        </p>
                        <p className="mt-4 leading-7 text-white">
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
                    <article className="flex min-w-0 flex-col items-start overflow-hidden rounded-2xl bg-[#2f2a85] p-10 text-white sm:p-12 lg:p-14">
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
                        <p className="max-w-full text-sm font-semibold uppercase tracking-[0.12em] text-[#2f2a85] sm:tracking-[0.16em]">
                            Une question sur la formation ?
                        </p>
                        <h2 className="mt-3 text-2xl font-bold">Parlons-en</h2>
                        <p className="mt-3 flex-1 leading-7 text-gray-600">
                            Pour les renseignements pratiques, le lieu et les contacts,
                            consultez la page de contact de l’établissement.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2f2a85] underline decoration-[#2f2a85] hover:decoration-[#0097d7] underline-offset-4 hover:text-[#0097d7]"
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
