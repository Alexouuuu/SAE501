import { useEffect, useState } from "react";

// composant
import Champs from "../../composants/champsForms";

// mettre les bons champs
const activiteVide = {
    titre: "",
    description: "",
    debut: "",
    fin: "",
    salle: "",
    matiere: "",
    capaciteMax: "",
};

export default function JPOGestion() {
    const [form, setForm] = useState(activiteVide);
    const [images, setImages] = useState([]);

    // supp les images quand on change de page
    useEffect(() => () => {
        images.forEach((image) => URL.revokeObjectURL(image.src));
    }, [images]);

    function changerChamp(event) {
        setForm((actuel) => ({ ...actuel, [event.target.name]: event.target.value }));
    }

    // Crée des prévisualisations
    function changerImages(event) {
        const fichiers = Array.from(event.currentTarget.files || []);
        setImages(fichiers.map((fichier) => ({
            nom: fichier.name,
            src: URL.createObjectURL(fichier),
        })));
    }

    // Formulaire et liste du programme JPO
    return (
        <section className="space-y-8 max-w-7xl">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Activités de la JPO</h2>
                <p className="mt-1 text-gray-600">La JPO est unique : ajoutez ici ses réunions, visites, entretiens et présentations. Les modifications ne sont pas sauvegardées.</p>
            </div>
            <form onSubmit={(event) => event.preventDefault()} className="grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5 md:grid-cols-2">
                <h3 className="text-lg font-semibold md:col-span-2">Ajouter une activité à la JPO</h3>
                <Champs label="Nom de l’activité" name="titre" value={form.titre} onChange={changerChamp} required />
                <Champs label="Salle" name="salle" value={form.salle} onChange={changerChamp} />
                <Champs label="Date et heure de début" name="debut" type="datetime-local" value={form.debut} onChange={changerChamp} required />
                <Champs label="Date et heure de fin" name="fin" type="datetime-local" value={form.fin} onChange={changerChamp} />
                <Champs label="Matière / formation (facultatif)" name="matiere" value={form.matiere} onChange={changerChamp} />
                <Champs label="Capacité maximale (facultatif)" name="capaciteMax" type="number" value={form.capaciteMax} onChange={changerChamp} />
                <label className="block text-sm font-medium text-gray-700 md:col-span-2">
                    Description
                    <textarea name="description" rows="3" maxLength="2000" value={form.description} onChange={changerChamp} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
                </label>
                <div className="block text-sm font-medium text-gray-700 md:col-span-2">
                    Images
                    <input type="file" accept="image/*" multiple onChange={changerImages} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20" />
                </div>
                {images.length > 0 && (
                    <div className="space-y-3 md:col-span-2">
                        <h4 className="text-sm font-semibold text-gray-800">Aperçu des images ({images.length})</h4>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                            {images.map((image, index) => (
                                <figure key={`${image.nom}-${index}`} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                                    <img src={image.src} alt={image.nom} className="aspect-square w-full object-cover" />
                                    <figcaption className="truncate px-3 py-2 text-xs text-gray-600" title={image.nom}>
                                        {image.nom}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap gap-3 md:col-span-2">
                    <button type="submit" className="cursor-pointer rounded-lg bg-[#212684] px-5 py-2.5 font-semibold text-white hover:bg-[#3c3792]">Ajouter l’activité</button>
                </div>
            </form>

            {/*mettre un champs pour la liste comme elearning*/}
        </section>
    );
}
