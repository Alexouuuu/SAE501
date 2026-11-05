// maxime derènes

import { Link } from "react-router-dom";
const img = "/images/paccueil/code1.webp";

import { FaLocationArrow } from "react-icons/fa";

export default function PrecisionFormation() {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">

                <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-slate-100 text-center text-slate-500">
                    <img
                        src={img}
                        alt="Illustration du parcours Développement web et dispositifs interactifs"
                        className="h-full w-full rounded-2xl object-cover"
                    />
                </div>

                <div>
                    <h3>
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#2f2a85]">
                            Site de Meaux
                        </span>
                    </h3>
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#2f2a85] sm:text-4xl lg:text-5xl">
                        Développement web et dispositifs interactifs
                    </h2>
                    <p className="mt-5 max-w-xl leading-7 text-slate-600 sm:text-lg">
                        L'Université Gustave Eiffel de Meaux propose exclusivement la formation BUT MMI spécialisée en Développement web
                        et dispositifs interactifs.
                        <br></br><br></br>Sur le site de Meaux, ce parcours vous forme à concevoir et développer des sites web,
                        des applications et des expériences interactives en associant compétences techniques, créativité et travail en équipe.
                    </p>
                    <Link
                        to="/formation"
                        className="mt-7 inline-flex items-center gap-3 bg-[#2f2a85] px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                    >
                        Découvrir la formation
                        <FaLocationArrow color="white" />
                    </Link>
                </div>
                
            </div>
        </section>
    );
}

