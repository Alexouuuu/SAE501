import { useEffect, useState } from "react";
import { api, dateDepuisChamp, dateEtHeure, datePourChamp } from "../../services/api";

const nouvelEvenement = {
    titre: "",
    description: "",
    debut: "",
    fin: "",
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

export default function EventsGestion() {
    const [evenements, setEvenements] = useState([]);
    const [form, setForm] = useState(nouvelEvenement);
    const [editionId, setEditionId] = useState(null);
    const [erreur, setErreur] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        api("/api/evenements")
            .then(setEvenements)
            .catch(() => setErreur("Impossible de charger les événements. Vérifiez que le serveur est démarré."));
    }, []);

    function modifierChamp(event) {
        setForm((actuel) => ({ ...actuel, [event.target.name]: event.target.value }));
    }

    function editer(evenement) {
        setEditionId(evenement.id);
        setForm({
            titre: evenement.titre || "",
            description: evenement.description || "",
            debut: datePourChamp(evenement.debut),
            fin: datePourChamp(evenement.fin),
            capaciteMax: evenement.capaciteMax ?? "",
        });
        setMessage("");
        setErreur("");
    }

    function annulerEdition() {
        setEditionId(null);
        setForm(nouvelEvenement);
    }

    async function enregistrer(event) {
        event.preventDefault();
        setErreur("");
        setMessage("");
        const payload = {
            titre: form.titre,
            description: form.description,
            debut: dateDepuisChamp(form.debut),
            fin: dateDepuisChamp(form.fin),
            capaciteMax: form.capaciteMax === "" ? null : Number(form.capaciteMax),
            activiteJpo: false,
        };
        try {
            await api(editionId ? `/api/evenements/${editionId}` : "/api/evenements", {
                method: editionId ? "PUT" : "POST",
                body: JSON.stringify(payload),
            });
            setEvenements(await api("/api/evenements"));
            annulerEdition();
            setMessage("L’événement a été enregistré.");
        } catch (cause) {
            setErreur(cause.message || "L’enregistrement de l’événement a échoué.");
        }
    }

    async function supprimer(id) {
        if (!window.confirm("Supprimer définitivement cet événement ?")) return;
        setErreur("");
        setMessage("");
        try {
            await api(`/api/evenements/${id}`, { method: "DELETE" });
            setEvenements(await api("/api/evenements"));
            if (editionId === id) annulerEdition();
            setMessage("L’événement a été supprimé.");
        } catch (cause) {
            setErreur(cause.message || "La suppression de l’événement a échoué.");
        }
    }

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Événements de la formation</h2>
                <p className="mt-1 text-gray-600">Publiez, modifiez ou supprimez les événements visibles par les visiteurs.</p>
            </div>
            {erreur && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">{erreur}</p>}
            {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-green-800">{message}</p>}

            <form onSubmit={enregistrer} className="grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2">
                <h3 className="text-lg font-semibold md:col-span-2">{editionId ? "Modifier l’événement" : "Ajouter un événement"}</h3>
                <Champ label="Titre" name="titre" value={form.titre} onChange={modifierChamp} required />
                <Champ label="Date et heure de début" name="debut" type="datetime-local" value={form.debut} onChange={modifierChamp} required />
                <Champ label="Date et heure de fin" name="fin" type="datetime-local" value={form.fin} onChange={modifierChamp} />
                <Champ label="Capacité maximale (facultatif)" name="capaciteMax" type="number" value={form.capaciteMax} onChange={modifierChamp} />
                <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                    Description courte
                    <textarea name="description" rows="3" maxLength="2000" value={form.description} onChange={modifierChamp} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
                </label>
                <div className="flex flex-wrap gap-3 md:col-span-2">
                    <button className="cursor-pointer rounded-lg bg-[#212684] px-5 py-2.5 font-semibold text-white hover:bg-[#3c3792]">{editionId ? "Enregistrer" : "Publier"}</button>
                    {editionId && <button type="button" onClick={annulerEdition} className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 font-semibold text-gray-700 hover:bg-white">Annuler</button>}
                </div>
            </form>

            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Événements publiés ({evenements.length})</h3>
                {evenements.length === 0 && <p className="text-gray-600">Aucun événement enregistré.</p>}
                {evenements.map((evenement) => (
                    <article key={evenement.id} className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 p-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-sm font-semibold text-[#3c3792]">{dateEtHeure(evenement.debut)}</p>
                            <h4 className="mt-1 font-bold text-gray-900">{evenement.titre}</h4>
                            {evenement.description && <p className="mt-1 max-w-2xl text-sm text-gray-600">{evenement.description}</p>}
                        </div>
                        <div className="flex shrink-0 gap-2">
                            <button type="button" onClick={() => editer(evenement)} className="cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50">Modifier</button>
                            <button type="button" onClick={() => supprimer(evenement.id)} className="cursor-pointer rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50">Supprimer</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
