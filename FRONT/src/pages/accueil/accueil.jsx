// sections
import LandingAccueil from "./pageAccueilComps/landingAccueil"
import SectionJPO from "./pageAccueilComps/sectionJPO"
import InfosUniv from "./pageAccueilComps/infosUniv";
import SectionFAQ from "./pageAccueilComps/sectionFAQ";
// autres
import TitreProps from "../../composants/titreProps";
import Espacement from "../../composants/espacement"

export default function Accueil() {
    return (
        <section>
            <TitreProps titre={"Accueil"}/>
                <LandingAccueil /> {/* banner avec img de l'iut ou de quoi attirer des gens + info dates / btn redirection*/}
            <Espacement/>
                <InfosUniv/>{/*Informations : Parler de la formation et des cursus qui sont présentés avec des icons interactives qui changent le texte et l'interface*/}
            <Espacement/>
                <SectionJPO /> {/*Présentation de la JPO et etat ouverture/fermé avec les dates et détails*/}
            <Espacement/>
                <SectionFAQ/>
            <Espacement/>
        </section>
    )
}