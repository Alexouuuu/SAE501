import JPOHero from "./JPOcomps/JPOhero"
import JPOInfos from "./JPOcomps/JPOInfos";
import JPOActivites from "./JPOcomps/JPOActivites";
import FAQ from "../accueil/pageAccueilComps/FAQ"
import JPOancienne from "./JPOcomps/JPOancienne";
import JPOexplications from "./JPOcomps/JPOexplications";

import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import Espacement from "../../composants/espacement"

import SeparatorHaut from "../../composants/separatorhaut";
import SeparatorBas from "../../composants/separatorbas";

// gsap
// idJPO
// titre
// date
// inscription possible

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JPO() {

    const JPORef = useRef(null);

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            gsap.utils.toArray(".fadeInOnScroll").forEach((element) => {
                gsap.fromTo(
                    element,
                    { autoAlpha: 0 },
                    {
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, JPORef);

        return () => context.revert();
    }, []);

    // Présentation de la page événements
    return (
        <section ref={JPORef}>
            <TitreProps titre={"JPO"} />
            <JPOHero />
            <Filarial titrePage={"JPO"} />

            <JPOInfos /> {/*pas besoin de l'anim car on le voit direct*/}

            <SeparatorHaut />
            <JPOexplications />
            <SeparatorBas />
            <Espacement />

            <section className="fadeInOnScroll">
                <JPOActivites />
            </section>

            <section className="fadeInOnScroll">
                <Espacement />
                <SeparatorHaut />
                <JPOancienne />
                <SeparatorBas />
                <Espacement />
            </section>



            <section className="fadeInOnScroll">
                <FAQ />
            </section>
        </section>
    );
}