// Étapes du parcours en trois ans
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

export default function AnneesFormation() {
    return (
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
    );
}