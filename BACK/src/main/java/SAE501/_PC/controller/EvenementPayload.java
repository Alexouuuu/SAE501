package SAE501._PC.controller;

import SAE501._PC.entity.Evenement;
import java.time.Instant;

public record EvenementPayload(
    Long id,
    String titre,
    String description,
    Instant debut,
    Instant fin,
    Integer capaciteMax,
    String salle,
    String matiere,
    Boolean activiteJpo
) {
    public static EvenementPayload from(Evenement evenement) {
        return new EvenementPayload(
            evenement.getId(),
            evenement.getTitre(),
            evenement.getDescription(),
            evenement.getDebut(),
            evenement.getFin(),
            evenement.getCapaciteMax(),
            evenement.getSalle(),
            evenement.getMatiere(),
            evenement.getActiviteJpo()
        );
    }
}
