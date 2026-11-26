import bg from "../../../images/IUT.webp";

export default function JPOHero() {
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
                    Université Gustave Eiffel - Meaux
                </p>
                <h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-[5.25rem] 2xl:text-8xl">
                    JPO 2026
                    <span className="mt-3 block text-2xl font-bold tracking-normal sm:text-3xl xl:text-4xl">
                        Venez à notre rencontre.
                    </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg xl:text-xl">
                    Une occasion simple et conviviale de découvrir nos activités et nos formations.
                </p>
            </div>
        </header>
    );
}
