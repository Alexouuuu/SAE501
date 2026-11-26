import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Champ, { Facultatif, fieldClassName } from "./Champ";
import CaseACocher from "./CaseACocher";
import MessageInfo from "./MessageInfo";
import useValidation from "./useValidation";

const legendClassName = "text-base font-semibold text-gray-900";

function verifierConfirmation(nom, formulaire) {
    if (
        nom === "passwordConfirmation" &&
        formulaire.elements.passwordConfirmation.value !== formulaire.elements.password.value
    ) {
        return "Les mots de passe ne correspondent pas.";
    }
    return "";
}

export default function Inscription() {
    const [message, setMessage] = useState("");
    const { erreurs, surSortie, surSaisie, validerTout } = useValidation(verifierConfirmation);
    const genreId = useId();

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("");
        if (!validerTout(event.currentTarget)) return;

        setMessage("La création de compte n'est pas encore disponible. Merci de réessayer plus tard.");
    }

    return (
        <div className="pt-7">
            <h2 className="text-2xl font-bold text-gray-900">Créer un compte</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
                Tous les champs sont obligatoires, sauf mention « facultatif ».
            </p>

            <form
                className="mt-7 space-y-8"
                noValidate
                onSubmit={handleSubmit}
                onBlur={surSortie}
                onChange={surSaisie}
            >
                <fieldset className="space-y-5">
                    <legend className={legendClassName}>Vos identifiants</legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <Champ label="Prénom" name="prenom" autoComplete="given-name" erreur={erreurs.prenom} />
                        <Champ label="Nom" name="nom" autoComplete="family-name" erreur={erreurs.nom} />
                    </div>
                    <Champ
                        label="Adresse e-mail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        erreur={erreurs.email}
                    />
                    <Champ
                        label="Mot de passe"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        minLength={8}
                        aide="8 caractères minimum."
                        erreur={erreurs.password}
                    />
                    <Champ
                        label="Confirmer le mot de passe"
                        name="passwordConfirmation"
                        type="password"
                        autoComplete="new-password"
                        erreur={erreurs.passwordConfirmation}
                    />
                </fieldset>

                <fieldset className="space-y-5">
                    <legend className={legendClassName}>Vos informations</legend>
                    <div className="grid items-start gap-5 sm:grid-cols-2">
                        <Champ
                            label="Date de naissance"
                            name="dateNaissance"
                            type="date"
                            autoComplete="bday"
                            aide="Sert uniquement à des statistiques d'âge anonymes."
                            erreur={erreurs.dateNaissance}
                        />
                        <div>
                            <label htmlFor={genreId} className="block text-sm font-medium text-gray-800">
                                Genre
                                <Facultatif />
                            </label>
                            <select id={genreId} className={fieldClassName} name="genre" defaultValue="">
                                <option value="" disabled>
                                    Choisir une option
                                </option>
                                <option value="femme">Femme</option>
                                <option value="homme">Homme</option>
                                <option value="autre">Autre</option>
                                <option value="non-precise">Je préfère ne pas répondre</option>
                            </select>
                        </div>
                    </div>
                    <Champ
                        label="Adresse (numéro et voie)"
                        name="adresse"
                        autoComplete="address-line1"
                        erreur={erreurs.adresse}
                    />
                    <Champ
                        label="Complément d’adresse"
                        name="complementAdresse"
                        autoComplete="address-line2"
                        required={false}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                        <Champ
                            label="Code postal"
                            name="codePostal"
                            autoComplete="postal-code"
                            inputMode="numeric"
                            pattern="[0-9]{5}"
                            data-message-format="Saisissez un code postal à 5 chiffres."
                            erreur={erreurs.codePostal}
                        />
                        <Champ label="Ville" name="ville" autoComplete="address-level2" erreur={erreurs.ville} />
                    </div>
                </fieldset>

                <div className="space-y-4">
                    <CaseACocher name="interesseFormation">
                        Je souhaite être comptabilisé parmi les personnes intéressées par la formation.
                        <Facultatif />
                    </CaseACocher>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <CaseACocher name="accepteDonnees" required erreur={erreurs.accepteDonnees}>
                            Les informations recueillies dans ce formulaire sont traitées par l’Université Gustave Eiffel afin de gérer votre compte et de vous donner accès aux services proposés sur le site.
                            En cochant cette case, j’accepte que mes données personnelles soient
                            collectées et stockées conformément aux{" "}
                            <Link
                                to="/mentions-legales"
                                className="font-semibold text-[#212684] underline underline-offset-4 hover:decoration-[#92c56e] hover:decoration-2"
                            >
                                mentions légales
                            </Link>.
                        </CaseACocher>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#3c3792] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2"
                >
                    Créer mon compte
                </button>
            </form>

            {message && <MessageInfo>{message}</MessageInfo>}
        </div>
    );
}
