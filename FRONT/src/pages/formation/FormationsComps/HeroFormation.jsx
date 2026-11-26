import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

import bg from "../../../images/IUT.webp";

const boutonSecondaire = "group gap-3 whitespace-nowrap inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-4 text-center font-semibold transition-colors hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function HeroFormation() {
    return (
        <header className="relative isolate flex min-h-[70svh] w-full items-center overflow-hidden py-20 sm:py-24">
            <img
                src={bg}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            {/* Voile uni sur petit écran, plus dense à gauche (côté texte) sur grand écran */}
            <div className="absolute inset-0 -z-10 bg-[#2f2a85]/80 lg:bg-transparent lg:bg-linear-to-r lg:from-[#2f2a85]/90 lg:via-[#2f2a85]/70 lg:to-[#2f2a85]/40" />

            <div className="mx-auto w-full max-w-[100rem] px-6 text-left text-white sm:px-10 md:px-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                    Métiers du multimédia et de l’internet
                </p>
                <h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-[5.25rem] 2xl:text-8xl">
                    BUT MMI
                    <span className="mt-3 block text-2xl font-bold tracking-normal sm:text-3xl xl:text-4xl">
                        Créez, développez, racontez.
                    </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg xl:text-xl">
                    Une formation pluridisciplinaire pour imaginer et réaliser
                    des projets numériques : du développement web au design,
                    de l’audiovisuel à la création 3D.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <Link to="/MMI/visite-virtuelle" className={boutonSecondaire}>
                        Visiter le bâtiment
                        <FaLocationArrow
                            aria-hidden="true"
                            className="mt-1 transform transition-transform duration-300 group-hover:rotate-45"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
