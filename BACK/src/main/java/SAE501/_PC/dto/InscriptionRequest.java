package SAE501._PC.dto;

import java.time.LocalDate;

public record InscriptionRequest(String nom, String prenom, String email, String password, String genre, LocalDate dateNaissance, String adresse, String complementAdresse, String codePostal, String ville, Boolean interesseFormation) {}
