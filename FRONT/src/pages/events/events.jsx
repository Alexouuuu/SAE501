import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import { api, dateEtHeure } from "../../services/api";

export default function Evenements() {
    const [evenements, setEvenements] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        api("/api/evenements")
            .then(setEvenements)
            .catch(() => setErreur("Les événements ne sont pas disponibles pour le moment."));
    }, []);

    return (
        <section>
            <TitreProps titre={"Les événements de la formation"} />
            <BannerHead />
            <Filarial titrePage={"Les événements"} />
            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
                <div className="mb-10 flex flex-col gap-5 rounded-2xl bg-[#212684] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">À ne pas manquer</p>
                        <h1 className="mt-2 text-3xl font-bold">Journée portes ouvertes</h1>
                        <p className="mt-2 max-w-2xl text-blue-50">Découvrez la formation et préparez votre visite en choisissant les rencontres qui vous intéressent.</p>
                    </div>
                    <Link to="/jpo" className="inline-flex shrink-0 justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#212684] transition hover:bg-blue-100">
                        S’inscrire et préparer ma visite
                    </Link>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">Tous les événements</h2>
                {erreur && <p role="alert" className="rounded-lg bg-red-50 p-4 text-red-800">{erreur}</p>}
                {!erreur && evenements.length === 0 && (
                    <p className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">Aucun événement n’est annoncé pour le moment.</p>
                )}
                <div className="grid gap-5 md:grid-cols-2">
                    {evenements.map((evenement) => (
                        <article key={evenement.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold text-[#3c3792]">{dateEtHeure(evenement.debut)}</p>
                            <h3 className="mt-2 text-xl font-bold text-gray-900">{evenement.titre}</h3>
                            {evenement.fin && <p className="mt-1 text-sm text-gray-600">Jusqu’à {new Intl.DateTimeFormat("fr-FR", { timeStyle: "short" }).format(new Date(evenement.fin))}</p>}
                            <p className="mt-4 whitespace-pre-line leading-7 text-gray-700">{evenement.description || "Plus d’informations seront communiquées prochainement."}</p>
                            {evenement.titre.toLowerCase().includes("jpo") && (
                                <Link to="/jpo" className="mt-5 inline-flex font-semibold text-[#212684] underline underline-offset-4">
                                    Découvrir le programme JPO
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}