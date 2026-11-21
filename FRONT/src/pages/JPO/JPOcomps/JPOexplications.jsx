const img = "/images/placeholder.webp"
const raisons = [
    "Découvrir le contenu et les projets de la formation BUT MMI.",
    "Visiter les locaux et les espaces du campus de Meaux.",
    "Échanger avec les étudiants et l’équipe pédagogique.",
    "Poser vos questions sur la formation et la vie étudiante.",
];

export default function JPOexplications() {
    return (
        <section className="w-full bg-[#2f2a85] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
                <div>
                    <h3>
                        <span className="text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
                            Pourquoi participer ?
                        </span>
                    </h3>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        JPO 2026
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <p className="mt-5 text-base leading-7 text-white sm:text-lg">
                        En venant, vous pourrez :
                    </p>
                    <ul className="mt-6 grid gap-3">
                        {raisons.map((raison) => (
                            <li
                                key={raison}
                                className="flex items-start gap-3 rounded-lg bg-white p-4 text-[#2f2a85]"
                            >
                                <span aria-hidden="true" className="shrink-0 text-base font-bold text-black sm:text-lg">
                                    •
                                </span>
                                <p className="text-sm font-medium leading-5 uppercase text-black sm:text-base sm:leading-6 lg:text-md lg:leading-7">
                                    {raison}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-slate-100 text-center text-slate-500">
                    <img
                        src={img}
                        alt="Illustration du parcours Développement web et dispositifs interactifs"
                        className="h-full w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}