
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

export default function JPO() {
    // Présentation de la page événements
    return (
        <section>
            <TitreProps titre={"JPO"} />
            <BannerHead />
            <Filarial titrePage={"JPO"} />
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
                <div className="mb-10 flex flex-col gap-5 rounded-2xl bg-[#212684] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">À ne pas manquer</p>
                        <h1 className="mt-2 text-3xl font-bold">Journée portes ouvertes</h1>
                        <p className="mt-2 max-w-2xl text-blue-50">Découvrez la formation et préparez votre visite en choisissant les rencontres qui vous intéressent.</p>
                    </div>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">Tous les événements de la JPO</h2>
                {/* Affiche l'état vide tant qu'aucun contenu local n'est défini. */}
                <p className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">Aucun événement n’est annoncé pour le moment.</p>
            </div>
        </section>
    );
}