import { Link, useSearchParams } from "react-router-dom";

import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import Connexion from "./AuthComp/Connexion";
import Inscription from "./AuthComp/Inscription";
import BannerHead from "../../composants/bannerHead";

const ONGLETS = [
    { id: "connexion", label: "Connexion" },
    { id: "inscription", label: "Créer un compte" },
];

export default function Authentification() {
    // Le mode est lu dans l'URL : /auth?mode=inscription ouvre directement l'inscription
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get("mode") === "inscription" ? "inscription" : "connexion";
    const isInscription = mode === "inscription";

    function changerMode(nouveauMode) {
        setSearchParams(nouveauMode === "inscription" ? { mode: "inscription" } : {}, { replace: true });
    }

    // Navigation clavier entre les onglets (flèches gauche / droite)
    function handleKeyDown(event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const suivant = isInscription ? "connexion" : "inscription";
        changerMode(suivant);
        document.getElementById(`onglet-${suivant}`)?.focus();
    }

    // Affichage de la page
    return (
        <section>
            <TitreProps titre="Connexion et inscription" />
            <BannerHead />
            <Filarial titrePage={"Connexion et inscription"} />

            <section className="max-w-7xl mx-auto px-4 py-8 sm:px-8 sm:py-12 lg:py-16">
                <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
                    <aside className="flex flex-col justify-between bg-[#212684] p-6 text-white sm:p-10">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                                Journée portes ouvertes
                            </p>
                            <h1 className="mt-3 text-2xl font-bold leading-tight sm:mt-4 sm:text-4xl">
                                Votre espace
                                <br className="hidden sm:block" /> personnel
                            </h1>
                            <p className="mt-4 leading-7 text-gray-100 sm:mt-5">
                                Créez un compte pour retrouver vos informations et vos
                                inscriptions aux évènements de la journée portes ouvertes.
                            </p>
                        </div>
                        <div className="mt-6 border-t border-white/30 pt-5 sm:mt-10 sm:pt-6">
                            <p className="text-sm text-gray-100">
                                Juste envie de visiter ? Certaines fonctionnalités
                                nécessitent un compte.
                            </p>
                            <Link
                                to="/"
                                className="mt-3 inline-flex font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-[#92c56e] hover:decoration-2"
                            >
                                Continuer en tant que visiteur
                            </Link>
                        </div>
                    </aside>

                    <div className="p-6 sm:p-10">
                        <div
                            role="tablist"
                            aria-label="Choisir entre connexion et création de compte"
                            className="flex flex-wrap gap-2 border-b border-gray-200 pb-5"
                        >
                            {ONGLETS.map((onglet) => {
                                const actif = mode === onglet.id;
                                return (
                                    <button
                                        key={onglet.id}
                                        id={`onglet-${onglet.id}`}
                                        type="button"
                                        role="tab"
                                        aria-selected={actif}
                                        aria-controls="panneau-auth"
                                        tabIndex={actif ? 0 : -1}
                                        onClick={() => changerMode(onglet.id)}
                                        onKeyDown={handleKeyDown}
                                        className={`min-h-11 cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition ${actif
                                            ? "bg-[#212684] text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        {onglet.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div id="panneau-auth" role="tabpanel" aria-labelledby={`onglet-${mode}`}>
                            {isInscription ? (
                                <Inscription />
                            ) : (
                                <Connexion onCreateAccount={() => changerMode("inscription")} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
