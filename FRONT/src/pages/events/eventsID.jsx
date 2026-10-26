import TitreProps from "../../composants/titreProps";

export default function evenementsInfos() {
    return (
        <section>
            <TitreProps titre={"Infos Evenements"}></TitreProps>
        </section>
    );

    // ex : Détail d'un Événement (/evenements/:id)
    // Informations complètes sur l'activité.
    // Espace de lecture des Commentaires validés
    // Bouton d'action pour s'inscrire (redirige vers la connexion si non connecté).
}