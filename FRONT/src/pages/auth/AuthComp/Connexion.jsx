import { useState } from "react";
import Champ from "./Champ";
import MessageInfo from "./MessageInfo";
import useValidation from "./useValidation";

const lienClassName =
    "cursor-pointer font-semibold text-[#212684] underline underline-offset-4 hover:decoration-[#92c56e] hover:decoration-2";

export default function Connexion({ onCreateAccount }) {
    const [message, setMessage] = useState("");
    const { erreurs, surSortie, surSaisie, validerTout } = useValidation();

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("");
        if (!validerTout(event.currentTarget)) return;

        setMessage("Le service de connexion n'est pas encore disponible. Merci de réessayer plus tard.");
    }

    return (
        <div className="pt-7">
            <h2 className="text-2xl font-bold text-gray-900">Ravi de vous revoir</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
                Connectez-vous à votre espace.
            </p>

            <form
                className="mt-7 space-y-5"
                noValidate
                onSubmit={handleSubmit}
                onBlur={surSortie}
                onChange={surSaisie}
            >
                <Champ
                    label="Adresse e-mail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    erreur={erreurs.email}
                />
                <div>
                    <Champ
                        label="Mot de passe"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        erreur={erreurs.password}
                    />
                    <div className="mt-2 text-right">
                        <button
                            type="button"
                            className={`${lienClassName} text-sm`}
                            onClick={() =>
                                setMessage("La réinitialisation du mot de passe n'est pas encore disponible.")
                            }
                        >
                            Mot de passe oublié ?
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-md bg-[#212684] px-5 py-3 font-semibold text-white transition hover:bg-[#3c3792] focus:outline-none focus:ring-2 focus:ring-[#212684] focus:ring-offset-2"
                >
                    Se connecter
                </button>
            </form>

            {message && <MessageInfo>{message}</MessageInfo>}

            <p className="mt-5 text-center text-sm text-gray-600">
                Pas encore de compte ?{" "}
                <button type="button" className={lienClassName} onClick={onCreateAccount}>
                    Créer un compte
                </button>
            </p>
        </div>
    );
}
