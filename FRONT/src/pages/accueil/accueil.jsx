// sections
// maxime derènes

import LandingAccueil from "./pageAccueilComps/landingAccueil"
import FAQ from "./pageAccueilComps/FAQ";
import PrecisionFormation from "./pageAccueilComps/PrecisionFormation";
import ProjetsActualites from "./pageAccueilComps/ProjetsActualites";
import VisiteVirtuelleTeaser from "./pageAccueilComps/visitevirtuelleteaser";
import VideoIUT from "./pageAccueilComps/videoIUT";

// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

import SeparatorHaut from "../../composants/separatorhaut";
import SeparatorBas from "../../composants/separatorbas";
// gsap

import { useRef } from "react";
import useFadeInOnScroll from "../../composants/useFadeInOnScroll";

export default function Accueil() {
    const accueilRef = useRef(null);

    useFadeInOnScroll(accueilRef);

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
                <SeparatorHaut />
                <VideoIUT />
                <SeparatorBas />
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <VisiteVirtuelleTeaser /> {/* NOUVEAU : Teaser pour inciter à tester la visite virtuelle */}
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <SeparatorHaut />
                <ProjetsActualites /> {/* projets étudiants + actualités du BUT MMI */}
                <SeparatorBas />
            </div>

            <Espacement />

            <div className="fadeInOnScroll">
                <FAQ /> {/*questions fréquentes*/}
            </div>
        </section >
    )
}