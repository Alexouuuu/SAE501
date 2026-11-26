import SeparatorHaut from "../../../composants/separatorhaut";
import SeparatorBas from "../../../composants/separatorbas";

import { Link } from "react-router-dom";

import { FaLocationArrow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

import bg from "../../../images/IUT.webp"

const boutonSecondaire = "group gap-3 whitespace-nowrap inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-4 text-center font-semibold transition-colors hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function LandingAccueil({
    titre = "BUT MMI. JPO 2026",
    soustitre = "L'université Gustave Eiffel vous ouvre ses portes pour découvrir la formation BUT MMI à l'IUT de Meaux.",
    date = "Date et horaires à confirmer",
    adresse = "17 rue Jablinot, 77100 Meaux",
    backgroundImage = bg,
}) {
    return (
        <section>
            <div className="relative isolate flex min-h-[70svh] w-full items-center overflow-hidden py-20 sm:py-24">
                <img
                    src={backgroundImage}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                />
                {/* Voile uni sur petit écran, plus dense à gauche (côté texte) sur grand écran */}
                <div className="absolute inset-0 -z-10 bg-[#2f2a85]/80 lg:bg-transparent lg:bg-linear-to-r lg:from-[#2f2a85]/90 lg:via-[#2f2a85]/70 lg:to-[#2f2a85]/40" />

                <div className="mx-auto w-full max-w-[100rem] px-6 text-left text-white sm:px-10 md:px-16">
                    <h1 className="max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-[5.25rem] 2xl:text-8xl">
                        {titre}
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg xl:text-xl">
                        {soustitre}
                    </p>

                    <p className="mt-6 leading-7">
                        <span className="block text-lg font-bold sm:text-xl">{date}</span>
                        <span className="block text-white/90">{adresse}</span>
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                        <Link
                            to="/auth"
                            className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-md bg-[#00936e] px-7 text-xl font-bold transition-colors hover:bg-[#92c56e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            S’inscrire à la JPO
                            <FaLocationArrow
                                aria-hidden="true"
                                className="mt-1 transform transition-transform duration-300 group-hover:rotate-45"
                            />
                        </Link>
                        <Link to="/JPO/jpo-details" className={boutonSecondaire}>
                            Infos sur la JPO
                            <CiCircleInfo
                                aria-hidden="true"
                                className="mt-1 shrink-0 scale-110 transform transition-transform duration-300 group-hover:scale-130"
                            />
                        </Link>
                        <Link to="/contact" className={boutonSecondaire}>
                            Nous contacter
                            <IoMdMail
                                aria-hidden="true"
                                className="mt-1 shrink-0 transform transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <SeparatorHaut />
                <div className="w-full my-5"></div>
                <SeparatorBas />
            </div>
        </section>
    );
}
