import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import { api, dateEtHeure } from "../../services/api";

const storageKey = "sae501-planning-jpo";

function lirePlanning() {
    try {
        return JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch {
        return [];
    }
}

export default function JPO() {
    const [activites, setActivites] = useState([]);
    const [planning, setPlanning] = useState(lirePlanning);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        api("/api/evenements/jpo")
            .then(setActivites)
            .catch(() => setErreur("Le programme JPO n’est pas disponible pour le moment."));
    }, []);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(planning));
    }, [planning]);

    const monPlanning = useMemo(
        () => activites.filter((activite) => planning.includes(activite.id)),
        [activites, planning],
    );

    function basculerActivite(id) {
        setPlanning((actuel) => actuel.includes(id)
            ? actuel.filter((activiteId) => activiteId !== id)
            : [...actuel, id]);
    }

    return (
        <section>
            <TitreProps titre="Programme de la JPO" />
            <BannerHead />
            <Filarial titrePage="Journée portes ouvertes" />
            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                {erreur && <p role="alert" className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">{erreur}</p>}
                <div className="mb-8 rounded-2xl bg-[#212684] p-7 text-white sm:p-9">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Journée portes ouvertes</p>
                    <h1 className="mt-3 text-3xl font-bold">Composez votre visite</h1>
                    <p className="mt-3 max-w-2xl leading-7 text-blue-50">
                        Choisissez les réunions, visites, entretiens et présentations qui vous intéressent pour les retrouver dans votre planning.
                    </p>
                    <Link to="/auth" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-semibold text-[#212684] hover:bg-blue-100">
                        Se connecter
                    </Link>
                    <p className="mt-3 text-xs text-blue-100">
                        La connexion élève n’est pas encore reliée à un service de compte. Votre sélection est enregistrée dans ce navigateur uniquement.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
                    <div>
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold text-gray-900">Activités proposées</h2>
                            <p className="mt-1 text-gray-600">Ajoutez ou retirez les activités de votre planning personnalisé.</p>
                        </div>
                        {!erreur && activites.length === 0 && (
                            <p className="rounded-xl border border-dashed border-gray-300 p-6 text-gray-600">Le programme détaillé sera bientôt publié.</p>
                        )}
                        <div className="space-y-4">
                            {activites.map((activite) => {
                                const ajoute = planning.includes(activite.id);
                                return (
                                    <article key={activite.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                        <div className="flex flex-col justify-between gap-4 sm:flex-row">
                                            <div>
                                                <p className="text-sm font-semibold text-[#3c3792]">
                                                    {dateEtHeure(activite.debut)}
                                                    {activite.fin ? ` – ${new Intl.DateTimeFormat("fr-FR", { timeStyle: "short" }).format(new Date(activite.fin))}` : ""}
                                                </p>
                                                <h3 className="mt-2 text-lg font-bold text-gray-900">{activite.titre}</h3>
                                                {[activite.salle, activite.matiere].filter(Boolean).length > 0 && (
                                                    <p className="mt-1 text-sm text-gray-600">{[activite.salle, activite.matiere].filter(Boolean).join(" · ")}</p>
                                                )}
                                                {activite.description && <p className="mt-3 leading-6 text-gray-700">{activite.description}</p>}
                                            </div>
                                            <button type="button" onClick={() => basculerActivite(activite.id)} className={`h-fit shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold ${ajoute ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-[#212684] text-white hover:bg-[#3c3792]"}`}>
                                                {ajoute ? "Ajouté au planning" : "Ajouter à mon planning"}
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
                        <h2 className="text-xl font-bold text-gray-900">Mon planning</h2>
                        <p className="mt-1 text-sm text-gray-600">Vos activités sélectionnées pour la JPO.</p>
                        <p className="mt-4 text-sm font-semibold text-[#3c3792]">{monPlanning.length} activité{monPlanning.length > 1 ? "s" : ""}</p>
                        {monPlanning.length === 0 ? (
                            <p className="mt-4 text-sm text-gray-600">Aucune activité sélectionnée.</p>
                        ) : (
                            <ul className="mt-4 space-y-3">
                                {monPlanning.map((activite) => (
                                    <li key={activite.id} className="rounded-lg bg-white p-3 shadow-sm">
                                        <p className="font-semibold text-gray-900">{activite.titre}</p>
                                        <p className="mt-1 text-sm text-gray-600">{dateEtHeure(activite.debut)}</p>
                                        {activite.salle && <p className="text-sm text-gray-600">{activite.salle}</p>}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <p className="mt-5 border-t border-gray-200 pt-4 text-xs leading-5 text-gray-500">Le planning est conservé dans ce navigateur. Il ne suit pas encore le compte élève entre plusieurs appareils.</p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
