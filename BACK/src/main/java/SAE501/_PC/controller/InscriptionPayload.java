package SAE501._PC.controller;

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
