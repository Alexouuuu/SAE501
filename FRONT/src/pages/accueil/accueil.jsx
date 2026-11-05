// sections
import LandingAccueil from "./pageAccueilComps/landingAccueil"
import SectionJPO from "./pageAccueilComps/sectionJPO"
import SectionEnseignements from "./pageAccueilComps/sectionEnseignement";
import SectionFAQ from "./pageAccueilComps/sectionFAQ";
// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

export default function Accueil() {
    return (
        <section>
            <TitreProps titre={"Accueil"} />
            <LandingAccueil /> {/* banner avec img de l'iut ou de quoi attirer des gens + info dates / btn redirection*/}
            <Espacement/>
            <SectionJPO /> {/*Comment se rendre à la JPO*/}
            <Espacement/>
            
            <SectionEnseignements />


            <Espacement/>
            <SectionFAQ />
            <Espacement/>
        </section>
    )
}