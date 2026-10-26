// sections
import LandingAccueil from "../../composants/pageAccueil/landingAccueil"
import SectionJPO from "../../composants/pageAccueil/sectionJPO"
import EtatInscription from "../../composants/pageAccueil/etatInscription"
// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

export default function Accueil() {
    return (
        <section>
            <TitreProps titre={"Accueil"}/>
            <LandingAccueil />
            <Espacement/>
            <SectionJPO />
            <Espacement/>
            <EtatInscription />
        </section>
    )
}