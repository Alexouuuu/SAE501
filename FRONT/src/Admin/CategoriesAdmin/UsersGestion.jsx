import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function UsersGestion() {
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        api("/api/utilisateurs")
            .then(setUtilisateurs)
            .catch((cause) => setErreur(cause.message || "Impossible de charger les comptes."));
    }, []);

    async function changerPresence(utilisateur, present) {
        setErreur("");
        try {
            const misAJour = await api(`/api/utilisateurs/${utilisateur.id}/presence-jpo`, {
                method: "PATCH",
                body: JSON.stringify({ present }),
            });
            setUtilisateurs((liste) => liste.map((element) => element.id === misAJour.id ? misAJour : element));
        } catch (cause) {
            setErreur(cause.message || "La présence n’a pas pu être enregistrée.");
        }
    }

    return (
        <section>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Comptes élèves</h2>
                <p className="mt-1 text-gray-600">{utilisateurs.length} compte{utilisateurs.length > 1 ? "s" : ""} enregistré{utilisateurs.length > 1 ? "s" : ""}.</p>
            </div>
            {erreur && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-red-800">{erreur}</p>}
            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                    <thead className="bg-gray-50 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 font-semibold">Nom</th>
                            <th className="px-4 py-3 font-semibold">Prénom</th>
                            <th className="px-4 py-3 font-semibold">E-mail</th>
                            <th className="px-4 py-3 font-semibold">Sexe</th>
                            <th className="px-4 py-3 font-semibold">Ville</th>
                            <th className="px-4 py-3 font-semibold">Filière</th>
                            <th className="px-4 py-3 text-center font-semibold">Présence JPO</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {utilisateurs.map((utilisateur) => (
                            <tr key={utilisateur.id} className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-3">{utilisateur.nom}</td>
                                <td className="px-4 py-3">{utilisateur.prenom}</td>
                                <td className="px-4 py-3">{utilisateur.email}</td>
                                <td className="px-4 py-3">{utilisateur.sexe || "—"}</td>
                                <td className="px-4 py-3">{utilisateur.ville || "—"}</td>
                                <td className="px-4 py-3">{utilisateur.filiere || "—"}</td>
                                <td className="px-4 py-3 text-center">
                                    <label className="inline-flex cursor-pointer items-center justify-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="size-4 cursor-pointer accent-[#212684]"
                                            checked={Boolean(utilisateur.presentJpo)}
                                            onChange={(event) => changerPresence(utilisateur, event.target.checked)}
                                            aria-label={`Présence JPO de ${utilisateur.prenom} ${utilisateur.nom}`}
                                        />
                                        <span>{utilisateur.presentJpo ? "Oui" : "Non"}</span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                        {utilisateurs.length === 0 && !erreur && (
                            <tr><td colSpan="7" className="px-4 py-8 text-center text-gray-500">Aucun compte élève pour le moment.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}