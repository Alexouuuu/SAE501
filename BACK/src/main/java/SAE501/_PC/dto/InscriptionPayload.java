package SAE501._PC.dto;

import java.time.LocalDate;

public record InscriptionPayload(
    String nom,
    String prenom,
    String email,
    String password,
    String sexe,
    String ville,
    LocalDate dateNaissance,
    String filiere,
    Boolean interesseFormation
) {}
