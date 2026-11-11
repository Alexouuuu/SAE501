
//maxime derenes

// sections
import ScrollFormation from "./FormationsComps/ScrollFormation";
import AnimationMMI from "./FormationsComps/AnimationMMI";
import HeroFormation from "./FormationsComps/HeroFormation";
import DomainesFormation from "./FormationsComps/DomainesFormation";
import VideoFormation from "./FormationsComps/VideoFormation";
import AnneesFormation from "./FormationsComps/AnneesFormation";
import OrientationFormation from "./FormationsComps/OrientationFormation";
import LiensFormation from "./FormationsComps/LiensFormation";

import SeparatorHaut from "../../composants/separatorhaut";
import SeparatorBas from "../../composants/separatorbas";

// bonus
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";

import Espacement from "../../composants/espacement";
// gsap

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Formation() {

    const FormationRef = useRef(null);

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
        }, FormationRef);

        return () => context.revert();
    }, []);

    return (
        <section className="text-gray-900" ref={FormationRef}>
            <TitreProps titre="BUT MMI - La formation" />
            <HeroFormation />
            <Filarial titrePage="La formation" />

            <ScrollFormation/> {/*incite a scroll*/}

            <AnimationMMI /> {/*animation*/}

            <div className="fadeInOnScroll">
                <Espacement/>
                <DomainesFormation />
                <Espacement/>
            </div>

            <div className="fadeInOnScroll">
                <SeparatorHaut/>
                <VideoFormation />
                <SeparatorBas/>
            </div>
            <div className="fadeInOnScroll">
                <Espacement/>
                <AnneesFormation />
                <Espacement/>
            </div>
            <div className="fadeInOnScroll">
                <SeparatorHaut/>
                <OrientationFormation />
                <SeparatorBas/>
            </div>
            <div className="fadeInOnScroll">
                <LiensFormation />
            </div>

            {/*faudra rajouter des espacements, c'est trop proches les sections*/}

        </section>
    );
}
