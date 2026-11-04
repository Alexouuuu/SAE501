import { useEffect, useState } from "react";
import { api, dateDepuisChamp, dateEtHeure, datePourChamp } from "../../services/api";

const activiteVide = {
    titre: "",
    description: "",
    debut: "",
    fin: "",
    salle: "",
    matiere: "",
    capaciteMax: "",
};

function Champ({ label, name, type = "text", value, onChange, required = false }) {
    return (
        <label className="block text-sm font-medium text-gray-700">
            {label}
            <input name={name} type={type} required={required} value={value} onChange={onChange} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
        </label>
    );
}

export default function JPOGestion() {
    const [activites, setActivites] = useState([]);
    const [form, setForm] = useState(activiteVide);
    const [editionId, setEditionId] = useState(null);
    const [erreur, setErreur] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        api("/api/evenements/jpo")
            .then(setActivites)
            .catch(() => setErreur("Impossible de charger le programme JPO. Vérifiez que le serveur est démarré."));
    }, []);

    function changerChamp(event) {
        setForm((actuel) => ({ ...actuel, [event.target.name]: event.target.value }));
    }

    function editer(activite) {
        setEditionId(activite.id);
        setForm({
            titre: activite.titre || "",
            description: activite.description || "",
            debut: datePourChamp(activite.debut),
            fin: datePourChamp(activite.fin),
            salle: activite.salle || "",
            matiere: activite.matiere || "",
            capaciteMax: activite.capaciteMax ?? "",
        });
        setErreur("");
        setMessage("");
    }

    function annulerEdition() {
        setEditionId(null);
        setForm(activiteVide);
    }

    async function enregistrer(event) {
        event.preventDefault();
        setErreur("");
        setMessage("");
        const payload = {
            ...form,
            debut: dateDepuisChamp(form.debut),
            fin: dateDepuisChamp(form.fin),
            capaciteMax: form.capaciteMax === "" ? null : Number(form.capaciteMax),
            activiteJpo: true,
        };
        try {
            await api(editionId ? `/api/evenements/${editionId}` : "/api/evenements", {
                method: editionId ? "PUT" : "POST",
                body: JSON.stringify(payload),
            });
            setActivites(await api("/api/evenements/jpo"));
            annulerEdition();
            setMessage("L’activité de la JPO a été enregistrée.");
        } catch (cause) {
            setErreur(cause.message || "L’enregistrement de l’activité a échoué.");
        }
    }

    async function supprimer(id) {
        if (!window.confirm("Supprimer cette activité du programme JPO ?")) return;
        setErreur("");
        setMessage("");
        try {
            await api(`/api/evenements/${id}`, { method: "DELETE" });
            setActivites(await api("/api/evenements/jpo"));
            if (editionId === id) annulerEdition();
            setMessage("L’activité a été supprimée.");
        } catch (cause) {
            setErreur(cause.message || "La suppression de l’activité a échoué.");
        }
    }

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Activités de la JPO</h2>
                <p className="mt-1 text-gray-600">La JPO est unique : ajoutez ici ses réunions, visites, entretiens et présentations. Les activités publiées sont proposées aux élèves dans leur planning.</p>
            </div>
            {erreur && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">{erreur}</p>}
            {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-green-800">{message}</p>}

            <form onSubmit={enregistrer} className="grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2">
                <h3 className="text-lg font-semibold md:col-span-2">{editionId ? "Modifier une activité" : "Ajouter une activité à la JPO"}</h3>
                <Champ label="Nom de l’activité" name="titre" value={form.titre} onChange={changerChamp} required />
                <Champ label="Salle" name="salle" value={form.salle} onChange={changerChamp} />
                <Champ label="Date et heure de début" name="debut" type="datetime-local" value={form.debut} onChange={changerChamp} required />
                <Champ label="Date et heure de fin" name="fin" type="datetime-local" value={form.fin} onChange={changerChamp} />
                <Champ label="Matière / formation (facultatif)" name="matiere" value={form.matiere} onChange={changerChamp} />
                <Champ label="Capacité maximale (facultatif)" name="capaciteMax" type="number" value={form.capaciteMax} onChange={changerChamp} />
                <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                    Description courte
                    <textarea name="description" rows="3" maxLength="2000" value={form.description} onChange={changerChamp} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
                </label>
                <div className="flex flex-wrap gap-3 md:col-span-2">
                    <button className="cursor-pointer rounded-lg bg-[#212684] px-5 py-2.5 font-semibold text-white hover:bg-[#3c3792]">{editionId ? "Enregistrer" : "Ajouter l’activité"}</button>
                    {editionId && <button type="button" onClick={annulerEdition} className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-white">Annuler</button>}
                </div>
            </form>

            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Programme JPO ({activites.length})</h3>
                {activites.length === 0 && <p className="rounded-xl border border-dashed border-gray-300 p-6 text-gray-600">Aucune activité n’a encore été ajoutée à la JPO.</p>}
                {activites.map((activite) => (
                    <article key={activite.id} className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-sm font-semibold text-[#3c3792]">{dateEtHeure(activite.debut)}</p>
                            <h4 className="mt-1 font-bold text-gray-900">{activite.titre}</h4>
                            {[activite.salle, activite.matiere].filter(Boolean).length > 0 && <p className="mt-1 text-sm text-gray-600">{[activite.salle, activite.matiere].filter(Boolean).join(" · ")}</p>}
                            {activite.description && <p className="mt-1 text-sm text-gray-600">{activite.description}</p>}
                        </div>
                        <div className="flex shrink-0 gap-2">
                            <button type="button" onClick={() => editer(activite)} className="cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50">Modifier</button>
                            <button type="button" onClick={() => supprimer(activite.id)} className="cursor-pointer rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">Supprimer</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
