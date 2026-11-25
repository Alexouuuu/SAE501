
//maxime derenes

// sections
import ScrollFormation from "./FormationsComps/ScrollFormation";
import AnimationMMI from "./FormationsComps/AnimationMMI";
import HeroFormation from "./FormationsComps/HeroFormation";
import DomainesFormation from "./FormationsComps/DomainesFormation";
import VideoFormation from "./FormationsComps/VideoFormation";
import OrientationFormation from "./FormationsComps/OrientationFormation";
import LiensFormation from "./FormationsComps/LiensFormation";

import SeparatorHaut from "../../composants/separatorhaut";
import SeparatorBas from "../../composants/separatorbas";

// bonus
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";

import Espacement from "../../composants/espacement";
// gsap

import { useRef } from "react";
import useFadeInOnScroll from "../../composants/useFadeInOnScroll";

export default function Formation() {

    const FormationRef = useRef(null);

    useFadeInOnScroll(FormationRef);

    return (
        <section className="text-gray-900" ref={FormationRef}>
            <TitreProps titre="La formation MMI" />
            <HeroFormation />
            <Filarial titrePage="La formation" />

            <ScrollFormation /> {/*incite a scroll*/}

            <AnimationMMI />
            
            <div className="fadeInOnScroll">
                <SeparatorHaut />
                <OrientationFormation /> {/*a refaire*/}
                <SeparatorBas />
            </div>

            <div className="fadeInOnScroll">
                <Espacement />
                <DomainesFormation />
                <Espacement />
            </div>

            <div className="fadeInOnScroll">
                <SeparatorHaut />
                <VideoFormation />
                <SeparatorBas />
            </div>
            <div className="fadeInOnScroll">
                <Espacement />
                <LiensFormation />
                <Espacement />
            </div>

            {/*faudra rajouter des espacements, c'est trop proches les sections*/}

        </section>
    );
}
