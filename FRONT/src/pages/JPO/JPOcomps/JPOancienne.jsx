import { FaLocationArrow } from "react-icons/fa";
const youtube = "https://www.youtube.com/@iutmlv6116"

export default function JPOancienne() {
    return (
        <section className="bg-[#2f2a85] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div className="gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                        Retour en arrière
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        LA JPO 2025
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <p className="mt-6 text-lg text-white">
                        Envie de voir à quoi ressemblait la JPO de l'année dernière ? Cette vidéo te plonge au cœur de l'événement et te donne un aperçu de ce qui t'attend cette année !
                    </p>
                    <a
                        href={youtube}
                        target='_blank'
                        className="group mt-7 cursor-pointer inline-flex items-center gap-3 border-white border px-5 py-3 font-semibold text-[#24206b] transition bg-white hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                    >
                        Chaîne youtube
                        <FaLocationArrow color="#24206b" className="mt-1 transform transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                </div>
                <iframe
                    className="aspect-video w-full rounded-xl"
                    src="https://www.youtube.com/embed/OU2niH-FJI4"
                    title="Vidéo de présentation de la formation MMI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    )
}