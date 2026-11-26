import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bg from "../../../images/IUT.webp";

const boutonSecondaire = "group gap-3 whitespace-nowrap inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-4 text-center font-semibold transition-colors hover:bg-white hover:text-[#2f2a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

// Section ciblée par l'indicateur de défilement (AnimationMMI)
const CIBLE = "#decouvrir-formation";

export default function HeroFormation() {
    const flecheRef = useRef(null);

    // Quelques rebonds pour attirer l'œil, puis l'animation s'arrête.
    // Rien du tout si le système demande moins de mouvement.
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.fromTo(
                flecheRef.current,
                { y: -4 },
                { y: 4, duration: 0.6, ease: "power1.inOut", repeat: 5, yoyo: true, delay: 1 }
            );
        });
        return () => mm.revert();
    }, []);

    // Le site utilise ScrollSmoother : on passe par lui pour défiler jusqu'à la section.
    // On s'arrête quand le titre « C'est quoi la formation MMI ? » est entièrement apparu
    // (label « titreComplet » de la timeline d'AnimationMMI), sinon on arrive sur un écran blanc.
    const allerALaSuite = (event) => {
        const smoother = ScrollSmoother.get();
        if (!smoother) return; // sans ScrollSmoother, l'ancre #decouvrir-formation suffit
        event.preventDefault();

        const animation = ScrollTrigger.getById("animation-mmi");
        const position = animation?.labelToScroll("titreComplet");
        if (Number.isFinite(position)) smoother.scrollTo(position, true);
        else smoother.scrollTo(CIBLE, true, "top top");
    };

    return (
        <header className="relative isolate flex min-h-[70svh] w-full items-center overflow-hidden py-20 sm:py-24">
            <img
                src={bg}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
            />
            {/* Voile uni sur petit écran, plus dense à gauche (côté texte) sur grand écran */}
            <div className="absolute inset-0 -z-10 bg-[#2f2a85]/80 lg:bg-transparent lg:bg-linear-to-r lg:from-[#2f2a85]/90 lg:via-[#2f2a85]/70 lg:to-[#2f2a85]/40" />

            <div className="mx-auto w-full max-w-[100rem] px-6 text-left text-white sm:px-10 md:px-16">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                    Métiers du multimédia et de l’internet
                </p>
                <h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl xl:text-[5.25rem] 2xl:text-8xl">
                    BUT MMI
                    <span className="mt-3 block text-2xl font-bold tracking-normal sm:text-3xl xl:text-4xl">
                        Créez, développez, racontez.
                    </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg xl:text-xl">
                    Une formation pluridisciplinaire pour imaginer et réaliser
                    des projets numériques : du développement web au design,
                    de l’audiovisuel à la création 3D.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <Link to="/MMI/visite-virtuelle" className={boutonSecondaire}>
                        Visiter le bâtiment
                        <FaLocationArrow
                            aria-hidden="true"
                            className="mt-1 transform transition-transform duration-300 group-hover:rotate-45"
                        />
                    </Link>
                </div>
            </div>

            {/* Indicateur de défilement : visible dès l'arrivée, mène à la présentation de la formation */}
            <a
                href={CIBLE}
                onClick={allerALaSuite}
                className="absolute bottom-5 left-1/2 flex min-h-11 -translate-x-1/2 items-center gap-2 rounded-full px-4 text-sm font-semibold text-white underline-offset-4 hover:underline hover:decoration-mmi-vert-clair hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Découvrir la formation
                <span ref={flecheRef} aria-hidden="true" className="inline-flex">
                    <FaArrowDownLong />
                </span>
            </a>
        </header>
    );
}
