package SAE501._PC.controller;

import SAE501._PC.entity.Utilisateur;
import java.time.LocalDate;
import java.time.Period;

public record UtilisateurAdminPayload(
    Long id,
    String nom,
    String prenom,
    String email,
    String sexe,
    String ville,
    Integer age,
    String filiere,
    Boolean interesseFormation,
    Boolean presentJpo
) {
    public static UtilisateurAdminPayload from(Utilisateur utilisateur) {
        Integer age = utilisateur.getDateNaissance() == null
            ? null
            : Period.between(utilisateur.getDateNaissance(), LocalDate.now()).getYears();
        return new UtilisateurAdminPayload(
            utilisateur.getId(),
            utilisateur.getNom(),
            utilisateur.getPrenom(),
            utilisateur.getEmail(),
            utilisateur.getSexe(),
            utilisateur.getVille(),
            age,
            utilisateur.getFiliere(),
            utilisateur.getInteresseFormation(),
            utilisateur.getPresentJpo()
        );
    }
}
