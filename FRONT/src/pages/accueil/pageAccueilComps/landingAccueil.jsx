import InfoJPO from "./InfoJPO";
import SeparatorHaut from "../../../composants/separatorhaut";
import SeparatorBas from "../../../composants/separatorbas";

import { Link } from "react-router-dom";

import { FaLocationArrow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function LandingAccueil({
    ecole = "Université Gustave Eiffel - Meaux",
    titre = "Journée Portes Ouvertes 2026",
    soustitre = "L'université Gustave Eiffel vous ouvre ses portes pour découvrir l'IUT de Meaux et ses formations.",
    backgroundImage = "/images/IUT.webp",
}) {
    return (
        <section>
            <section className="relative isolate flex min-h-[70svh] w-full items-center overflow-hidden py-20 sm:min-h-[65svh] sm:py-24 lg:min-h-[70svh]">
                <img
                    src={backgroundImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#2f2a85]/85 via-[#2f2a85]/65 to-[#2f2a85]/25" />

                <div className="relative z-10 mx-auto grid w-full max-w-[100rem] items-center gap-10 px-6 text-white sm:px-10 md:px-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-14">
                    <div className="text-center lg:text-left">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/85 sm:text-base md:text-lg">
                            {ecole}
                        </p>
                        <h1 className="mx-auto max-w-4xl text-center text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:mx-0 lg:text-left lg:text-7xl xl:text-8xl">
                            {titre}
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/80 sm:text-lg lg:mx-0 lg:mt-7 xl:text-xl">
                            {soustitre}
                        </p>
                    </div>

                    <aside className="hidden rounded-2xl border border-white/30 bg-white/10 p-7 text-left shadow-2xl backdrop-blur-md lg:block xl:p-9">
                        <h2 className="mt-2 text-2xl text-center font-extrabold leading-tight xl:text-3xl">
                            Venez découvrir l’IUT de Meaux
                        </h2>
                        <p className="mt-4 text-center font-semibold text-white/90">
                            Adresse : 17 Rue Jablinot, 77100 Meaux
                        </p>
                        <div className="mt-6 flex flex-col gap-3">
                            <Link
                                to="/auth"
                                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-white px-5 py-3 font-semibold text-[#2f2a85] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                S'inscrire à la JPO
                                <FaLocationArrow
                                    aria-hidden="true"
                                    className="transform mt-1 transition-transform duration-300 group-hover:rotate-45"
                                />
                            </Link>
                            <section className="flex flex-row gap-3">
                            <Link
                                to="/jpo"
                                className="w-full group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-white bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                Infos sur la JPO
                                <FaLocationArrow
                                    aria-hidden="true"
                                    className="transform mt-1 transition-transform duration-300 group-hover:rotate-45"
                                />
                            </Link>
                            <Link
                                to="/contact"
                                className="w-full group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-white bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                            >
                                Nous contacter
                                <IoMdMail 
                                    aria-hidden="true"
                                    className="transform mt-1 transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                            </section>
                        </div>
                    </aside>
                </div>
            </section>
            <div>
                <SeparatorHaut />
                <div className="lg:hidden"><InfoJPO /></div>
                <SeparatorBas />
            </div>
        </section>
    );
}