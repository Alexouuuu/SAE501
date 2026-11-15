import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

export default function JPOPlanning() {
    // Présentation statique du programme JPO
    return (
        <section>
            <TitreProps titre="Programme de la JPO" />
            <BannerHead />
            <Filarial titrePage="Programme de la JPO" />
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                <div className="mb-8 rounded-2xl bg-[#212684] p-7 text-white sm:p-9">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Journée portes ouvertes</p>
                    <h1 className="mt-3 text-3xl font-bold">Programme en préparation</h1>
                    <p className="mt-3 max-w-2xl leading-7 text-blue-50">
                        Le programme détaillé de la journée portes ouvertes sera bientôt publié.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
                    <div>
                        <div className="mb-5">
                            <h2 className="text-2xl font-bold text-gray-900">Activités proposées</h2>
                            <p className="mt-1 text-gray-600">Les activités seront présentées ici dès la publication du programme.</p>
                        </div>
                        {/* État vide statique en attendant la publication des activités. */}
                        <p className="rounded-xl border border-dashed border-gray-300 p-6 text-gray-600">Aucune activité n’est affichée pour le moment.</p>
                    </div>

                    {/* Aperçu statique du planning personnel */}
                    <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6">
                        <h2 className="text-xl font-bold text-gray-900">Mon planning</h2>
                        <p className="mt-1 text-sm text-gray-600">Votre sélection d’activités apparaîtra ici.</p>
                        <p className="mt-4 text-sm font-semibold text-[#3c3792]">0 activité</p>
                        <p className="mt-4 text-sm text-gray-600">Aucune activité sélectionnée.</p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
