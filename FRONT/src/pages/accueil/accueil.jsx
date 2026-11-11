// sections
// maxime derènes

import LandingAccueil from "./pageAccueilComps/landingAccueil"
import SectionJPO from "./pageAccueilComps/sectionJPO"
import FAQ from "./pageAccueilComps/FAQ";
import PrecisionFormation from "./pageAccueilComps/PrecisionFormation";
import ProjetsEtudiants from "./pageAccueilComps/projetsetudiants";
import VisiteVirtuelleTeaser from "./pageAccueilComps/visitevirtuelleteaser";
import VideoIUT from "./pageAccueilComps/videoIUT";
// import Separator from "./pageAccueilComps/separator";

// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

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

            <SectionJPO /> {/*Comment se rendre à la JPO*/}
            {/* <Separator/> */}

            <div className="fadeInOnScroll">
                <PrecisionFormation /> {/* préciser que le site de meaux enseigne : Développement web et dispositifs interactifs - site de Meaux */}
            </div>
            
            <Espacement />

            <div className="fadeInOnScroll">
                <VideoIUT />
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <VisiteVirtuelleTeaser /> {/* NOUVEAU : Teaser pour inciter à tester la visite virtuelle */}
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <ProjetsEtudiants /> {/* NOUVEAU : Exemples concrets de réalisations d'étudiants */}
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <FAQ /> {/*questions fréquentes*/}
            </div>
        </section>
    )
}