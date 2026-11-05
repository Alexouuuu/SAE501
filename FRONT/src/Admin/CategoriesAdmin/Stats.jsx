import { useEffect, useState } from "react";
import { api } from "../../services/api";

function compter(utilisateurs, cle, formater = (valeur) => valeur || "Non renseigné") {
    return utilisateurs.reduce((resultat, utilisateur) => {
        const valeur = formater(utilisateur[cle]);
        resultat[valeur] = (resultat[valeur] || 0) + 1;
        return resultat;
    }, {});
}

function GraphiqueBarres({ titre, donnees }) {
    const entrees = Object.entries(donnees).sort((a, b) => b[1] - a[1]);
    const maximum = Math.max(1, ...entrees.map(([, total]) => total));
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="mb-4 font-bold text-gray-900">{titre}</h3>
            {entrees.length === 0 && <p className="text-sm text-gray-500">Aucune donnée disponible.</p>}
            <ul className="space-y-3">
                {entrees.map(([etiquette, total]) => (
                    <li key={etiquette}>
                        <div className="mb-1 flex justify-between gap-3 text-sm">
                            <span className="truncate text-gray-700">{etiquette}</span>
                            <span className="font-semibold text-gray-900">{total}</span>
                        </div>
                        <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                            <div className="h-full rounded-full bg-[#3c3792]" style={{ width: `${(total / maximum) * 100}%` }} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function trancheAge(age) {
    if (age == null) return "Non renseigné";
    if (age < 18) return "Moins de 18 ans";
    if (age <= 20) return "18–20 ans";
    if (age <= 24) return "21–24 ans";
    return "25 ans et plus";
}

export default function Stats() {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        api("/api/utilisateurs")
            .then(setUtilisateurs)
            .catch((cause) => setErreur(cause.message || "Impossible de charger les statistiques."));
    }, []);

    const total = utilisateurs.length;
    const oui = (cle) => utilisateurs.filter((utilisateur) => utilisateur[cle] === true).length;

    return (
        <section className="max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-900">Statistiques des comptes</h2>
            <p className="mt-1 text-gray-600">Répartition calculée à partir des profils élèves enregistrés.</p>
            {erreur && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-red-800">{erreur}</p>}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                    ["Comptes élèves", total],
                    ["Intéressés par la formation", oui("interesseFormation")],
                    ["Présents à la JPO", oui("presentJpo")],
                    ["Villes renseignées", new Set(utilisateurs.map((u) => u.ville).filter(Boolean)).size],
                ].map(([label, valeur]) => (
                    <article key={label} className="rounded-xl bg-[#212684] p-5 text-white">
                        <p className="text-sm text-blue-100">{label}</p>
                        <p className="mt-2 text-3xl font-bold">{valeur}</p>
                    </article>
                ))}
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
                <GraphiqueBarres titre="Répartition par ville" donnees={compter(utilisateurs, "ville")} />
                <GraphiqueBarres titre="Répartition par âge" donnees={compter(utilisateurs, "age", trancheAge)} />
                <GraphiqueBarres titre="Répartition par sexe" donnees={compter(utilisateurs, "sexe")} />
                <GraphiqueBarres titre="Répartition par filière" donnees={compter(utilisateurs, "filiere")} />
                <GraphiqueBarres titre="Intérêt pour la formation" donnees={compter(utilisateurs, "interesseFormation", (valeur) => valeur ? "Intéressé" : "Non indiqué")} />
                <GraphiqueBarres titre="Présence à la JPO" donnees={compter(utilisateurs, "presentJpo", (valeur) => valeur ? "Oui" : "Non")} />
            </div>
            <p className="mt-5 text-xs leading-5 text-gray-500">
                Les âges sont calculés à partir des dates de naissance enregistrées. Les coordonnées de contact ne sont pas incluses dans ces graphiques.
            </p>
        </section>
    );
}