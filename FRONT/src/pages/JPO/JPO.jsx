
import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import JPOHero from "./JPOcomps/JPOhero"

export default function JPO() {
    // Présentation de la page événements
    return (
        <section>
            <TitreProps titre={"JPO"} />
            <JPOHero/>
            <Filarial titrePage={"JPO"} />
        </section>
    );
}