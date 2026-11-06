import Champs from "../../composants/champsForms";

// mettre les bons champs
const nouvelEvenement = {
    titre: "",
    description: "",
    debut: "",
    fin: "",
    capaciteMax: "",
};



export default function EventsGestion() {
    // Formulaire et liste statiques des événements
    return (
        <section className="space-y-8 max-w-7xl">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Événements de la formation</h2>
                <p className="mt-1 text-gray-600">Gestion des événements de la formation.</p>
            </div>

            {/* Formulaire désactivé sans enregistrement des données */}
            <div className="grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2">
                <h3 className="text-lg font-semibold md:col-span-2">Ajouter un événement</h3>
                <fieldset disabled className="contents">
                    <Champs label="Titre" name="titre" required />
                    <Champs label="Date et heure de début" name="debut" type="datetime-local" required />
                    <Champs label="Date et heure de fin" name="fin" type="datetime-local" />
                    <Champs label="Capacité maximale (facultatif)" name="capaciteMax" type="number" />
                    <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                        Description courte
                        <textarea name="description" rows="3" maxLength="2000" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
                    </label>
                </fieldset>
                <div className="flex flex-wrap gap-3 md:col-span-2">
                    <button type="button" disabled className="cursor-not-allowed rounded-lg bg-[#212684] px-5 py-2.5 font-semibold text-white opacity-50">Publier</button>
                </div>
            </div>

            {/* État statique de la liste sans données d'événement */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Événements publiés</h3>
                <p className="text-gray-600">Aucun événement affiché.</p>
            </div>
        </section>
    );
}
