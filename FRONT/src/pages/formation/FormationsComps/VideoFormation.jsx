export default function VideoFormation() {
    return (
        <section className="bg-[#2f2a85] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 my-15">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                        À découvrir en images
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        La formation en vidéo
                    </h2>
                    <div aria-hidden="true" className="mt-3 h-1 w-16 rounded-full bg-white" />
                </div>
                <iframe
                    className="aspect-video w-full rounded-xl"
                    src="https://www.youtube.com/embed/CfbjPIsLt-M"
                    title="Vidéo de présentation de la formation MMI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    );
}