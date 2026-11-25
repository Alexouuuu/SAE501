import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import { Link } from "react-router-dom";
import "./JPO.css";
import { Evenement } from "./evenements";

// Valeurs provisoires
const estConnecte = false;
const nbrInscrits = 0;

// Regroupe les activités par créneau horaire, du plus tôt au plus tard
function grouperParCreneau(evenements) {
    const creneaux = new Map();

    [...evenements]
        .sort((a, b) => a.debut - b.debut || a.fin - b.fin)
        .forEach((evenement) => {
            const cle = `${evenement.debut}-${evenement.fin}`;
            if (!creneaux.has(cle)) {
                creneaux.set(cle, { cle, debut: evenement.debut, fin: evenement.fin, evenements: [] });
            }
            creneaux.get(cle).evenements.push(evenement);
        });

    return [...creneaux.values()];
}

function EtatInscription() {
    let message = "Connectez-vous pour vous inscrire aux activités.";
    if (estConnecte) {
        message = nbrInscrits === 0
            ? "Vous n’êtes inscrit à aucune activité."
            : `Vous êtes inscrit à ${nbrInscrits} ${nbrInscrits === 1 ? "activité" : "activités"}.`;
    }

    return (
        <div className="border-t border-white/25 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="max-w-xs leading-7">{message}</p>
            <Link
                to={estConnecte ? "/mon-espace" : "/auth"}
                className="mt-4 inline-flex min-h-11 items-center rounded-md bg-white px-5 font-semibold text-[#212684] transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
                {estConnecte ? "Voir mes inscriptions" : "Se connecter"}
            </Link>
        </div>
    );
}

// Une activité : la plaque de salle à gauche permet de la repérer sur place
function Activite({ evenement }) {
    return (
        <li>
            <Link
                to={`/planning-jpo/${evenement.idEvenement}`}
                className="group flex overflow-hidden rounded-md border border-[#212684]/20 bg-white transition-colors hover:border-[#212684] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3c3792]"
            >
                <div className="relative isolate flex w-24 shrink-0 flex-col items-center justify-center bg-[#212684] py-5 text-white transition-colors group-hover:bg-[#3c3792] sm:w-36">
                    <span aria-hidden="true" className="jpo-event-pattern absolute inset-0 -z-10 opacity-30" />
                    <span className="text-sm text-blue-100">Salle</span>
                    <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{evenement.salle}</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{evenement.titre}</h3>
                        <p className="mt-1 text-sm text-gray-600">{evenement.CapaciteMax} places au maximum</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-[#212684] underline underline-offset-4 decoration-[#212684]/30 group-hover:decoration-[#212684]">
                        Voir l’activité
                    </span>
                </div>
            </Link>
        </li>
    );
}

export default function JPOPlanning() {
    // Présentation statique du programme JPO
    const creneaux = grouperParCreneau(Evenement);

    return (
        <section>
            <TitreProps titre="Programme de la JPO" />
            <BannerHead />
            <Filarial titrePage="Programme de la JPO" />

            <header className="bg-[#212684] text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Programme de la JPO</h1>
                        <p className="mt-4 leading-7 text-blue-50">
                            Université Gustave Eiffel, 17 rue Jablinot, 77100 Meaux
                        </p>
                        <p className="leading-7 text-blue-100">
                            Date à confirmer. Ce programme est provisoire.
                        </p>
                    </div>
                    <EtatInscription />
                </div>
            </header>

            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
                {creneaux.length === 0 && (
                    <p className="text-gray-600">Le programme sera bientôt publié.</p>
                )}

                {creneaux.map((creneau) => (
                    <section
                        key={creneau.cle}
                        aria-labelledby={`creneau-${creneau.cle}`}
                        className="grid gap-5 border-t-2 border-[#212684] py-8 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-[16rem_1fr] lg:gap-10"
                    >
                        <div>
                            <h2 id={`creneau-${creneau.cle}`} className="text-2xl font-extrabold tracking-tight text-[#212684] sm:text-3xl">
                                {creneau.debut} h – {creneau.fin} h
                            </h2>
                            <p className="mt-1 text-gray-600">
                                {creneau.evenements.length} {creneau.evenements.length === 1 ? "activité" : "activités"}
                            </p>
                        </div>
                        <ul className="grid gap-4">
                            {creneau.evenements.map((evenement) => (
                                <Activite key={evenement.idEvenement} evenement={evenement} />
                            ))}
                        </ul>
                    </section>
                ))}
                {/*rajouter une pagination*/}
            </div>
        </section>
    );
}
