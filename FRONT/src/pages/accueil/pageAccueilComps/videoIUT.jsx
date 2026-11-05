// maxime derènes

import { FaLocationArrow } from "react-icons/fa";

const youtube = "https://www.youtube.com/@iutmlv6116"
const videos = [
    {
        id: "OU2niH-FJI4",
        title: "Vidéo de présentation de l'IUT - 1",
    },
    {
        id: "wEAXoNaJffQ",
        title: "Vidéo de présentation de l'IUT - 2",
    },
];

export default function VideoIUT() {
    return (
        <section
            aria-labelledby="videos-iut-title"
            className="bg-[#2f2a85] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 sm:mb-10">
                    <h2
                        id="videos-iut-title"
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Le site de Meaux en vidéo
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                </header>

                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="overflow-hidden rounded-xl bg-black shadow-lg"
                        >
                            <iframe
                                className="aspect-video w-full"
                                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                                title={video.title}
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    ))}
                </div>
                <a
                    href={youtube}
                    target='_blank'
                    className="mt-7 cursor-pointer inline-flex items-center gap-3 border-white border px-5 py-3 font-semibold text-white transition hover:bg-[#24206b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2a85]"
                >
                    Chaîne youtube
                    <FaLocationArrow color="white" />
                </a>
            </div>
        </section>
    );
}
