// maxime derènes

import { useEffect, useRef } from "react";
import { FaCode, FaPenFancy } from "react-icons/fa6";
import { MdOutlineVideoLibrary } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Enseignements() {
    const introRef = useRef(null);
    const introWordsRef = useRef([]);
    const introDecorRef = useRef([]);
    const sectionRef = useRef(null);
    const slidesRef = useRef([]);
    const introWords = "C’est quoi la formation MMI ?".split(" ");
    const introDecorations = [
        { symbol: "?", position: "left-0 top-0 text-3xl text-[#00936e] sm:-left-12 sm:-top-8 sm:text-7xl" },
        { symbol: "?", position: "left-1/2 -top-1 -translate-x-1/2 -rotate-12 text-2xl text-[#2f2a85] sm:left-1/4 sm:-top-16 sm:translate-x-0 sm:text-6xl" },
        { symbol: "?", position: "bottom-0 left-0 rotate-12 text-3xl text-[#2f2a85] sm:-bottom-8 sm:-left-10 sm:text-6xl" },
        { symbol: "?", position: "right-0 top-0 -rotate-12 text-3xl text-[#00936e] sm:-right-12 sm:-top-8 sm:text-7xl" },
        { symbol: "?", position: "bottom-0 right-0 -rotate-12 text-3xl text-[#00936e] sm:-right-12 sm:-bottom-8 sm:text-7xl" },
    ];

    const enseign = [
        {
            id: 1,
            logo: <FaCode />,
            matiere: "Développement web",
            soustitre: "et intégration",
            description: "Concevoir et réaliser des sites web et des applications interactives en mobilisant les langages du web et les bonnes pratiques d'intégration.",
            image: "/images/paccueil/devweb.webp"
        },
        {
            id: 2,
            logo: <FaPenFancy />,
            matiere: "Création graphique",
            soustitre: "et infographie",
            description: "Maîtriser les fondamentaux du design visuel, élaborer une charte graphique et créer des supports de communication numérique.",
            image: "/images/paccueil/creationgraphique.webp"
        },
        {
            id: 3,
            logo: <MdOutlineVideoLibrary />,
            matiere: "Audiovisuel",
            soustitre: "et production numérique",
            description: "Écrire un scénario, réaliser un tournage, monter des vidéos et créer des effets visuels en maîtrisant toute la chaîne de production audiovisuelle.",
            image: "/images/paccueil/audiovisuel.webp"
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const slides = slidesRef.current.filter(Boolean);
        if (!section || slides.length === 0) return;

        const ctx = gsap.context(() => {
            const intro = introRef.current;
            const introWords = introWordsRef.current.filter(Boolean);
            const introDecorations = introDecorRef.current.filter(Boolean);

            if (intro && introWords.length > 0 && introDecorations.length > 0) {
                gsap.set(introWords, { autoAlpha: 0, y: 24 });
                gsap.set(introDecorations, { autoAlpha: 0, y: 16, scale: 0.6 });
            }

            // Placement initial des slides
            slides.forEach((slide, index) => {
                gsap.set(slide, {
                    xPercent: index === 0 ? 0 : 100,
                    autoAlpha: 0
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${window.innerHeight * (slides.length + 1)}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            if (intro && introWords.length > 0 && introDecorations.length > 0) {
                introWords.forEach((word, index) => {
                    tl.to([word, introDecorations[index]], {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "none",
                    }, index * 0.3);
                });

                tl.to(intro, {
                    autoAlpha: 0,
                    duration: 0.8,
                    ease: "none",
                }, ">+=0.4");
                tl.to(slides[0], {
                    xPercent: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: "none",
                }, "<");
            } else {
                gsap.set(slides[0], { autoAlpha: 1 });
            }

            // Animation de glissement horizontal vers la gauche
            slides.forEach((slide, index) => {
                if (index < slides.length - 1) {
                    const nextSlide = slides[index + 1];

                    tl.to(slide, {
                        xPercent: -100,
                        autoAlpha: 0,
                        duration: 1,
                        ease: "power2.inOut"
                    }, `+=0.4`); // Temps d'arrêt pour lecture

                    tl.to(nextSlide, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: 1,
                        ease: "power2.inOut"
                    }, "<");
                }
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black text-white">
            <div
                ref={introRef}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white px-6 text-center text-slate-950 sm:px-10"
            >
                <div className="relative w-full max-w-7xl px-8 py-12 sm:px-0 sm:py-0">
                    {introDecorations.map((decoration, index) => (
                        <span
                            key={`decoration-${index}`}
                            ref={(element) => (introDecorRef.current[index] = element)}
                            aria-hidden="true"
                            className={`pointer-events-none absolute z-10 inline-block font-bold opacity-0 ${decoration.position}`}
                        >
                            {decoration.symbol}
                        </span>
                    ))}
                    <h2
                        aria-label="C’est quoi la formation MMI ?"
                        className="relative text-3xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        {introWords.map((word, index) => (
                            <span
                                key={`${word}-${index}`}
                                ref={(element) => (introWordsRef.current[index] = element)}
                                aria-hidden="true"
                                className="mr-[0.22em] inline-block opacity-0"
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>
            </div>


            {/*Les slides avec les formations etc*/}
            {enseign.map((enseignement, index) => (
                <article
                    key={enseignement.id}
                    ref={(el) => (slidesRef.current[index] = el)}
                    className="absolute inset-0 flex h-full w-full min-w-0 flex-col justify-between p-5 sm:p-8 md:p-14 lg:p-20"
                >
                    {/* Image bg */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={enseignement.image}
                            alt={enseignement.matiere}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 flex min-w-0 max-w-full flex-col items-start">
                        <div className="flex w-fit max-w-full flex-col gap-1 rounded-xl bg-black/50 p-4 backdrop-blur-sm sm:p-6">
                            <span className="text-2xl text-white/80">{enseignement.logo}</span>
                            <h2 className="max-w-full wrap-break-word text-[clamp(1.5rem,10vw,2.5rem)] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                                {enseignement.matiere}
                            </h2>
                            {enseignement.soustitre && (
                                <span className="text-lg font-light text-white/80 sm:text-xl lg:text-3xl">
                                    {enseignement.soustitre}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 z-10 w-[calc(100%-2.5rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 text-center sm:relative sm:left-auto sm:top-auto sm:ml-auto sm:mt-auto sm:w-full sm:max-w-lg sm:translate-x-0 sm:translate-y-0 sm:pb-4 sm:text-right lg:max-w-2xl">
                        <div className="inline-block max-w-full rounded-xl bg-black/50 p-4 backdrop-blur-sm sm:p-6">
                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white drop-shadow-lg sm:mb-4 sm:text-sm">
                                <strong>En BUT MMI</strong>, on vous apprend à
                            </h3>
                            <p className="text-pretty text-xl font-medium leading-relaxed tracking-wide text-white drop-shadow-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                {enseignement.description}
                            </p>
                        </div>
                    </div>

                    {/* <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-mono text-white/60">
                        <span>0{index + 1} / 0{enseign.length}</span>
                    </div> */}
                </article>
            ))}
        </section>
    );
}