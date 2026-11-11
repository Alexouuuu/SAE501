import { FaGraduationCap } from "react-icons/fa6";

export default function OrientationFormation() {
    return (
        <section className="bg-[#2f2a85] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 my-15">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                <article>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl shadow-sm">
                        <FaGraduationCap aria-hidden="true" color="#2f2a85" />
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
    );
}