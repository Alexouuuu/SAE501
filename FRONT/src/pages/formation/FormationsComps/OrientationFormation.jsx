// Le point marque le début d'une étape sur la ligne (verticale sur mobile, horizontale sur grand écran).
function Etape({ titre, children }) {
    return (
        <li className="relative border-l-4 border-white pb-12 pl-7 last:border-transparent last:pb-0 lg:border-l-0 lg:border-t-4 lg:border-white lg:pb-0 lg:pl-0 lg:pr-10 lg:pt-8 lg:last:border-white lg:last:pr-0">
            <span
                aria-hidden="true"
                className="absolute -left-3 top-0.5 h-5 w-5 rounded-full border-4 border-white bg-[#2f2a85] lg:-top-3 lg:left-0"
            />
            <h3 className="text-2xl font-bold leading-tight">{titre}</h3>
            {children}
        </li>
    );
}

export default function OrientationFormation() {
    return (
        <section className="bg-[#2f2a85] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-balance text-3xl font-bold sm:text-4xl">De Parcoursup à l’après-BUT</h2>

                <ol className="mt-10 grid lg:mt-14 lg:grid-cols-[5fr_3fr_5fr]">
                    <Etape titre="Candidater">
                        <p className="mt-4 text-lg leading-7">
                            Les candidatures passent par <strong>Parcoursup</strong>. Les profils issus des
                            baccalauréats généraux ou technologiques peuvent candidater. Consultez la fiche
                            de la formation pour connaître les attendus et les modalités de sélection à jour.
                        </p>
                        <p className="mt-4 text-lg leading-7">
                            La curiosité pour le numérique, l’envie de créer et la capacité à travailler en
                            équipe sont de bons points de départ. Il n’est pas nécessaire de maîtriser tous
                            les outils avant d’entrer en formation.
                        </p>
                    </Etape>

                    <Etape titre="Se former">
                        <p className="mt-4 text-lg leading-7">
                            Le BUT MMI est une formation <strong>post-bac</strong> d’une durée de 3 ans.
                        </p>
                        <ul className="mt-5 flex gap-2 lg:flex-col lg:items-start">
                            {["BUT 1", "BUT 2", "BUT 3"].map((annee) => (
                                <li key={annee} className="rounded-full border-2 border-white px-4 py-1 font-bold">
                                    {annee}
                                </li>
                            ))}
                        </ul>
                    </Etape>

                    <Etape titre="Après le BUT">
                        <p className="mt-4 text-lg leading-7">
                            Deux directions possibles, selon le parcours suivi, le dossier et le projet de chacun.
                        </p>

                        {/* La ligne se sépare en deux branches. */}
                        <ul className="mt-5">
                            <li className="relative pb-6 pl-8 before:absolute before:left-0 before:top-2.5 before:w-5 before:border-t-4 before:border-white after:absolute after:bottom-0 after:left-0 after:top-0 after:border-l-4 after:border-white">
                                <h4 className="text-xl font-bold leading-6">Travailler</h4>
                                <p className="mt-2 text-lg leading-7">
                                    Vers des métiers du <strong>développement web</strong>, du{" "}
                                    <strong>design numérique</strong>, de la <strong>communication</strong>, de
                                    l’<strong>audiovisuel</strong> ou de la <strong>création multimédia</strong>.
                                </p>
                            </li>
                            <li className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-4 before:w-5 before:rounded-bl-xl before:border-b-4 before:border-l-4 before:border-white">
                                <h4 className="text-xl font-bold leading-6">Poursuivre ses études</h4>
                                <p className="mt-2 text-lg leading-7">
                                    Par exemple en <strong>master</strong> ou dans une{" "}
                                    <strong>école spécialisée</strong>.
                                </p>
                            </li>
                        </ul>
                    </Etape>
                </ol>
            </div>
        </section>
    );
}
