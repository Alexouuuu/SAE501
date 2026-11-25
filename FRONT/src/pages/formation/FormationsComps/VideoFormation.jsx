import { FaLocationArrow } from "react-icons/fa";
const youtube = "https://www.youtube.com/@iutmlv6116"

export default function VideoFormation() {
    return (
        <section className="bg-[#2f2a85] px-5 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div className="gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                        À découvrir en images
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        La formation en vidéo
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                    <p className="mt-6 text-lg text-white">
                        Cette vidéo vous présente la formation MMI, ses objectifs, les compétences que vous allez acquérir et la poursuite d'étude possible.
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
                <div className="relative"> {/*coins blancs*/}
                    <span aria-hidden="true" className="pointer-events-none absolute z-10 -top-4 -right-4 h-12 w-12 rounded-tr-2xl border-t-4 border-r-4 border-white sm:h-16 sm:w-16" />
                    <span aria-hidden="true" className="pointer-events-none absolute z-10 -bottom-4 -left-4 h-12 w-12 rounded-bl-2xl border-b-4 border-l-4 border-white sm:h-16 sm:w-16" />
                    <iframe
                        className="block aspect-video w-full rounded-xl"
                        src="https://www.youtube.com/embed/CfbjPIsLt-M"
                        title="Vidéo de présentation de la formation MMI"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}