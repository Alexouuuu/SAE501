import TitreProps from "../../composants/titreProps"
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";

// import EventsInscriptionsList from "./MonEspaceComps/EventsInscriptionsList"
// import JPOInscriptionsList from "./MonEspaceComps/JPOInscriptionsList";
// import PlanningCreation from "./MonEspaceComps/PlanningCreation";
// import SettingsUsers from "./MonEspaceComps/SettingsUsers";

export default function MonEspace() {
    return (
        <section>
            <TitreProps titre={"Mon espace"} />
            <BannerHead />
            <Filarial titrePage={"Mon espace"} />
            {/*rajouter l'auth pour plus tard si on est pas co*/}
        </section>
    )
}