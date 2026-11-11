import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

export default function InfoJPO() {
    return (
        <section className="bg-[#2f2a85] px-5 pt-12 pb-24 text-white sm:px-8 sm:pt-16 sm:pb-28 lg:px-12 lg:pb-32">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Venez découvrir l’IUT de Meaux
                    </h2>
                    <p className="mt-3 font-semibold text-white">
                        Adresse : 17 Rue Jablinot, 77100 Meaux
                    </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                        to="/auth"
                        className="group inline-flex min-h-12 items-center justify-center gap-3 bg-white px-5 py-3 font-semibold text-[#2f2a85] transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        S'inscrire à la JPO
                        <FaLocationArrow
                            aria-hidden="true"
                            className="transform transition-transform duration-300 group-hover:rotate-45"
                        />
                    </Link>
                    <Link
                        to="/jpo"
                        className="group inline-flex min-h-12 items-center justify-center gap-3 border-2 border-white bg-transparent px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        Infos sur la JPO
                        <FaLocationArrow
                            aria-hidden="true"
                            className="transform transition-transform duration-300 group-hover:rotate-45"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
