import { useState } from "react";
import { Link } from "react-router-dom";

import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
import Connexion from "./AuthComp/Connexion";
import Inscription from "./AuthComp/Inscription";

export default function Authentification() {
    const [mode, setMode] = useState("connexion");

    const isInscription = mode === "inscription";

    function changerMode(nouveauMode) {
        setMode(nouveauMode);
    }

    // Affichage de la page
    return (
        <section>
            <TitreProps titre="Connexion et inscription" />
            <BannerHead />
            <Filarial titrePage={"Connexion et inscription"} />

            <section className="max-w-7xl mx-auto px-5 py-12 sm:px-8 lg:py-16">
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
                                inscriptions aux évènements de la journée porte ouverte. <br></br><br></br>Juste envie de visiter ? Vous pouvez continuer sans
                                compte mais n'aurez pas accès à toute les fonctionnalités.
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
                                Connexion
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

                        {isInscription ? (
                            <Inscription />
                        ) : (
                            <Connexion onCreateAccount={() => changerMode("inscription")} />
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
}
