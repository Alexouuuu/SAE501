import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { Evenement } from "../evenements";

// Nombre d'activités mises en avant sur la page JPO
const NB_APERCU = 3;

export default function JPOActivites() {
    const apercu = [...Evenement]
        .sort((a, b) => a.debut - b.debut || a.fin - b.fin)
        .slice(0, NB_APERCU);

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
                        {Evenement.length} {Evenement.length === 1 ? "activité est prévue" : "activités sont prévues"} pendant la journée.
                        Consultez les horaires et les salles, puis inscrivez-vous à celles qui vous intéressent.
                    </p>
                    <Link
                        to="/planning-jpo"
                        className="group mt-7 flex w-fit items-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                    >
                        Voir le programme complet
                        <FaLocationArrow aria-hidden="true" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                    </Link>
                </div>

                {/* Aperçu : l'horaire en tête de ligne, puis l'activité et sa salle */}
                <ul className="md:order-1">
                    {apercu.map((evenement) => (
                        <li key={evenement.idEvenement} className="border-t border-[#2f2a85]/20 first:border-t-0">
                            <Link
                                to={`/planning-jpo/${evenement.idEvenement}`}
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
