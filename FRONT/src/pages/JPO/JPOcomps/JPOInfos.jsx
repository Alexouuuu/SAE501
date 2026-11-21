import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import "../JPO.css";

const jpo = {
    id: "2026",
    titre: "Journée Portes Ouvertes MMI",
    date: "Date à confirmer",
    inscriptionPossible: false, // false = affiche bouton auth
};

const IsInscrit = false; // true
const IsConnected = false; // true = cache btn inscription

export default function JPOInfos() {
    return (
        <section className="pb-35 jpo-infos-section overflow-hidden py-12 text-[#2f2a85]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f2a85]/75">
                        Informations pratiques
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#2f2a85] sm:text-4xl">
                        {jpo.titre}
                    </h2>

                    <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <dt className="text-md font-bold uppercase tracking-wider text-[#2f2a85]/70">
                                Année
                            </dt>
                            <dd className="mt-2 font-semibold text-[#2f2a85]">{jpo.id}</dd>
                        </div>
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <dt className="text-md font-bold uppercase tracking-wider text-[#2f2a85]/70">
                                Date
                            </dt>
                            <dd className="mt-2 font-semibold text-[#2f2a85]">{jpo.date}</dd>
                        </div>
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <dt className="text-md font-bold uppercase tracking-wider text-[#2f2a85]/70">
                                Adresse
                            </dt>
                            <dd className="mt-2 font-semibold leading-6 text-[#2f2a85]">
                                Université Gustave Eiffel
                                <br />
                                17 rue Jablinot, 77100 Meaux
                            </dd>
                        </div>
                        <div className="rounded-xl border border-white/25 bg-white/10 p-4">
                            <dt className="text-md font-bold uppercase tracking-wider text-[#2f2a85]/70">
                                Inscription
                            </dt>
                            <dd className="mt-2 font-semibold text-[#2f2a85]">
                                {!jpo.inscriptionPossible ? (
                                    <dd className="mt-2 font-semibold leading-6 text-[#2f2a85]">
                                        Fermée
                                    </dd>
                                ) : IsInscrit === false && IsConnected === false ? (
                                    <Link
                                        to="/auth"
                                        className="group inline-flex w-auto items-center justify-center gap-2 bg-[#00936e] px-3 py-3 my-3 text-center text-sm font-semibold text-white transition hover:bg-[#92c56e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white "
                                    >
                                        S’inscrire à la JPO
                                        <FaLocationArrow
                                            aria-hidden="true"
                                            className="mt-1 transition-transform duration-300 group-hover:rotate-45"
                                        />
                                    </Link>
                                ) : (
                                    "Ouverte"
                                )}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
