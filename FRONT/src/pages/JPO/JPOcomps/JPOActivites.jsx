import { Link } from "react-router-dom";
import { FaLocationArrow, FaRegCalendarAlt } from "react-icons/fa";
import { Evenement } from "../evenements";

// Nombre d'activités mises en avant sur la page JPO
const NB_APERCU = 3;

export default function JPOActivites() {
    const apercu = [...Evenement]
        .sort((a, b) => a.debut - b.debut || a.fin - b.fin)
        .slice(0, NB_APERCU);
    const estVide = Evenement.length === 0;

    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
                {/* Texte en premier sur mobile, à droite sur grand écran */}
                <div className="flex flex-col items-center text-center md:order-2 md:items-start md:text-left">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2f2a85] sm:text-4xl lg:text-5xl">
                        Au programme
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-[#2f2a85]" />
                    <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                        {estVide ? (
                            <>
                                Le programme de la journée n’est pas encore publié.
                                Les ateliers, démonstrations et visites seront annoncés ici très bientôt.
                            </>
                        ) : (
                            <>
                                {Evenement.length} {Evenement.length === 1 ? "activité est prévue" : "activités sont prévues"} pendant la journée.
                                Consultez les horaires et les salles, puis inscrivez-vous à celles qui vous intéressent.
                            </>
                        )}
                    </p>
                    {/* Inutile d'envoyer vers un programme vide : on propose la visite 3D à la place */}
                    <Link
                        to={estVide ? "/MMI/visite-virtuelle" : "/JPO/planning-jpo"}
                        className="group mt-7 flex w-fit items-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                    >
                        {estVide ? "Visiter l’IUT en 3D en attendant" : "Voir le programme complet"}
                        <FaLocationArrow aria-hidden="true" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                </div>

                {estVide && (
                    <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-[#2f2a85]/30 bg-[#2f2a85]/5 px-6 py-12 text-center md:order-1">
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2f2a85] text-white">
                            <FaRegCalendarAlt aria-hidden="true" className="h-7 w-7" />
                        </span>
                        <p className="mt-5 text-xl font-bold text-[#2f2a85] sm:text-2xl">
                            Programme bientôt disponible
                        </p>
                        <p className="mt-2 text-slate-600">Horaires et salles à venir</p>
                    </div>
                )}

                {/* Aperçu : l'horaire en tête de ligne, puis l'activité et sa salle */}
                <ul className={estVide ? "hidden" : "md:order-1"}>
                    {apercu.map((evenement) => (
                        <li key={evenement.idEvenement} className="border-t border-[#2f2a85]/20 first:border-t-0">
                            <Link
                                to={`/JPO/planning-jpo/${evenement.idEvenement}`}
                                className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f2a85] sm:grid-cols-[8rem_1fr]"
                            >
                                <span className="text-lg font-extrabold text-[#2f2a85] sm:text-xl">
                                    {evenement.debut} h – {evenement.fin} h
                                </span>
                                <span>
                                    <span className="block text-xl font-bold leading-snug text-slate-900 group-hover:underline group-hover:underline-offset-4 sm:text-2xl">
                                        {evenement.titre}
                                    </span>
                                    <span className="mt-1 block text-slate-600">Salle {evenement.salle}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
