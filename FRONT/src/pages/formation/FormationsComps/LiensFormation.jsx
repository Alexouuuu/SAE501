import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function LiensFormation() {
    return (
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 my-15">
            <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
                <article className="flex min-w-0 flex-col items-start overflow-hidden rounded-2xl bg-[#2f2a85] p-10 text-white sm:p-12 lg:p-14">
                    <p className="max-w-full text-sm font-semibold uppercase tracking-[0.12em] text-white sm:tracking-[0.16em]">
                        Envie de découvrir les lieux ?
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">Visitez le bâtiment</h2>
                    <p className="mt-3 flex-1 leading-7 text-gray-100">
                        Explorez la visite virtuelle et découvrez les espaces de
                        l’établissement.
                    </p>
                    <Link
                        to="/visite-virtuelle"
                        className="mt-6 inline-flex items-center gap-2 font-semibold underline decoration-gray-300 underline-offset-4 hover:text-gray-200"
                    >
                        Accéder à la visite virtuelle <FaArrowRight aria-hidden="true" />
                    </Link>
                </article>

                <article className="flex min-w-0 flex-col items-start overflow-hidden rounded-2xl border border-gray-200 p-10 sm:p-12 lg:p-14">
                    <p className="max-w-full text-sm font-semibold uppercase tracking-[0.12em] text-[#2f2a85] sm:tracking-[0.16em]">
                        Une question sur la formation ?
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">Parlons-en</h2>
                    <p className="mt-3 flex-1 leading-7 text-gray-600">
                        Pour les renseignements pratiques, le lieu et les contacts,
                        consultez la page de contact de l’établissement.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-[#2f2a85] underline decoration-[#2f2a85] underline-offset-4 hover:text-[#0097d7] hover:decoration-[#0097d7]"
                    >
                        Accéder aux informations de contact <FaArrowRight aria-hidden="true" />
                    </Link>
                </article>
            </div>
        </section>
    );
}