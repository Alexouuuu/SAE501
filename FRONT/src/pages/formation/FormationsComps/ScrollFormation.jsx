import { useLayoutEffect, useRef } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import gsap from "gsap";

export default function ScrollFormation() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.fromTo(
                ".fleche",
                { y: -8 },
                {
                    y: 8,
                    duration: 0.8,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                }
            );
            gsap.fromTo(
                ".texte",
                { autoAlpha: 0, y: -10 },
                { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );
        }, sectionRef);

        return () => context.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="my-15 scroll-mt-8 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
            aria-label="Défiler pour découvrir la formation"
        >
            <div className="flex items-center justify-center gap-5 sm:gap-8 md:gap-12">
                <FaArrowDownLong
                    aria-hidden="true"
                    className="fleche shrink-0 text-4xl text-[#2f2a85] sm:text-5xl md:text-6xl lg:text-7xl"
                />
                <p className="texte text-2xl font-extrabold uppercase tracking-widest text-[#2f2a85] sm:text-3xl md:text-4xl lg:text-5xl">
                    Scroll plus bas
                </p>
                <FaArrowDownLong
                    aria-hidden="true"
                    className="fleche shrink-0 text-4xl text-[#2f2a85] sm:text-5xl md:text-6xl lg:text-7xl"
                />
            </div>
        </section>
    );
}