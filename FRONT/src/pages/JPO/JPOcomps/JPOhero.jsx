const bg = "../images/IUT.webp";

export default function JPOHero() {
    return (
        <header className="relative isolate overflow-hidden bg-[#2f2a85] text-white min-h-100">
            <img src={bg} alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-[#2f2a85]/60" />
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Université Gustave Eiffel - Meaux
                    </p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
                        JPO 2026
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-7 text-gray-100 sm:text-lg">
                        Une occasion simple et conviviale de découvrir nos activités et nos formations.
                    </p>
                </div>
            </div>
        </header>
    );
}