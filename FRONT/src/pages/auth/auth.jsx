import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import { api } from "../../services/api";

const fieldClassName =
    "mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#212684] focus:ring-2 focus:ring-[#212684]/20";

function Champ({ label, name, type = "text", autoComplete, required = true, ...props }) {
    return (
        <label className="block text-sm font-medium text-gray-800">
            {label}
            <input
                className={fieldClassName}
                name={name}
                type={type}
                autoComplete={autoComplete}
                required={required}
                {...props}
            />
        </label>
    );
}

export default function Authentification() {
    const [mode, setMode] = useState("connexion");
    const [message, setMessage] = useState("");
    const [chargement, setChargement] = useState(false);
    const [accepteDonnees, setAccepteDonnees] = useState(false);
    const navigate = useNavigate();

    const isInscription = mode === "inscription";

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        if (isInscription && formData.get("accepteDonnees") !== "on") {
            setMessage("Veuillez accepter le traitement de vos données pour créer un compte.");
            return;
        }

        if (
            isInscription &&
            formData.get("password") !== formData.get("passwordConfirmation")
        ) {
            setMessage("Les mots de passe ne correspondent pas.");
            return;
        }

        setChargement(true);
        setMessage("");
        const donnees = Object.fromEntries(formData.entries());
        try {
            const profil = await api(isInscription ? "/api/auth/register" : "/api/auth/login", {
                method: "POST",
                body: JSON.stringify(isInscription
                    ? {
                    nom: donnees.nom,
                    prenom: donnees.prenom,
                    email: donnees.email,
                    password: donnees.password,
                    ville: donnees.ville,
                    dateNaissance: donnees.dateNaissance || null,
                    interesseFormation: donnees.interesseFormation === "on",    // what in the prompt?
                    }
                    : { email: donnees.email, password: donnees.password }),
            });
            navigate(profil.role === "ADMIN" ? "/admin/dashboard" : "/mon-compte");
        } catch (cause) {
            setMessage(cause.message || "La connexion a échoué. Vérifiez vos informations.");
        } finally {
            setChargement(false);
        }
    }

    function changerMode(nouveauMode) {
        setMode(nouveauMode);
        setMessage("");
        setAccepteDonnees(false);
    }

    return (
        <section>
            <TitreProps titre="Connexion et inscription" />
            <BannerHead />
            <Filarial titrePage={"Connexion et inscription"} />

            <section className="mx-auto px-5 py-12 sm:px-8 lg:py-16">
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
                            <p className="mt-5 leading-7 text-gray-100">
                                Créez un compte pour retrouver vos informations et vos
                                inscriptions. <br></br>Juste envie de visiter ? Vous pouvez continuer sans
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
                                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${mode === "connexion"
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
                                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition ${isInscription
                                    ? "bg-[#212684] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                Créer un compte
                            </button>
                        </div>

                        <div className="pt-7">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {isInscription
                                    ? "Créer un compte élève"
                                        : "Ravi de vous revoir"}
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {isInscription
                                    ? "Renseignez vos informations pour préparer votre espace."
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
                                                label="Date de naissance"
                                                name="dateNaissance"
                                                type="date"
                                                autoComplete="bday"
                                            />
                                            <label className="block text-sm font-medium text-gray-800">
                                                Sexe (facultatif)
                                                <select
                                                    className={fieldClassName}
                                                    name="sexe"
                                                    defaultValue=""
                                                    required={false}
                                                >
                                                    <option value="" disabled>
                                                        Choisir une option
                                                    </option>
                                                    <option value="femme">Femme</option>
                                                    <option value="homme">Homme</option>
                                                    <option value="autre">Autre</option>
                                                    <option value="non-binaire">Non-binaire</option>
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

                                {isInscription && (
                                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                                        <div className="flex items-start gap-3">
                                            <input
                                                id="accepteDonnees"
                                                name="accepteDonnees"
                                                type="checkbox"
                                                required
                                                checked={accepteDonnees}
                                                onChange={(event) =>
                                                    setAccepteDonnees(event.target.checked)
                                                }
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
                                )}

                                <button
                                    type="submit"
                                    disabled={chargement || (isInscription && !accepteDonnees)}
                                    className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#161b7d] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {chargement
                                        ? "Veuillez patienter…"
                                        : isInscription
                                        ? "Créer mon compte"
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

                            {!isInscription && (
                                <p className="mt-5 text-center text-sm text-gray-600">
                                    Pas encore de compte ?{" "}
                                    <button
                                        type="button"
                                        className="cursor-pointer font-semibold text-[#212684] underline underline-offset-2 hover:text-[#161b7d]"
                                        onClick={() => changerMode("inscription")}
                                    >
                                        Créer un compte
                                    </button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
