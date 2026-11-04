import TitreProps from "../../composants/titreProps";
import Filarial from "../../composants/filArial";
import BannerHead from "../../composants/bannerHead";
export default function evenements() {
    return (
        <section>
            <TitreProps titre={"Les évènements JPO"} />
            <BannerHead />
            <Filarial titrePage={"Les évènements JPO"} />
        </section>
    );

    // Liste de tous les Événements d'une JPO (conférences, ateliers, visites) + redirections.
    // détails des horaires, capacitemax, description etc
    // peut être mettre une page avec la liste des events puis une
    // redirection vers la page de l'event avec un id pour l'event
    // ex : Détail d'un Événement (/evenements/:id)
}