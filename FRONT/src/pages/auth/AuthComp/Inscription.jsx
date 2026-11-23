import { useState } from "react";
import { Link } from "react-router-dom";
import Champ from "./Champ";

export default function Inscription() {
    const [message, setMessage] = useState("");
    const [accepteDonnees, setAccepteDonnees] = useState(false);
    const [formulaireValide, setFormulaireValide] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (formData.get("accepteDonnees") !== "on") {
            setMessage("Veuillez accepter le traitement de vos données pour créer un compte.");
            return;
        }

        if (formData.get("password") !== formData.get("passwordConfirmation")) {
            setMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        setMessage("La connexion et la création de compte nécessitent le serveur.");
    }

    function verifierFormulaire(event) {
        const formulaire = event.currentTarget;
        const champsRequis = Array.from(
            formulaire.querySelectorAll("input[required], select[required], textarea[required]")
        );
        const champsRenseignes = champsRequis.every((champ) =>
            champ.type === "checkbox"
                ? champ.checked && champ.validity.valid
                : champ.value.trim() !== "" && champ.validity.valid
        );
        const motsDePasseCorrespondent =
            formulaire.elements.password.value ===
            formulaire.elements.passwordConfirmation.value;

        setFormulaireValide(
            formulaire.checkValidity() && champsRenseignes && motsDePasseCorrespondent
        );
    }

    return (
        <div className="pt-7">
            <h2 className="text-2xl font-bold text-gray-900">Créer un compte</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
                Les champs obligatoires sont indiqués d'une étoile (*).
            </p>

            <form
                className="mt-7 space-y-5"
                onSubmit={handleSubmit}
                onChange={verifierFormulaire}
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <Champ label="Prénom*" name="prenom" autoComplete="given-name" />
                    <Champ label="Nom*" name="nom" autoComplete="family-name" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <Champ
                        label="Date de naissance*"
                        name="dateNaissance"
                        type="date"
                        autoComplete="bday"
                    />
                    <label className="block text-sm font-medium text-gray-800">
                        Genre (facultatif)
                        <select
                            className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20"
                            name="Genre"
                            defaultValue=""
                        >
                            <option className="cursor-pointer" value="" disabled>
                                Choisir une option
                            </option>
                            <option value="femme">Femme</option>
                            <option value="homme">Homme</option>
                            <option value="autre">Autre</option>
                            <option value="non-precise">Je préfère ne pas répondre</option>
                        </select>
                    </label>
                </div>
                <div className="grid gap-5">
                    <Champ
                        label="Adresse (numéro et voie)*"
                        name="adresse"
                        autoComplete="address-line1"
                    />
                    <Champ
                        label="Complément d’adresse (facultatif)"
                        name="complementAdresse"
                        autoComplete="address-line2"
                        required={false}
                    />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <Champ label="Code postal*" name="codePostal" autoComplete="postal-code" />
                    <Champ label="Ville*" name="ville" autoComplete="address-level2" />
                </div>
                <label className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                    <input
                        className="mt-1 cursor-pointer"
                        name="interesseFormation"
                        type="checkbox"
                    />
                    Je souhaite être comptabilisé parmi les personnes intéressées par la formation.
                </label>
                <p className="text-xs leading-5 text-gray-500">
                    Votre date de naissance sert uniquement au calcul de statistiques d’âge agrégées. Elle n’est pas affichée dans le tableau de bord.
                </p>

                <Champ
                    label="Adresse e-mail*"
                    name="email"
                    type="email"
                    autoComplete="email"
                />
                <Champ
                    label="Mot de passe*"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    minLength="8"
                />
                <Champ
                    label="Confirmer le mot de passe*"
                    name="passwordConfirmation"
                    type="password"
                    autoComplete="new-password"
                    minLength="8"
                />

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-start gap-3">
                        <input
                            id="accepteDonnees"
                            name="accepteDonnees"
                            type="checkbox"
                            required
                            checked={accepteDonnees}
                            onChange={(event) => setAccepteDonnees(event.target.checked)}
                            className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-[#212684] focus:ring-2 focus:ring-[#212684]/20"
                        />
                        <label
                            htmlFor="accepteDonnees"
                            className="text-sm leading-6 text-gray-700"
                        >
                            Les informations recueillies dans ce formulaire sont traitées par l’Université Gustave Eiffel afin de gérer votre compte et de vous donner accès aux services proposés sur le site.
                            En cochant cette case, j’accepte que mes données personnelles soient
                            collectées et stockées conformément aux{" "}
                            <Link
                                to="/mentions-legales"
                                className="font-semibold text-[#212684] underline underline-offset-2 hover:text-[#161b7d]"
                            >
                                mentions légales
                            </Link>.
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={!formulaireValide || !accepteDonnees}
                    className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#161b7d] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Créer mon compte
                </button>
            </form>

            {message && (
                <p
                    className="mt-5 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950"
                    role="status"
                    aria-live="polite"
                >
                    {message}
                </p>
            )}
        </div>
    );
}
