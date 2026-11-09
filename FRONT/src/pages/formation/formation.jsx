
// sections
import HeroFormation from "./FormationsComps/HeroFormation";
import DomainesFormation from "./FormationsComps/DomainesFormation";
import VideoFormation from "./FormationsComps/VideoFormation";
import AnneesFormation from "./FormationsComps/AnneesFormation";
import OrientationFormation from "./FormationsComps/OrientationFormation";
import LiensFormation from "./FormationsComps/LiensFormation";

// bonus
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
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

            <div className="fadeInOnScroll">
                <DomainesFormation />
            </div>
            <div className="fadeInOnScroll">
                <VideoFormation />
            </div>
            <div className="fadeInOnScroll">
                <AnneesFormation />
            </div>
            <div className="fadeInOnScroll">
                <OrientationFormation />
            </div>
            <div className="fadeInOnScroll">
                <LiensFormation />
            </div>

            {/*faudra rajouter des espacements, c'est trop proches les sections*/}

        </section>
    );
}
