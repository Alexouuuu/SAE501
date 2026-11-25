// maxime derènes
// Hook partagé : fait apparaître en fondu les éléments ".fadeInOnScroll" au scroll

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useFadeInOnScroll(scopeRef, selector = ".fadeInOnScroll") {
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const mm = gsap.matchMedia();

            // pas d'animation si l'utilisateur a réduit les animations dans son système
            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // état de départ appliqué avant l'affichage (useLayoutEffect) => pas de flash
                gsap.set(selector, { autoAlpha: 0, y: 30 });

                // un seul système pour toutes les sections au lieu d'un ScrollTrigger par élément
                ScrollTrigger.batch(selector, {
                    start: "top 85%",
                    once: true, // le trigger est supprimé après l'animation
                    onEnter: (elements) =>
                        gsap.to(elements, {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            stagger: 0.15,
                            clearProps: "transform",
                        }),
                });
            });
        }, scopeRef);

        // revert() annule aussi le matchMedia et les ScrollTriggers créés dans le contexte
        return () => context.revert();
    }, [scopeRef, selector]);
}
