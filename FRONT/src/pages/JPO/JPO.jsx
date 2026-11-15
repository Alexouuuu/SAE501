
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

export default function JPO() {
    // Présentation de la page événements
    return (
        <section>
            <TitreProps titre={"JPO"} />
            <BannerHead />
            <Filarial titrePage={"JPO"} />
        </section>
    );
}