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

import { useRef } from "react";
import useFadeInOnScroll from "../../composants/useFadeInOnScroll";

export default function JPO() {

    const JPORef = useRef(null);

    useFadeInOnScroll(JPORef);

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