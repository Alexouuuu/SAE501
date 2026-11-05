// Elle doit expliquer de manière transparente aux visiteurs ce que vous faites de leurs informations. ( mettre un tableau par exemple)
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
export default function PolitiqueConfidentialite() {
    return (
        <section>
            <TitreProps titre={"Politique de confidentialité"}></TitreProps>
            <BannerHead />
            <Filarial titrePage={"Politique de confidentialité"} />
        </section>
    )
}