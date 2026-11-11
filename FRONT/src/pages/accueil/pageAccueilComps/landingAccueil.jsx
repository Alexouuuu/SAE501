import InfoJPO from "./InfoJPO";
import SeparatorHaut from "../../../composants/separatorhaut";
import SeparatorBas from "../../../composants/separatorbas";

export default function LandingAccueil({
    ecole = "Journée Portes Ouvertes 2026",
    titre = "Université Gustave Eiffel",
    soustitre = "17 Rue Jablinot, 77100 Meaux",
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

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center text-white sm:px-10 md:px-16">
                    <p className="mb-3 text-base font-semibold uppercase tracking-wider sm:text-lg md:text-xl">
                        {ecole}
                    </p>
                    <h1 className="mx-auto max-w-5xl text-center text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {titre}
                    </h1>
                    <p className="mt-5 text-base text-white/70 font-semibold uppercase tracking-wider sm:text-lg md:text-xl">
                        {soustitre}
                    </p>
                </div>
            </section>
            {/*separator*/}
            <SeparatorHaut/>
            <InfoJPO/>
            <SeparatorBas/>
        </section>
    );
}