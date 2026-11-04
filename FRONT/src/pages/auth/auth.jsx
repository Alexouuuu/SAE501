import { useState } from "react";
import { Link } from "react-router-dom";
import TitreProps from "../../composants/titreProps";

const fieldClassName =
    "mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20";

function Champ({ label, name, type = "text", autoComplete, ...props }) {
    return (
        <label className="block text-sm font-medium text-gray-800">
            {label}
            <input
                className={fieldClassName}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required
                {...props}
            />
        </label>
    );
}

export default function Authentification() {
    const [mode, setMode] = useState("connexion");
    const [message, setMessage] = useState("");

    const isInscription = mode === "inscription";
    const isAdmin = mode === "admin";

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (
            isInscription &&
            formData.get("password") !== formData.get("passwordConfirmation")
        ) {
            setMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        event.currentTarget.reset();
        setMessage(
            "Le service de compte n’est pas encore connecté : aucune donnée n’a été envoyée ni enregistrée."
        );
    }

    function changerMode(nouveauMode) {
        setMode(nouveauMode);
        setMessage("");
    }

    return (
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
            <TitreProps titre="Connexion et inscription" />

            <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
                <aside className="flex flex-col justify-between bg-[#212684] p-8 text-white sm:p-10">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                            Journée portes ouvertes
                        </p>
                        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Votre espace
                            <br />
                            personnel
                        </h1>
                        <p className="mt-5 max-w-sm leading-7 text-gray-100">
                            Créez un compte élève pour retrouver vos informations et vos
                            inscriptions. Les parents et visiteurs peuvent continuer sans
                            compte.
                        </p>
                    </div>
                    <div className="mt-10 border-t border-white/30 pt-6">
                        <p className="text-sm text-gray-100">
                            Vous souhaitez simplement découvrir le site ?
                        </p>
                        <Link
                            to="/"
                            className="mt-3 inline-flex font-semibold underline decoration-gray-300 underline-offset-4 hover:text-gray-200"
                        >
                            Continuer en tant que visiteur
                        </Link>
                    </div>
                </aside>

                <div className="p-6 sm:p-10">
                    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-5">
                        <button
                            type="button"
                            aria-pressed={mode === "connexion"}
                            onClick={() => changerMode("connexion")}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
                                mode === "connexion"
                                    ? "bg-[#212684] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Connexion élève
                        </button>
                        <button
                            type="button"
                            aria-pressed={isInscription}
                            onClick={() => changerMode("inscription")}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
                                isInscription
                                    ? "bg-[#212684] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Créer un compte
                        </button>
                        <button
                            type="button"
                            aria-pressed={isAdmin}
                            onClick={() => changerMode("admin")}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${
                                isAdmin
                                    ? "bg-[#212684] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Administrateur
                        </button>
                    </div>

                    <div className="pt-7">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {isInscription
                                ? "Créer un compte élève"
                                : isAdmin
                                  ? "Connexion administrateur"
                                  : "Ravi de vous revoir"}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            {isInscription
                                ? "Renseignez vos informations pour préparer votre espace."
                                : isAdmin
                                  ? "L’accès administrateur est réservé aux comptes autorisés."
                                  : "Connectez-vous à votre espace élève."}
                        </p>

                        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                            {isInscription && (
                                <>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Champ
                                            label="Prénom"
                                            name="prenom"
                                            autoComplete="given-name"
                                        />
                                        <Champ
                                            label="Nom"
                                            name="nom"
                                            autoComplete="family-name"
                                        />
                                    </div>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Champ
                                            label="Âge"
                                            name="age"
                                            type="number"
                                            min="1"
                                            max="120"
                                            inputMode="numeric"
                                        />
                                        <label className="block text-sm font-medium text-gray-800">
                                            Sexe
                                            <select
                                                className={fieldClassName}
                                                name="sexe"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="" disabled>
                                                    Choisir une option
                                                </option>
                                                <option value="femme">Femme</option>
                                                <option value="homme">Homme</option>
                                                <option value="autre">Autre</option>
                                                <option value="non-precise">
                                                    Je préfère ne pas répondre
                                                </option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <Champ
                                            label="Ville"
                                            name="ville"
                                            autoComplete="address-level2"
                                        />
                                        <Champ label="Filière" name="filiere" />
                                    </div>
                                </>
                            )}

                            <Champ
                                label="Adresse e-mail"
                                name="email"
                                type="email"
                                autoComplete="email"
                            />
                            <Champ
                                label="Mot de passe"
                                name="password"
                                type="password"
                                autoComplete={
                                    isInscription ? "new-password" : "current-password"
                                }
                                minLength="8"
                            />

                            {isInscription && (
                                <Champ
                                    label="Confirmer le mot de passe"
                                    name="passwordConfirmation"
                                    type="password"
                                    autoComplete="new-password"
                                    minLength="8"
                                />
                            )}

                            <button
                                type="submit"
                                className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#161b7d] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2"
                            >
                                {isInscription
                                    ? "Créer mon compte"
                                    : isAdmin
                                      ? "Se connecter en tant qu’administrateur"
                                      : "Se connecter"}
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

                        {!isInscription && !isAdmin && (
                            <p className="mt-5 text-center text-sm text-gray-600">
                                Pas encore de compte ?{" "}
                                <button
                                    type="button"
                                    className="cursor-pointer font-semibold text-[#212684] underline underline-offset-2 hover:text-[#161b7d]"
                                    onClick={() => changerMode("inscription")}
                                >
                                    Créer un compte élève
                                </button>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
