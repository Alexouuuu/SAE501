// sections
// maxime derènes

import LandingAccueil from "./pageAccueilComps/landingAccueil"
import FAQ from "./pageAccueilComps/FAQ";
import PrecisionFormation from "./pageAccueilComps/PrecisionFormation";
import ProjetsEtudiants from "./pageAccueilComps/projetsetudiants";
import VisiteVirtuelleTeaser from "./pageAccueilComps/visitevirtuelleteaser";
import VideoIUT from "./pageAccueilComps/videoIUT";

// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

import SeparatorHaut from "../../composants/separatorhaut";
import SeparatorBas from "../../composants/separatorbas";
// gsap

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Accueil() {
    const accueilRef = useRef(null);

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
        }, accueilRef);

        return () => context.revert();
    }, []);

    return (
        <section ref={accueilRef}>
            <TitreProps titre={"Accueil"} />
            <LandingAccueil /> {/* banner avec img de l'iut ou de quoi attirer des gens + info dates / btn redirection*/}

            <Espacement />
            
            <div className="fadeInOnScroll">
                <PrecisionFormation /> {/* préciser que le site de meaux enseigne : Développement web et dispositifs interactifs - site de Meaux */}
            </div>
            
            <Espacement />

            <div className="fadeInOnScroll">
                <SeparatorHaut/>
                <VideoIUT />
                <SeparatorBas/>
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <VisiteVirtuelleTeaser /> {/* NOUVEAU : Teaser pour inciter à tester la visite virtuelle */}
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <SeparatorHaut/>
                <ProjetsEtudiants /> {/* NOUVEAU : Exemples concrets de réalisations d'étudiants */}
                <SeparatorBas/>
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <FAQ /> {/*questions fréquentes*/}
            </div>
        </section >
    )
}