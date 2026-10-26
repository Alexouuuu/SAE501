import TitreProps from "../../composants/titreProps";

export default function evenements(){
    return(
        <section>
            <TitreProps titre={"Evenements"}/>
        </section>
    );

    // Liste de tous les Événements d'une JPO (conférences, ateliers, visites) + redirections.
    // détails des horaires, capacitemax, description etc
    // peut être mettre une page avec la liste des events puis une
    // redirection vers la page de l'event avec un id pour l'event
    // ex : Détail d'un Événement (/evenements/:id)
}