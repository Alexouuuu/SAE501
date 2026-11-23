import { useState } from "react";
import Champ from "./Champ";

export default function Connexion({ onCreateAccount }) {
    const [message, setMessage] = useState("");
    const [formulaireValide, setFormulaireValide] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
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

        setFormulaireValide(formulaire.checkValidity() && champsRenseignes);
    }

    return (
        <div className="pt-7">
            <h2 className="text-2xl font-bold text-gray-900">Ravi de vous revoir</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
                Connectez-vous à votre espace.
            </p>

            <form
                className="mt-7 space-y-5"
                onSubmit={handleSubmit}
                onChange={verifierFormulaire}
            >
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
                    autoComplete="current-password"
                    minLength="8"
                />
                <button
                    type="submit"
                    disabled={!formulaireValide}
                    className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#161b7d] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Se connecter
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

            <p className="mt-5 text-center text-sm text-gray-600">
                Pas encore de compte ?{" "}
                <button
                    type="button"
                    className="cursor-pointer font-semibold text-[#212684] underline underline-offset-2 hover:text-[#161b7d]"
                    onClick={onCreateAccount}
                >
                    Créer un compte
                </button>
            </p>
        </div>
    );
}
