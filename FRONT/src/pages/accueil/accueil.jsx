// sections
import LandingAccueil from "./pageAccueilComps/landingAccueil"
import SectionJPO from "./pageAccueilComps/sectionJPO"
import Enseignements from "./pageAccueilComps/Enseignement";
import FAQ from "./pageAccueilComps/FAQ";
import PrecisionFormation from "./pageAccueilComps/PrecisionFormation";
import ProjetsEtudiants from "./pageAccueilComps/projetsetudiants";
import VisiteVirtuelleTeaser from "./pageAccueilComps/visitevirtuelleteaser";
import VideoIUT from "./pageAccueilComps/videoIUT";
// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

export default function Accueil() {
    return (
        <section>
            <TitreProps titre={"Accueil"} />
            <LandingAccueil /> {/* banner avec img de l'iut ou de quoi attirer des gens + info dates / btn redirection*/}

            <SectionJPO /> {/*Comment se rendre à la JPO*/}
            <Espacement />

            {/*Animation gsap : présentation MMI*/}
            <Enseignements />
            <Espacement />

            <PrecisionFormation /> {/* préciser que le site de meaux enseigne : Développement web et dispositifs interactifs - site de Meaux */}
            <Espacement />

            <ProjetsEtudiants /> {/* NOUVEAU : Exemples concrets de réalisations d'étudiants */}

            <VisiteVirtuelleTeaser /> {/* NOUVEAU : Teaser pour inciter à tester la visite virtuelle */}

            <VideoIUT/>
            <Espacement />
            <FAQ /> {/*questions fréquentes*/}
        </section>
    )
}