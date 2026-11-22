import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import { Link } from "react-router-dom";

// idEvenement, titre, debut, fin, description, salle, CapaciteMax, nbrInscrits

const nbrInscrits = 10

const Evenement = [
    {
        idEvenement: 1,
        titre: "Ouverture de la JPO",
        debut: 16,
        fin: 20,
        salle: "B1",
        CapaciteMax: 30
    },
    {
        idEvenement: 2,
        titre: "Démonstration des projets",
        debut: 16,
        fin: 20,
        salle: "B2",
        CapaciteMax: 30
    },
    {
        idEvenement: 3,
        titre: "Ateliers MMI",
        debut: 16,
        fin: 20,
        salle: "B3",
        CapaciteMax: 30
    },
]

export default function JPOPlanning() {
    // Présentation statique du programme JPO
    return (
        <section>
            <TitreProps titre="Programme de la JPO" />
            <BannerHead />
            <Filarial titrePage="Programme de la JPO" />
            <div className="bg-[#212684] text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Journée portes ouvertes</p>
                        <h1 className="mt-3 text-3xl font-bold">Programme en préparation</h1>
                        <p className="mt-3 max-w-2xl leading-7 text-blue-50">
                            Le programme détaillé de la journée portes ouvertes sera bientôt publié.
                        </p>
                    </div>
                    <aside className="rounded-xl bg-white/10 p-5 md:w-80">
                        <p className="font-semibold">
                            Vous êtes inscrit à {nbrInscrits} {nbrInscrits === 1 ? "événement" : "événements"}.
                        </p>
                        <p className="mt-1 text-sm leading-6 text-blue-100">
                            Retrouvez la liste complète sur votre espace.
                        </p>
                        <Link
                            to="/mon-espace"
                            className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#212684] transition-colors hover:bg-blue-50"
                        >
                            Accéder à mon espace
                        </Link>
                    </aside>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                <div className="grid gap-8">
                    <div>
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold text-gray-900">Activités proposées</h2>
                            <p className="mt-1 text-gray-600">Découvrez les activités proposées pendant la journée.</p>
                        </div>
                        <div className="grid gap-5 grid-cols-3">
                            {Evenement.map((evenement) => (
                                <Link
                                    key={evenement.idEvenement}
                                    to={`/planning-jpo/${evenement.idEvenement}`}
                                    className="group flex h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:border-[#3c3792]/30 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3c3792]"
                                >
                                    <div aria-hidden="true" className="relative w-14 shrink-0 overflow-hidden bg-[#212684] transition-colors group-hover:bg-[#3c3792] sm:w-16">
                                        <span
                                            className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-60"
                                            style={{
                                                backgroundImage: "url('/images/pattern2.webp')",
                                                backgroundSize: "240px auto",
                                            }}
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1 p-5">
                                        <p className="text-sm font-medium text-gray-500">
                                            {evenement.debut} h - {evenement.fin} h
                                        </p>
                                        <h3 className="mt-1 text-lg font-bold text-gray-900">{evenement.titre}</h3>
                                        <dl className="mt-4 space-y-2 text-sm">
                                            <div className="flex flex-wrap gap-x-2">
                                                <dt className="text-gray-500">Salle</dt>
                                                <dd className="font-medium text-gray-900">{evenement.salle}</dd>
                                            </div>
                                            <div className="flex flex-wrap gap-x-2">
                                                <dt className="text-gray-500">Capacité maximale</dt>
                                                <dd className="font-semibold text-gray-900">{evenement.CapaciteMax} personnes</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/*rajouter une pagination*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
