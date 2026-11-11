import { FaGraduationCap } from "react-icons/fa6";

export default function OrientationFormation() {
    return (
        <section className="bg-[#2f2a85] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
                <article>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-2xl shadow-sm">
                        <FaGraduationCap aria-hidden="true" color="#2f2a85" />
                    </span>
                    <h2 className="mt-5 text-3xl font-bold text-white">Comment candidater ?</h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <p className="mt-4 leading-7 text-white">
                        Le BUT MMI est une formation <strong>post-bac</strong>. Les candidatures
                        passent par <strong>Parcoursup</strong> ; les profils issus des baccalauréats
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
                        s’orienter vers des métiers du <strong>développement web</strong>, du{" "}
                        <strong>design numérique</strong>, de la <strong>communication</strong>,
                        de l’<strong>audiovisuel</strong> ou de la <strong>création multimédia</strong>.
                    </p>
                    <p className="mt-4 leading-7 text-white">
                        Une <strong>poursuite d’études</strong> est également possible, par exemple
                        en <strong>master</strong> ou dans une <strong>école spécialisée</strong>. Les choix
                        dépendent du parcours suivi, du dossier et du projet de
                        chacun.
                    </p>
                </article>
            </div>
        </section>
    );
}